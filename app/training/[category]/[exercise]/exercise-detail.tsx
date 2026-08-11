"use client";

import { useState } from "react";
import { exerciseEquipment, type Exercise, type TrainingCategory } from "../../../data/training";

export function ExerciseDetail({ category, exercise }: { category: TrainingCategory; exercise: Exercise }) {
  const [lang, setLang] = useState<"en" | "ne">("en");
  const [saved, setSaved] = useState(false);
  const ne = lang === "ne";
  const equipment = exerciseEquipment(exercise.nameEn);
  const isCardio = category.slug === "cardio";
  const isMobility = category.slug === "mobility";

  function saveExercise() {
    const key = "himal-gym-workout";
    const current = JSON.parse(localStorage.getItem(key) || "[]") as string[];
    if (!current.includes(exercise.nameEn)) localStorage.setItem(key, JSON.stringify([...current, exercise.nameEn]));
    setSaved(true);
  }

  const steps = ne ? [
    `सेटअप: ${equipment[1]} तयार गरी शरीर स्थिर राख्नुहोस्। सुरुमा हल्का प्रतिरोध प्रयोग गर्नुहोस्।`,
    `चाल: ${exercise.cueNe}`,
    isCardio ? "सहज गतिबाट सुरु गरी क्रमशः समय वा तीव्रता बढाउनुहोस्।" : isMobility ? "दुखाइ नहुने रेन्जमा बिस्तारै चल्नुहोस् र झट्का नदिनुहोस्।" : "तौललाई नियन्त्रणमा सुरुको स्थितिमा फर्काउनुहोस्; अर्को रेपअघि शरीर स्थिर गर्नुहोस्।",
  ] : [
    `Set up: Prepare the ${equipment[0].toLowerCase()} and stabilize your body. Begin with light resistance.`,
    `Move: ${exercise.cueEn}`,
    isCardio ? "Start at an easy pace, then increase duration or intensity gradually." : isMobility ? "Move slowly through a pain-free range without bouncing or forcing depth." : "Return the load under control; reset your position before the next repetition.",
  ];

  return <main className="exercise-page">
    <header className="sub-header"><a className="brand" href="/"><span className="brand-mark">H</span><span>HIMAL <b>GYM</b></span></a><nav><a href={`/training/${category.slug}`}>{ne ? `${category.titleNe} सूची` : `${category.titleEn} guide`}</a><a href="/locations">{ne ? "नजिकको जिम" : "Find a gym"}</a></nav><div className="lang-toggle"><button className={!ne ? "active" : ""} onClick={() => setLang("en")}>EN</button><button className={ne ? "active" : ""} onClick={() => setLang("ne")}>नेपाली</button></div></header>
    <section className="exercise-hero"><div><p className="section-kicker">{ne ? category.titleNe : category.titleEn} · {ne ? "व्यायाम निर्देशन" : "Exercise instructions"}</p><h1>{ne ? exercise.nameNe : exercise.nameEn}</h1><p>{ne ? exercise.cueNe : exercise.cueEn}</p><button className="primary-btn" onClick={saveExercise}>{saved ? (ne ? "वर्कआउटमा सेभ भयो ✓" : "Saved to workout ✓") : (ne ? "मेरो वर्कआउटमा थप्नुहोस्" : "Add to my workout")}<span>+</span></button></div><img src={category.image} alt={category.imageAlt} /></section>
    <section className="exercise-facts"><article><small>{ne ? "मुख्य लक्ष्य" : "Main target"}</small><strong>{ne ? exercise.targetNe : exercise.targetEn}</strong></article><article><small>{ne ? "उपकरण" : "Equipment"}</small><strong>{ne ? equipment[1] : equipment[0]}</strong></article><article><small>{ne ? "सेट / समय" : "Sets / time"}</small><strong>{exercise.prescription}</strong></article><article><small>{ne ? "कठिनाइ" : "Difficulty"}</small><strong>{ne ? "सुरुआती–मध्यम" : "Beginner–intermediate"}</strong></article></section>
    <section className="instruction-section section-pad"><div className="guide-section-head"><p className="section-kicker">{ne ? "कसरी गर्ने" : "How to perform"}</p><h2>{ne ? "सेटअप। चाल।\nनियन्त्रण।" : "SET UP. MOVE.\nCONTROL."}</h2></div><div className="step-grid">{steps.map((step,index)=><article key={step}><span>0{index+1}</span><p>{step}</p></article>)}</div><div className="instruction-grid"><article><h3>{ne ? "सास" : "Breathing"}</h3><p>{ne ? (isCardio ? "गतिसँग लय मिलाएर सहज सास फेर्नुहोस्।" : "प्रयास गर्दा सास बाहिर, फर्कँदा सास भित्र; लामो समय सास नरोक्नुहोस्।") : (isCardio ? "Use relaxed, rhythmic breathing matched to the pace." : "Exhale through the effort and inhale on the return; avoid prolonged breath-holding.")}</p></article><article><h3>{ne ? "आराम" : "Rest"}</h3><p>{ne ? (isCardio || isMobility ? "आवश्यकताअनुसार छोटो आराम; गुणस्तर र सहज सास कायम गर्नुहोस्।" : "सेटबीच ६०–१२० सेकेन्ड; भारी सेटमा बढी आराम लिन सकिन्छ।") : (isCardio || isMobility ? "Rest briefly as needed while maintaining quality and comfortable breathing." : "Rest 60–120 seconds between sets; heavier work may need longer.")}</p></article><article><h3>{ne ? "सामान्य गल्ती" : "Common mistakes"}</h3><p>{ne ? "धेरै तौल, छिटो रेप, झट्का, शरीरको लाइन बिगार्नु र दुखाइलाई बेवास्ता गर्नु।" : "Too much load, rushed repetitions, momentum, losing alignment and ignoring pain."}</p></article><article><h3>{ne ? "सुरुआती विकल्प" : "Beginner option"}</h3><p>{ne ? "तौल वा रेन्ज घटाउनुहोस्, सहारा लिनुहोस् वा मेसिन/बडीवेट विकल्प रोज्नुहोस्।" : "Reduce load or range, add support, or choose a machine/body-weight variation."}</p></article><article><h3>{ne ? "उन्नत विकल्प" : "Advanced option"}</h3><p>{ne ? "पहिले सबै रेप सफा भएपछि मात्र बिस्तारै तौल, रेप, समय वा पज बढाउनुहोस्।" : "Only after every repetition is clean, gradually add load, repetitions, duration or a pause."}</p></article><article><h3>{ne ? "कहिले रोक्ने" : "When to stop"}</h3><p>{ne ? "तेज दुखाइ, चक्कर, छाती दुखाइ, असामान्य सास फेर्न गाह्रो वा नियन्त्रण गुमेमा तुरुन्त रोक्नुहोस्।" : "Stop immediately for sharp pain, dizziness, chest pain, unusual breathlessness or loss of control."}</p></article></div></section>
    <section className="exercise-next"><div><p className="section-kicker">{ne ? "अर्को कदम" : "Next step"}</p><h2>{ne ? "नजिकको प्रशिक्षण\nस्थान खोज्नुहोस्।" : "FIND A PLACE\nTO TRAIN."}</h2></div><a className="primary-btn" href="/locations">{ne ? "नेपाल गतिविधि खोजकर्ता" : "Nepal activity finder"}<span>→</span></a></section>
  </main>;
}
