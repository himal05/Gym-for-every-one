"use client";

import { FormEvent, useMemo, useState } from "react";
import rawLocations from "../data/nepal-locations.json";

type NepalLocations = Record<string, Record<string, Record<string, string[]>>>;
const locations = rawLocations as NepalLocations;

const provinceLabels: Record<string, { en: string; ne: string }> = {
  "Koshi Province": { en: "Koshi", ne: "कोशी" },
  "Madesh Province": { en: "Madhesh", ne: "मधेश" },
  "Bagmati Province": { en: "Bagmati", ne: "बागमती" },
  "Gandaki Province": { en: "Gandaki", ne: "गण्डकी" },
  "Lumbini Province": { en: "Lumbini", ne: "लुम्बिनी" },
  "Karnali Province": { en: "Karnali", ne: "कर्णाली" },
  "Sudurpaschim Province": { en: "Sudurpashchim", ne: "सुदूरपश्चिम" },
};

const activities = [
  { en: "Gym & fitness", ne: "जिम र फिटनेस", query: "gym fitness center" },
  { en: "Indoor games", ne: "इन्डोर गेम", query: "indoor games sports club" },
  { en: "Children's play", ne: "बाल खेलकुद", query: "children play center playground" },
  { en: "Sports ground", ne: "खेल मैदान", query: "sports ground stadium" },
  { en: "Entertainment", ne: "मनोरञ्जन", query: "family entertainment recreation" },
];

const knownToles: Record<string, string[]> = {
  "Hetauda Sub-Metropolitian City|19": ["Bastipur"],
};

const cleanMunicipality = (name: string) => name.replace("Metropolitian", "Metropolitan").trim();
const firstKey = (value: Record<string, unknown>) => Object.keys(value)[0] ?? "";
const suggestedTole = (municipality: string, ward: string) => knownToles[`${municipality}|${ward}`]?.[0] ?? "";

export default function LocationsPage() {
  const [lang, setLang] = useState<"en" | "ne">("en");
  const [province, setProvince] = useState("Bagmati Province");
  const [district, setDistrict] = useState("Makwanpur");
  const [municipality, setMunicipality] = useState("Hetauda Sub-Metropolitian City");
  const [ward, setWard] = useState("19");
  const [tole, setTole] = useState("Bastipur");
  const [activity, setActivity] = useState(activities[0].query);
  const [query, setQuery] = useState("gym fitness center near Bastipur Hetauda Ward 19 Makwanpur Nepal");
  const [gpsMessage, setGpsMessage] = useState("");
  const ne = lang === "ne";

  const districts = useMemo(() => Object.keys(locations[province] ?? {}), [province]);
  const municipalities = useMemo(() => Object.keys(locations[province]?.[district] ?? {}), [province, district]);
  const wards = locations[province]?.[district]?.[municipality] ?? [];
  const toleSuggestions = knownToles[`${municipality}|${ward}`] ?? [];
  const mapUrl = useMemo(() => `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`, [query]);
  const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  function changeProvince(value: string) {
    const nextDistrict = firstKey(locations[value]);
    const nextMunicipality = firstKey(locations[value][nextDistrict]);
    const nextWard = locations[value][nextDistrict][nextMunicipality][0] ?? "1";
    setProvince(value); setDistrict(nextDistrict); setMunicipality(nextMunicipality); setWard(nextWard); setTole(suggestedTole(nextMunicipality, nextWard));
  }

  function changeDistrict(value: string) {
    const nextMunicipality = firstKey(locations[province][value]);
    const nextWard = locations[province][value][nextMunicipality][0] ?? "1";
    setDistrict(value); setMunicipality(nextMunicipality); setWard(nextWard); setTole(suggestedTole(nextMunicipality, nextWard));
  }

  function changeMunicipality(value: string) {
    const nextWard = locations[province][district][value][0] ?? "1";
    setMunicipality(value); setWard(nextWard); setTole(suggestedTole(value, nextWard));
  }

  function changeWard(value: string) {
    setWard(value); setTole(suggestedTole(municipality, value));
  }

  function search(event: FormEvent) {
    event.preventDefault();
    const selected = activities.find((item) => item.query === activity)?.query || activity;
    const place = [tole, cleanMunicipality(municipality), `Ward ${ward}`, district, provinceLabels[province]?.en, "Nepal"].filter(Boolean).join(" ");
    setQuery(`${selected} near ${place}`);
    setGpsMessage("");
  }

  function useGps() {
    if (!navigator.geolocation) { setGpsMessage(ne ? "यो ब्राउजरमा GPS उपलब्ध छैन।" : "GPS is not available in this browser."); return; }
    setGpsMessage(ne ? "स्थान अनुमति पर्खँदै…" : "Waiting for location permission…");
    navigator.geolocation.getCurrentPosition((position) => {
      const selected = activities.find((item) => item.query === activity)?.query || activity;
      setQuery(`${selected} near ${position.coords.latitude},${position.coords.longitude}`);
      setGpsMessage(ne ? "तपाईंको हालको स्थान वरपर खोजिँदैछ।" : "Searching around your current location.");
    }, () => setGpsMessage(ne ? "स्थान अनुमति प्राप्त भएन। माथिको ठेगाना प्रयोग गर्नुहोस्।" : "Location permission was not available. Use the address search above."), { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 });
  }

  function quickSearch(value: string) { setQuery(value); setGpsMessage(""); }

  return <main className="locations-page">
    <header className="sub-header"><a className="brand" href="/"><span className="brand-mark">H</span><span>HIMAL <b>GYM</b></span></a><nav><a href="/#training">{ne ? "व्यायाम" : "Exercises"}</a><a href="/nutrition/protein-plans">{ne ? "प्रोटिन डाइट" : "Protein plans"}</a></nav><div className="lang-toggle"><button className={!ne ? "active" : ""} onClick={() => setLang("en")}>EN</button><button className={ne ? "active" : ""} onClick={() => setLang("ne")}>नेपाली</button></div></header>

    <section className="location-hero"><div><p className="section-kicker">{ne ? "नेपाल गतिविधि खोजकर्ता" : "Nepal activity finder"}</p><h1>{ne ? "खोज्नुहोस्।\nजानुहोस्। खेल्नुहोस्।" : "FIND IT.\nGET THERE. MOVE."}</h1><p>{ne ? "प्रदेश, जिल्ला, पालिका र मान्य वडा छान्नुहोस्। त्यसपछि Google Maps बाट नजिकका जिम, खेल र मनोरञ्जन स्थल खोज्नुहोस्।" : "Choose a province, district, local municipality and valid ward, then use live Google Maps results to find nearby gyms, games and entertainment."}</p></div><div className="location-counts"><article><strong>7</strong><span>{ne ? "प्रदेश" : "provinces"}</span></article><article><strong>77</strong><span>{ne ? "जिल्ला" : "districts"}</span></article><article><strong>753</strong><span>{ne ? "स्थानीय तह" : "local levels"}</span></article></div></section>

    <section className="finder-section section-pad"><div className="finder-copy"><p className="section-kicker">{ne ? "क्रमिक स्थान छनोट" : "Smart location selection"}</p><h2>{ne ? "जिल्लादेखि\nटोलसम्म।" : "DISTRICT TO\nLOCALITY."}</h2><p>{ne ? "जिल्ला छानेपछि पालिका सूची आउँछ। पालिका छानेपछि त्यसका मान्य वडा स्वतः आउँछन्। उपलब्ध भए टोल सुझाव देखिन्छ; अन्यथा आफ्नो टोल लेख्न सक्नुहुन्छ।" : "Selecting a district loads its municipalities. Selecting a municipality automatically loads its valid wards. Known toles are suggested; elsewhere, type the exact locality and Google Maps will find live places."}</p></div>
      <form className="location-form" onSubmit={search}>
        <label>{ne ? "प्रदेश" : "Province"}<select value={province} onChange={(event) => changeProvince(event.target.value)}>{Object.keys(provinceLabels).map((key) => <option key={key} value={key}>{ne ? provinceLabels[key].ne : provinceLabels[key].en}</option>)}</select></label>
        <label>{ne ? "जिल्ला" : "District"}<select value={district} onChange={(event) => changeDistrict(event.target.value)}>{districts.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="wide">{ne ? "पालिका / शहर" : "Municipality / city"}<select value={municipality} onChange={(event) => changeMunicipality(event.target.value)}>{municipalities.map((item) => <option value={item} key={item}>{cleanMunicipality(item)}</option>)}</select></label>
        <label>{ne ? "वडा" : "Ward"}<select value={ward} onChange={(event) => changeWard(event.target.value)}>{wards.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>{ne ? "टोल / स्थानीय नाम" : "Tole / locality"}<input list="tole-options" value={tole} onChange={(event) => setTole(event.target.value)} placeholder={ne ? "जस्तै: बस्तीपुर" : "Example: Bastipur"} /><datalist id="tole-options">{toleSuggestions.map((item) => <option key={item} value={item} />)}</datalist></label>
        <label className="wide">{ne ? "के खोज्ने?" : "Activity"}<select value={activity} onChange={(event) => setActivity(event.target.value)}>{activities.map((item) => <option key={item.query} value={item.query}>{ne ? item.ne : item.en}</option>)}</select></label>
        <button className="primary-btn wide" type="submit">{ne ? "Google Maps मा खोज्नुहोस्" : "Search Google Maps"}<span>→</span></button>
        <button className="gps-btn wide" type="button" onClick={useGps}><span>◎</span>{ne ? "मेरो GPS स्थान प्रयोग गर्नुहोस्" : "Use my GPS location"}</button>
        {gpsMessage && <p className="gps-message wide" role="status">{gpsMessage}</p>}
      </form>
    </section>

    <section className="map-section"><div className="map-toolbar"><div><small>{ne ? "हालको खोज" : "Current search"}</small><strong>{query}</strong></div><a href={mapsSearch} target="_blank" rel="noreferrer">{ne ? "Google Maps एपमा खोल्नुहोस्" : "Open in Google Maps"} ↗</a></div><iframe key={mapUrl} src={mapUrl} title="Google Map showing activity search results" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe></section>

    <section className="quick-searches section-pad"><div className="guide-section-head"><p className="section-kicker">{ne ? "हेटौँडा–१९ उदाहरण" : "Hetauda–19 examples"}</p><h2>{ne ? "एक क्लिकमा\nखोज्नुहोस्।" : "SEARCH IN\nONE CLICK."}</h2></div><div className="quick-grid"><button onClick={() => quickSearch("Pathak Gym Bastipur Hetauda 19 Makwanpur Nepal")}><span>01</span><h3>{ne ? "पाठक जिम खोज" : "Search Pathak Gym"}</h3><p>{ne ? "बस्तीपुर, हेटौँडा–१९ वरपर Google Maps नतिजा खोल्छ।" : "Opens Google Maps results around Bastipur, Hetauda–19."}</p><b>→</b></button><button onClick={() => quickSearch("children play center near Bastipur Hetauda 19 Makwanpur Nepal")}><span>02</span><h3>{ne ? "बाल खेलकुद खोज" : "Children's activities"}</h3><p>{ne ? "नजिकका प्ले सेन्टर, पार्क र बाल गतिविधि खोज्छ।" : "Searches nearby play centers, parks and children's activities."}</p><b>→</b></button><button onClick={() => quickSearch("indoor games sports club near Hetauda 19 Makwanpur Nepal")}><span>03</span><h3>{ne ? "इन्डोर गेम खोज" : "Indoor games"}</h3><p>{ne ? "नजिकका गेम हाउस र स्पोर्ट्स क्लब खोज्छ।" : "Searches nearby game houses and sports clubs."}</p><b>→</b></button></div><p className="map-note">{ne ? "टोल र व्यवसायको नाम समयसँग बदलिन सक्छ। Google Maps को लाइभ नतिजामा नाम, फोन, समय र समीक्षा पुष्टि गर्नुहोस्।" : "Tole and business information can change. Confirm names, phone numbers, hours and reviews in the live Google Maps listing before visiting."}</p></section>

    <section className="map-privacy"><strong>{ne ? "डेटा र गोपनीयता" : "Data & privacy"}</strong><p>{ne ? "पालिका र वडा सूची सार्वजनिक प्रशासनिक डाटामा आधारित छ। GPS बटन थिचेपछि मात्र स्थान अनुमति मागिन्छ र वेबसाइटले स्थान सेभ गर्दैन।" : "Municipality and ward choices use public Nepal administrative data. Location permission is requested only after pressing GPS, and this website does not save your position."}</p><div><a href="https://ec.nsonepal.gov.np/html/admin_code.html" target="_blank" rel="noreferrer">Nepal NSO local-level codes ↗</a><a href="https://github.com/rukh-debug/location-np" target="_blank" rel="noreferrer">Open ward dataset ↗</a><a href="https://developers.google.com/maps/documentation/urls/get-started" target="_blank" rel="noreferrer">Google Maps URL documentation ↗</a></div></section>
  </main>;
}
