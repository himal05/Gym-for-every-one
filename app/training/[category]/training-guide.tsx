"use client";

import { useState } from "react";
import { categories, type TrainingCategory } from "../../data/training";

export function TrainingGuide({ category }: { category: TrainingCategory }) {
  const [lang, setLang] = useState<"en" | "ne">("en");
  const ne = lang === "ne";

  return (
    <main className="guide-page">
      <header className="sub-header">
        <a className="brand" href="/"><span className="brand-mark">H</span><span>HIMAL <b>GYM</b></span></a>
        <nav><a href="/#training">{ne ? "सबै तालिम" : "All training"}</a><a href="/nutrition/protein-plans">{ne ? "प्रोटिन डाइट" : "Protein plans"}</a></nav>
        <div className="lang-toggle" aria-label="Language selector"><button className={!ne ? "active" : ""} onClick={() => setLang("en")}>EN</button><button className={ne ? "active" : ""} onClick={() => setLang("ne")}>नेपाली</button></div>
      </header>

      <section className="guide-hero">
        <div className="guide-hero-copy">
          <p className="section-kicker">{ne ? "मास्टर द मुभमेन्ट" : "Master the movement"}</p>
          <h1>{ne ? category.titleNe : category.titleEn}</h1>
          <p>{ne ? category.introNe : category.introEn}</p>
          <a className="primary-btn" href="#exercises">{ne ? "व्यायाम हेर्नुहोस्" : "See exercises"}<span>↓</span></a>
        </div>
        <img src={category.image} alt={category.imageAlt} />
      </section>

      <nav className="category-strip" aria-label="Exercise categories">
        {categories.map((item) => <a className={item.slug === category.slug ? "active" : ""} href={`/training/${item.slug}`} key={item.slug}>{ne ? item.titleNe : item.titleEn}</a>)}
      </nav>

      <section className="exercise-detail section-pad" id="exercises">
        <div className="guide-section-head"><p className="section-kicker">{ne ? "५ मुख्य व्यायाम" : "5 foundational exercises"}</p><h2>{ne ? "सही फर्म।\nस्मार्ट प्रगति।" : "QUALITY REPS.\nSMART PROGRESS."}</h2></div>
        <div className="exercise-table">
          {category.exercises.map((exercise, index) => (
            <article className="exercise-row" key={exercise.nameEn}>
              <span className="exercise-number">0{index + 1}</span>
              <div><small>{ne ? "व्यायाम" : "Exercise"}</small><h3>{ne ? exercise.nameNe : exercise.nameEn}</h3></div>
              <div><small>{ne ? "मुख्य मांसपेशी" : "Main target"}</small><p>{ne ? exercise.targetNe : exercise.targetEn}</p></div>
              <div><small>{ne ? "कोचिङ संकेत" : "Coaching cue"}</small><p>{ne ? exercise.cueNe : exercise.cueEn}</p></div>
              <strong>{exercise.prescription}</strong>
            </article>
          ))}
        </div>
        <div className="safety-note"><b>{ne ? "सुरक्षा:" : "Safety:"}</b> {ne ? "दुखाइ, चक्कर, छाती दुख्ने वा असामान्य सास फेर्न गाह्रो भए रोक्नुहोस्। नयाँ वा लगातार दुखाइका लागि योग्य स्वास्थ्यकर्मीको सल्लाह लिनुहोस्।" : "Stop for pain, dizziness, chest pain or unusual breathlessness. Seek qualified assessment for new or persistent symptoms."}</div>
      </section>

      <section className="recovery-guide section-pad">
        <div className="guide-section-head light"><p className="section-kicker">{ne ? "रिकभरी" : "Recovery essentials"}</p><h2>{ne ? "खाना पहिले।\nसप्लिमेन्ट पछि।" : "FOOD FIRST.\nSUPPLEMENTS SECOND."}</h2></div>
        <div className="recovery-grid">
          <article><span>01</span><h3>{ne ? "प्रोटिन" : "Protein"}</h3><p>{ne ? "दिनभरि विभिन्न खानामा प्रोटिन फैलाउनुहोस्। अधिकांश खेलाडीका लागि कुल दैनिक प्रोटिन शरीरको तौल र तालिमअनुसार निर्धारण हुन्छ।" : "Spread protein across the day. Total daily needs depend on body weight, training load and energy intake."}</p></article>
          <article><span>02</span><h3>{ne ? "कार्बोहाइड्रेट + पानी" : "Carbs + fluids"}</h3><p>{ne ? "कार्बोहाइड्रेटले ग्लाइकोजन पुनःभर्न मद्दत गर्छ; पानी र इलेक्ट्रोलाइट पसिना र मौसमअनुसार मिलाउनुहोस्।" : "Carbohydrate supports glycogen replacement; adjust fluids and electrolytes for sweat loss and climate."}</p></article>
          <article><span>03</span><h3>{ne ? "भिटामिन D" : "Vitamin D"}</h3><p>{ne ? "मांसपेशी र हड्डी स्वास्थ्यका लागि पर्याप्त स्तर महत्त्वपूर्ण छ, तर सप्लिमेन्टले कमी नभएको व्यक्तिमा रिकभरी ग्यारेन्टी गर्दैन। परीक्षण/सल्लाहपछि मात्र उच्च मात्रा लिनुहोस्।" : "Adequate status supports muscle and bone health, but supplements do not guarantee recovery when deficiency is absent. Avoid high doses without testing and advice."}</p></article>
          <article><span>04</span><h3>{ne ? "भिटामिन C र E" : "Vitamins C & E"}</h3><p>{ne ? "फलफूल, तरकारी, नट्स र बीउबाट लिनुहोस्। उच्च मात्रा एन्टिअक्सिडेन्ट सप्लिमेन्टले केही तालिम अनुकूलन घटाउन सक्छ।" : "Prefer fruit, vegetables, nuts and seeds. High-dose antioxidant supplements can blunt some beneficial training adaptations."}</p></article>
          <article><span>05</span><h3>{ne ? "ओमेगा-३ (भिटामिन होइन)" : "Omega-3 (not a vitamin)"}</h3><p>{ne ? "माछा, अखरोट र बीउ स्वस्थ खानाको हिस्सा हुन्। सूजन वा दुखाइको उपचारका लागि सप्लिमेन्ट आफैं नलिनुहोस्।" : "Fish, walnuts and seeds can support a healthy dietary pattern. Do not self-treat inflammation or pain with supplements."}</p></article>
          <article><span>06</span><h3>{ne ? "निद्रा + आराम" : "Sleep + rest"}</h3><p>{ne ? "नियमित निद्रा, आरामका दिन र बिस्तारै बढाइएको तालिम लोड कुनै पनि भिटामिनभन्दा आधारभूत छन्।" : "Consistent sleep, rest days and gradual training load are more foundational than any vitamin."}</p></article>
        </div>
        <div className="evidence-links"><a href="https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-Consumer/" target="_blank" rel="noreferrer">NIH exercise supplement guidance ↗</a><a href="https://ods.od.nih.gov/factsheets/Vitamind-HealthProfessional/" target="_blank" rel="noreferrer">NIH vitamin D evidence ↗</a></div>
      </section>

      <section className="guide-cta"><p className="section-kicker">{ne ? "अब इन्धन दिनुहोस्" : "Now fuel the work"}</p><h2>{ne ? "प्रोटिन डाइट\nप्लान हेर्नुहोस्।" : "EXPLORE PROTEIN-\nFOCUSED PLANS."}</h2><a className="primary-btn" href="/nutrition/protein-plans">{ne ? "३० रेसिपी खोल्नुहोस्" : "Open 30 recipes"}<span>→</span></a></section>
    </main>
  );
}
