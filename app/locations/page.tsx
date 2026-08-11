"use client";

import { FormEvent, useMemo, useState } from "react";

const provinceDistricts: Record<string, string[]> = {
  "Koshi": ["Bhojpur","Dhankuta","Ilam","Jhapa","Khotang","Morang","Okhaldhunga","Panchthar","Sankhuwasabha","Solukhumbu","Sunsari","Taplejung","Terhathum","Udayapur"],
  "Madhesh": ["Bara","Dhanusha","Mahottari","Parsa","Rautahat","Saptari","Sarlahi","Siraha"],
  "Bagmati": ["Bhaktapur","Chitwan","Dhading","Dolakha","Kathmandu","Kavrepalanchok","Lalitpur","Makwanpur","Nuwakot","Ramechhap","Rasuwa","Sindhuli","Sindhupalchok"],
  "Gandaki": ["Baglung","Gorkha","Kaski","Lamjung","Manang","Mustang","Myagdi","Nawalpur","Parbat","Syangja","Tanahun"],
  "Lumbini": ["Arghakhanchi","Banke","Bardiya","Dang","Gulmi","Kapilvastu","Nawalparasi West","Palpa","Pyuthan","Rolpa","Rukum East","Rupandehi"],
  "Karnali": ["Dailekh","Dolpa","Humla","Jajarkot","Jumla","Kalikot","Mugu","Rukum West","Salyan","Surkhet"],
  "Sudurpashchim": ["Achham","Baitadi","Bajhang","Bajura","Dadeldhura","Darchula","Doti","Kailali","Kanchanpur"],
};

const provinceNe: Record<string,string> = { Koshi:"कोशी", Madhesh:"मधेश", Bagmati:"बागमती", Gandaki:"गण्डकी", Lumbini:"लुम्बिनी", Karnali:"कर्णाली", Sudurpashchim:"सुदूरपश्चिम" };
const activities = [
  { en:"Gym & fitness", ne:"जिम र फिटनेस", query:"gym fitness center" },
  { en:"Indoor games", ne:"इनडोर गेम", query:"indoor games sports club" },
  { en:"Children's play", ne:"बाल खेलकुद", query:"children play center playground" },
  { en:"Sports ground", ne:"खेल मैदान", query:"sports ground stadium" },
  { en:"Entertainment", ne:"मनोरञ्जन", query:"family entertainment recreation" },
];

export default function LocationsPage() {
  const [lang,setLang] = useState<"en"|"ne">("en");
  const [province,setProvince] = useState("Bagmati");
  const [district,setDistrict] = useState("Makwanpur");
  const [city,setCity] = useState("Hetauda");
  const [ward,setWard] = useState("19");
  const [activity,setActivity] = useState(activities[0].query);
  const [query,setQuery] = useState("gym fitness center near Bastipur Hetauda Ward 19 Makwanpur Nepal");
  const [gpsMessage,setGpsMessage] = useState("");
  const ne = lang === "ne";
  const districts = provinceDistricts[province];
  const mapUrl = useMemo(() => `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`,[query]);
  const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  function changeProvince(value:string) {
    setProvince(value); setDistrict(provinceDistricts[value][0]);
  }
  function search(event:FormEvent) {
    event.preventDefault();
    const selected = activities.find((item)=>item.query===activity)?.query || activity;
    setQuery(`${selected} near ${city}${ward ? ` Ward ${ward}` : ""} ${district} ${province} Nepal`);
    setGpsMessage("");
  }
  function useGps() {
    if (!navigator.geolocation) { setGpsMessage(ne ? "यो ब्राउजरमा GPS उपलब्ध छैन।" : "GPS is not available in this browser."); return; }
    setGpsMessage(ne ? "स्थान अनुमति पर्खँदै…" : "Waiting for location permission…");
    navigator.geolocation.getCurrentPosition((position)=>{
      const {latitude,longitude}=position.coords;
      const selected=activities.find((item)=>item.query===activity)?.query || activity;
      setQuery(`${selected} near ${latitude},${longitude}`);
      setGpsMessage(ne ? "तपाईंको हालको स्थान वरपर खोजिँदैछ।" : "Searching around your current location.");
    },()=>setGpsMessage(ne ? "स्थान अनुमति प्राप्त भएन। माथिको ठेगाना प्रयोग गर्नुहोस्।" : "Location permission was not available. Use the address search above."),{enableHighAccuracy:true,timeout:10000,maximumAge:300000});
  }
  function quickSearch(value:string) { setQuery(value); setGpsMessage(""); }

  return <main className="locations-page">
    <header className="sub-header"><a className="brand" href="/"><span className="brand-mark">H</span><span>HIMAL <b>GYM</b></span></a><nav><a href="/#training">{ne?"व्यायाम":"Exercises"}</a><a href="/nutrition/protein-plans">{ne?"प्रोटिन डाइट":"Protein plans"}</a></nav><div className="lang-toggle"><button className={!ne?"active":""} onClick={()=>setLang("en")}>EN</button><button className={ne?"active":""} onClick={()=>setLang("ne")}>नेपाली</button></div></header>
    <section className="location-hero"><div><p className="section-kicker">{ne?"नेपाल गतिविधि खोजकर्ता":"Nepal activity finder"}</p><h1>{ne?"खोज्नुहोस्।\nजानुहोस्। खेल्नुहोस्।":"FIND IT.\nGET THERE. MOVE."}</h1><p>{ne?"नेपालका सातै प्रदेशमा जिम, गेम हाउस, बाल खेलकुद, खेल मैदान र पारिवारिक मनोरञ्जन Google Maps मार्फत खोज्नुहोस्।":"Search gyms, game houses, children's activities, sports grounds and family entertainment across all seven provinces using Google Maps."}</p></div><div className="location-counts"><article><strong>7</strong><span>{ne?"प्रदेश":"provinces"}</span></article><article><strong>77</strong><span>{ne?"जिल्ला":"districts"}</span></article><article><strong>GPS</strong><span>{ne?"नजिक खोज":"near-me search"}</span></article></div></section>
    <section className="finder-section section-pad"><div className="finder-copy"><p className="section-kicker">{ne?"स्थान छान्नुहोस्":"Choose a location"}</p><h2>{ne?"तपाईं नजिक\nके छ?":"WHAT'S NEAR\nYOU?"}</h2><p>{ne?"बागमती एउटा प्रदेश हो; पहिलेको प्रदेश नं. २ अहिले मधेश प्रदेश हो। तल बागमती → मकवानपुर → हेटौँडा → वडा १९ उदाहरण तयार छ।":"Bagmati is a province; the former Province No. 2 is now Madhesh Province. The example below is ready as Bagmati → Makwanpur → Hetauda → Ward 19."}</p></div>
      <form className="location-form" onSubmit={search}><label>{ne?"प्रदेश":"Province"}<select value={province} onChange={(e)=>changeProvince(e.target.value)}>{Object.keys(provinceDistricts).map((item)=><option key={item} value={item}>{ne?provinceNe[item]:item}</option>)}</select></label><label>{ne?"जिल्ला":"District"}<select value={district} onChange={(e)=>setDistrict(e.target.value)}>{districts.map((item)=><option key={item}>{item}</option>)}</select></label><label>{ne?"पालिका / शहर":"Municipality / city"}<input value={city} onChange={(e)=>setCity(e.target.value)} placeholder="Hetauda" /></label><label>{ne?"वडा":"Ward"}<input value={ward} onChange={(e)=>setWard(e.target.value)} type="number" min="1" max="99" placeholder="19" /></label><label className="wide">{ne?"के खोज्ने?":"Activity"}<select value={activity} onChange={(e)=>setActivity(e.target.value)}>{activities.map((item)=><option key={item.query} value={item.query}>{ne?item.ne:item.en}</option>)}</select></label><button className="primary-btn wide" type="submit">{ne?"Google Maps मा खोज्नुहोस्":"Search Google Maps"}<span>→</span></button><button className="gps-btn wide" type="button" onClick={useGps}><span>◎</span>{ne?"मेरो GPS स्थान प्रयोग गर्नुहोस्":"Use my GPS location"}</button>{gpsMessage&&<p className="gps-message wide" role="status">{gpsMessage}</p>}</form>
    </section>
    <section className="map-section"><div className="map-toolbar"><div><small>{ne?"हालको खोज":"Current search"}</small><strong>{query}</strong></div><a href={mapsSearch} target="_blank" rel="noreferrer">{ne?"Google Maps एपमा खोल्नुहोस्":"Open in Google Maps"} ↗</a></div><iframe key={mapUrl} src={mapUrl} title="Google Map showing activity search results" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe></section>
    <section className="quick-searches section-pad"><div className="guide-section-head"><p className="section-kicker">{ne?"हेटौँडा–१९ उदाहरण":"Hetauda–19 examples"}</p><h2>{ne?"एक क्लिकमा\nखोज्नुहोस्।":"SEARCH IN\nONE CLICK."}</h2></div><div className="quick-grid"><button onClick={()=>quickSearch("Pathak Gym Bastipur Hetauda 19 Makwanpur Nepal")}><span>01</span><h3>{ne?"पाठक जिम खोज":"Search Pathak Gym"}</h3><p>{ne?"बस्तीपुर, हेटौँडा–१९ वरपर Google Maps नतिजा खोल्छ।":"Opens Google Maps results around Bastipur, Hetauda–19."}</p><b>→</b></button><button onClick={()=>quickSearch("children play center near Bastipur Hetauda 19 Makwanpur Nepal")}><span>02</span><h3>{ne?"बाल खेलकुद खोज":"Children's activities"}</h3><p>{ne?"नजिकका प्ले सेन्टर, पार्क र बाल गतिविधि खोज्छ।":"Searches nearby play centers, parks and children's activities."}</p><b>→</b></button><button onClick={()=>quickSearch("indoor games sports club near Hetauda 19 Makwanpur Nepal")}><span>03</span><h3>{ne?"इनडोर गेम खोज":"Indoor games"}</h3><p>{ne?"नजिकका गेम हाउस र स्पोर्ट्स क्लब खोज्छ।":"Searches nearby game houses and sports clubs."}</p><b>→</b></button></div><p className="map-note">{ne?"व्यवसायको नाम, खुल्ने समय, फोन र समीक्षा Google Maps बाट प्रत्यक्ष देखाइन्छ र समयसँग बदलिन सक्छ। जानुअघि नतिजा पुष्टि गर्नुहोस्।":"Business names, hours, phone numbers and reviews come live from Google Maps and can change. Confirm the listing before visiting."}</p></section>
    <section className="map-privacy"><strong>{ne?"गोपनीयता":"Privacy"}</strong><p>{ne?"GPS बटन थिचेपछि मात्र ब्राउजरले स्थान अनुमति माग्छ। यो वेबसाइटले तपाईंको स्थान सेभ गर्दैन।":"The browser asks for location only after you press the GPS button. This website does not save your location."}</p><a href="https://developers.google.com/maps/documentation/urls/get-started" target="_blank" rel="noreferrer">Google Maps URL documentation ↗</a></section>
  </main>;
}
