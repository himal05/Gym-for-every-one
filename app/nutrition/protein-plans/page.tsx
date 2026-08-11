"use client";

import { type CSSProperties, useMemo, useState } from "react";
import { proteinMeals } from "../../data/protein-plans";
import { pdcaasFoods } from "../../data/pdcaas";

const tiers = ["60–70 g", "100–120 g", "120+ g"] as const;

export default function ProteinPlansPage() {
  const [lang, setLang] = useState<"en" | "ne">("en");
  const [tier, setTier] = useState<(typeof tiers)[number]>("60–70 g");
  const [foodSearch, setFoodSearch] = useState("");
  const [selectedFood, setSelectedFood] = useState(pdcaasFoods[0]);
  const ne = lang === "ne";
  const meals = useMemo(() => proteinMeals.filter((meal) => meal.tier === tier), [tier]);
  const matchingFoods = useMemo(() => {
    const term = foodSearch.trim().toLowerCase();
    return term ? pdcaasFoods.filter((food) => `${food.nameEn} ${food.nameNe}`.toLowerCase().includes(term)) : pdcaasFoods;
  }, [foodSearch]);

  function changeFoodSearch(value: string) {
    setFoodSearch(value);
    const term = value.trim().toLowerCase();
    const match = term ? pdcaasFoods.find((food) => `${food.nameEn} ${food.nameNe}`.toLowerCase().includes(term)) : undefined;
    if (match) setSelectedFood(match);
  }

  return (
    <main className="protein-page">
      <header className="sub-header">
        <a className="brand" href="/"><span className="brand-mark">H</span><span>HIMAL <b>GYM</b></span></a>
        <nav><a href="/#training">{ne ? "व्यायाम" : "Exercises"}</a><a href="#recipes">{ne ? "रेसिपी" : "Recipes"}</a><a href="#supplements">{ne ? "सप्लिमेन्ट" : "Supplements"}</a></nav>
        <div className="lang-toggle"><button className={!ne ? "active" : ""} onClick={() => setLang("en")}>EN</button><button className={ne ? "active" : ""} onClick={() => setLang("ne")}>नेपाली</button></div>
      </header>

      <section className="protein-hero">
        <div>
          <p className="section-kicker">{ne ? "प्रोटिन केन्द्र" : "Protein center"}</p>
          <h1>{ne ? "खाना। शक्ति।\nरिकभरी।" : "EAT. ADAPT.\nRECOVER."}</h1>
          <p>{ne ? "३० घरमै बनाउन सकिने उच्च-प्रोटिन रेसिपी, स्पष्ट ब्याच साइज र सप्लिमेन्ट सुरक्षा—मांसपेशी बनाउन जादुई खाना होइन, निरन्तर योजना चाहिन्छ।" : "30 high-protein home recipes with honest batch sizes and supplement safety. Building muscle takes consistent training, enough energy and a complete diet—not a magic food."}</p>
          <a className="primary-btn" href="#recipes">{ne ? "रेसिपी हेर्नुहोस्" : "Explore recipes"}<span>↓</span></a>
        </div>
        <div className="protein-hero-stats"><article><strong>30</strong><span>{ne ? "घरका रेसिपी" : "home recipes"}</span></article><article><strong>3</strong><span>{ne ? "प्रोटिन तह" : "protein tiers"}</span></article><article><strong>2</strong><span>{ne ? "भाषा" : "languages"}</span></article></div>
      </section>

      <section className="daily-plan section-pad">
        <div className="guide-section-head"><p className="section-kicker">{ne ? "दैनिक संरचना" : "A practical day"}</p><h2>{ne ? "प्रोटिनलाई\nदिनभरि फैलाउनुहोस्।" : "DISTRIBUTE IT\nACROSS THE DAY."}</h2></div>
        <div className="day-grid">
          <article><small>07:00</small><h3>{ne ? "बिहान" : "Breakfast"}</h3><p>{ne ? "अण्डा वा दही + ओट्स + फलफूल" : "Eggs or yogurt + oats + fruit"}</p></article>
          <article><small>12:30</small><h3>{ne ? "दिउँसो" : "Lunch"}</h3><p>{ne ? "दाल + चिकेन/माछा/टोफु + भात + तरकारी" : "Dal + chicken/fish/tofu + rice + vegetables"}</p></article>
          <article><small>{ne ? "तालिमपछि" : "POST-WORKOUT"}</small><h3>{ne ? "सजिलो विकल्प" : "Convenient option"}</h3><p>{ne ? "पूरा खाना; आवश्यक परे दूध वा प्रोटिन शेक" : "A full meal; milk or a protein shake if needed"}</p></article>
          <article><small>19:30</small><h3>{ne ? "बेलुका" : "Dinner"}</h3><p>{ne ? "पनीर/दाल/मासु + रोटी वा आलु + साग" : "Paneer/dal/meat + roti or potato + greens"}</p></article>
        </div>
        <div className="protein-safety-banner"><strong>{ne ? "महत्त्वपूर्ण:" : "Important:"}</strong><p>{ne ? "यहाँका ग्रामहरू पूरा रेसिपीको अनुमान हुन्। १०० ग्रामभन्दा माथिका सबै विकल्प बहु-भाग ब्याच हुन्—एकैपटक खाने लक्ष्य होइन। ब्रान्ड, काँचो/पाकेको तौल र भागअनुसार वास्तविक प्रोटिन फरक हुन्छ; लेबल वा विश्वसनीय खाद्य डाटाबेसबाट पुनःगणना गर्नुहोस्।" : "Protein grams are estimates for the entire recipe. Every option above 100 g is a multi-serving batch—not a one-sitting target. Actual protein varies by brand, raw/cooked weight and portion; recalculate from labels or a reliable food database."}</p></div>
      </section>

      <section className="pdcaas-section section-pad" id="pdcaas">
        <div className="pdcaas-heading"><div><p className="section-kicker">{ne ? "प्रोटिन गुणस्तर उपकरण" : "Protein quality tool"}</p><h2>{ne ? "खाना छान्नुहोस्।\nस्कोर बुझ्नुहोस्।" : "CHOOSE A FOOD.\nREAD THE SCORE."}</h2></div><p>{ne ? "PDCAAS ले प्रोटिनको पाचनयोग्यता र आवश्यक एमिनो एसिडको ढाँचा तुलना गर्छ। यो खानामा कति ग्राम प्रोटिन छ भन्ने मापन होइन।" : "PDCAAS compares protein digestibility and the pattern of essential amino acids. It does not measure how many grams of protein a food contains."}</p></div>
        <div className="pdcaas-tool">
          <article className="pdcaas-result" aria-live="polite">
            <small>{ne ? "चयन गरिएको खाना" : "Selected food"}</small>
            <h3>{ne ? selectedFood.nameNe : selectedFood.nameEn}</h3>
            <div className="score-ring" style={{ "--score": `${selectedFood.score * 100}%` } as CSSProperties}><strong>{selectedFood.score.toFixed(2)}</strong><span>/ 1.00</span></div>
            <b>{selectedFood.score >= .9 ? (ne ? "उच्च गुणस्तर" : "High quality") : selectedFood.score >= .6 ? (ne ? "मध्यम स्कोर" : "Moderate score") : (ne ? "कम स्कोर" : "Lower score")}</b>
            <p>{ne ? selectedFood.noteNe : selectedFood.noteEn}</p>
          </article>
          <div className="pdcaas-browser">
            <label htmlFor="food-search">{ne ? "खानाको नाम लेख्नुहोस्" : "Type a food name"}</label>
            <input id="food-search" value={foodSearch} onChange={(event) => changeFoodSearch(event.target.value)} placeholder={ne ? "जस्तै: अण्डा, दूध, दाल…" : "Try egg, milk, lentils…"} />
            <div className="pdcaas-list">
              {matchingFoods.map((food) => <button type="button" className={selectedFood.nameEn === food.nameEn ? "active" : ""} onClick={() => setSelectedFood(food)} key={food.nameEn}><span><b>{ne ? food.nameNe : food.nameEn}</b><small>{food.group}</small></span><i style={{ "--bar": `${food.score * 100}%` } as CSSProperties}></i><strong>{food.score.toFixed(2)}</strong></button>)}
              {!matchingFoods.length && <p>{ne ? "यो नाम भेटिएन। अर्को खाना खोज्नुहोस्।" : "No matching food. Try another name."}</p>}
            </div>
          </div>
        </div>
        <div className="pdcaas-note"><strong>{ne ? "स्कोरको सीमा" : "Important limitation"}</strong><p>{ne ? "यी सामान्य प्रकाशित मान हुन्; प्रशोधन, उत्पादन र परीक्षण विधिअनुसार फरक हुन सक्छन्। PDCAAS १.०० मा सीमित हुन्छ र FAO ले नयाँ मूल्याङ्कनका लागि DIAAS सिफारिस गरेको छ।" : "These are typical published values and can vary by processing, product and method. PDCAAS is capped at 1.00, and FAO recommends DIAAS for newer protein-quality evaluation."}</p><div><a href="https://www.fao.org/ag/humannutrition/35978-02317b979a686a57aa4593304ffc17f06.pdf" target="_blank" rel="noreferrer">FAO protein-quality report ↗</a><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11011482/" target="_blank" rel="noreferrer">Published PDCAAS table ↗</a></div></div>
      </section>

      <section className="recipe-section section-pad" id="recipes">
        <div className="recipe-head"><div><p className="section-kicker">{ne ? "३० घरका रेसिपी" : "30 home recipes"}</p><h2>{ne ? "आफ्नो ब्याच\nछान्नुहोस्।" : "CHOOSE YOUR\nBATCH SIZE."}</h2></div><div className="tier-tabs" role="tablist" aria-label="Protein recipe tiers">{tiers.map((item) => <button role="tab" aria-selected={tier === item} className={tier === item ? "active" : ""} onClick={() => setTier(item)} key={item}>{item}<span>{item === "60–70 g" ? (ne ? "१ ठूलो खाना" : "large meal") : item === "100–120 g" ? (ne ? "२ भाग" : "2 servings") : (ne ? "३–४ भाग" : "3–4 servings")}</span></button>)}</div></div>
        <div className="meal-grid">
          {meals.map((item, index) => <article className="meal-card" key={item.nameEn}><div className="meal-card-top"><span>0{index + 1}</span><strong>{item.protein}</strong></div><h3>{ne ? item.nameNe : item.nameEn}</h3><p className="yield">{ne ? item.yieldNe : item.yieldEn}</p><div><small>{ne ? "सामग्री" : "Ingredients"}</small><p>{ne ? item.ingredientsNe : item.ingredientsEn}</p></div><div><small>{ne ? "विधि" : "Method"}</small><p>{ne ? item.methodNe : item.methodEn}</p></div></article>)}
        </div>
      </section>

      <section className="supplement-section section-pad" id="supplements">
        <div className="guide-section-head"><p className="section-kicker">{ne ? "सप्लिमेन्ट शिक्षा" : "Supplement education"}</p><h2>{ne ? "खानाको कमी\nपूरा गर्ने मात्र।" : "FILL A GAP.\nDON’T REPLACE FOOD."}</h2></div>
        <div className="supplement-grid">
          <article><b>01</b><h3>{ne ? "व्हे कन्सन्ट्रेट" : "Whey concentrate"}</h3><p>{ne ? "दूधबाट बनेको पूर्ण प्रोटिन। सामान्यतया आइसोलेटभन्दा बढी ल्याक्टोज हुन सक्छ; एलर्जी र पाचन सहनशीलता जाँच्नुहोस्।" : "A complete milk protein. It can contain more lactose than isolate; check dairy allergy and digestive tolerance."}</p><span>{ne ? "सुविधा: खाना पुग्न नसकेमा" : "Use: convenience when food falls short"}</span></article>
          <article><b>02</b><h3>{ne ? "व्हे आइसोलेट" : "Whey isolate"}</h3><p>{ne ? "फिल्टर गरिएको दूध प्रोटिन, प्रायः कम ल्याक्टोज। तर दूधको एलर्जी भएका व्यक्तिका लागि सुरक्षित मान्न मिल्दैन।" : "A more filtered milk protein, often lower in lactose. It is not automatically safe for a milk-protein allergy."}</p><span>{ne ? "लेबलमा प्रति सर्भिङ प्रोटिन जाँच्नुहोस्" : "Check label protein per serving"}</span></article>
          <article><b>03</b><h3>{ne ? "केसिन" : "Casein"}</h3><p>{ne ? "बिस्तारै पच्ने दूध प्रोटिन। समयभन्दा दिनको कुल प्रोटिन र खानाको गुणस्तर बढी महत्त्वपूर्ण हुन्छ।" : "A slower-digesting milk protein. Daily total and diet quality matter more than perfect timing."}</p><span>{ne ? "दूध एलर्जीमा नलिनुहोस्" : "Avoid with milk-protein allergy"}</span></article>
          <article><b>04</b><h3>{ne ? "सोया प्रोटिन" : "Soy protein"}</h3><p>{ne ? "उच्च गुणस्तरको वनस्पति विकल्प। सोया एलर्जी र उत्पादनको सामग्री सूची जाँच्नुहोस्।" : "A high-quality plant option. Check for soy allergy and review the full ingredient list."}</p><span>{ne ? "शाकाहारी विकल्प" : "Plant-based option"}</span></article>
          <article><b>05</b><h3>{ne ? "मटर + चामल मिश्रण" : "Pea + rice blend"}</h3><p>{ne ? "पूरक एमिनो एसिड प्रोफाइलका लागि मिश्रित वनस्पति प्रोटिन। प्रति सर्भिङ मात्रा र थपिएको चिनी जाँच्नुहोस्।" : "A blended plant protein with complementary amino-acid profiles. Check serving protein and added sugar."}</p><span>{ne ? "भेगन विकल्प" : "Vegan option"}</span></article>
          <article><b>06</b><h3>{ne ? "क्रिएटिन मोनोहाइड्रेट" : "Creatine monohydrate"}</h3><p>{ne ? "यो प्रोटिन होइन। छोटो, तीव्र र दोहोरिने प्रयासमा उपयोगी हुन सक्ने प्रमाण छ। रोग, औषधि, गर्भावस्था वा किशोर अवस्थामा स्वास्थ्यकर्मीको सल्लाह लिनुहोस्।" : "This is not protein. Evidence supports some benefit for repeated short, intense efforts. Seek clinical advice with medical conditions, medicines, pregnancy or for teenagers."}</p><span>{ne ? "प्रोटिन पाउडरको विकल्प होइन" : "Not a replacement for protein"}</span></article>
        </div>
        <div className="buyer-checklist"><h3>{ne ? "किन्नुअघि ५ जाँच" : "5 checks before buying"}</h3><ol><li>{ne ? "पूरा सामग्री र एलर्जेन" : "Full ingredients and allergens"}</li><li>{ne ? "प्रति सर्भिङ वास्तविक प्रोटिन" : "Actual protein per serving"}</li><li>{ne ? "स्वतन्त्र तेस्रो-पक्ष परीक्षण" : "Independent third-party testing"}</li><li>{ne ? "अत्यधिक स्टिमुलन्ट वा दाबी छैन" : "No extreme stimulants or miracle claims"}</li><li>{ne ? "आधिकारिक विक्रेता र म्याद" : "Official seller and expiry date"}</li></ol></div>
        <div className="evidence-links"><a href="https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-Consumer/" target="_blank" rel="noreferrer">NIH performance supplement evidence ↗</a><a href="https://acsm.org/ten-sports-nutrition-facts/" target="_blank" rel="noreferrer">ACSM sports nutrition guidance ↗</a></div>
      </section>

      <section className="medical-disclaimer"><strong>{ne ? "शैक्षिक जानकारी मात्र" : "Educational information only"}</strong><p>{ne ? "यो व्यक्तिगत डाइट, रोग उपचार वा चिकित्सकीय सल्लाह होइन। मिर्गौला/कलेजो रोग, गर्भावस्था, खानासम्बन्धी विकार, एलर्जी वा औषधि प्रयोगमा योग्य चिकित्सक वा दर्ता भएको पोषण विशेषज्ञसँग योजना बनाउनुहोस्।" : "This is not an individualized diet, disease treatment or medical advice. With kidney/liver disease, pregnancy, eating disorders, allergies or medicines, plan with a qualified clinician or registered dietitian."}</p></section>
    </main>
  );
}
