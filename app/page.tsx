"use client";

import { FormEvent, useState } from "react";

const programs = [
  { number: "01", title: "Strength / Hypertrophy", text: "Progressive programming built around the big lifts, smart volume and complete recovery." },
  { number: "02", title: "Fat Loss Engine", text: "A sustainable blend of resistance training, conditioning and realistic nutrition." },
  { number: "03", title: "Foundation 12", text: "A 12-week beginner path for technique, mobility and long-term confidence." },
];

const disciplines = ["Chest", "Back", "Shoulders", "Arms", "Legs", "Core", "Cardio", "Mobility"];

const schedule = [
  { day: "MON", name: "Strength Lab", time: "6:00 AM", level: "Intermediate" },
  { day: "TUE", name: "Functional HIIT", time: "5:30 PM", level: "All levels" },
  { day: "WED", name: "Mobility Flow", time: "7:00 AM", level: "Beginner" },
  { day: "THU", name: "Lower Body", time: "5:30 PM", level: "Intermediate" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [bmi, setBmi] = useState<number | null>(null);

  function calculateBmi(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const height = Number(data.get("height"));
    const weight = Number(data.get("weight"));
    if (!height || !weight) return;
    const value = unit === "metric" ? weight / ((height / 100) ** 2) : (weight * 703) / (height ** 2);
    setBmi(Math.round(value * 10) / 10);
  }

  const bmiLabel = bmi === null ? "Your result" : bmi < 18.5 ? "Below reference range" : bmi < 25 ? "Within reference range" : bmi < 30 ? "Above reference range" : "High screening result";

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Himal Gym home">
          <span className="brand-mark">H</span>
          <span>HIMAL <b>GYM</b></span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
          <a href="#training" onClick={() => setMenuOpen(false)}>Training</a>
          <a href="#nutrition" onClick={() => setMenuOpen(false)}>Nutrition</a>
          <a href="#schedule" onClick={() => setMenuOpen(false)}>Schedule</a>
          <a href="#membership" onClick={() => setMenuOpen(false)}>Membership</a>
        </nav>
        <a className="header-cta" href="#contact">Start now <span>↗</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span></span><span></span>
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow"></div>
        <div className="hero-copy">
          <p className="eyebrow"><span></span> Built in Nepal · Made for everyone</p>
          <h1>FORGE THE<br /><em>STRONGER</em><br />YOU.</h1>
          <p className="hero-text">Smart training. Evidence-aware nutrition. A focused community built to help you move, feel and live stronger.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#programs">Start training <span>→</span></a>
            <a className="text-btn" href="#calculator"><i>▶</i> Explore your plan</a>
          </div>
        </div>
        <div className="hero-portrait" role="img" aria-label="Himal, strength coach, holding dumbbells"></div>
        <div className="hero-stat stat-one"><strong>12<span>WK</span></strong><small>Foundation program</small></div>
        <div className="hero-stat stat-two"><strong>360°</strong><small>Training + nutrition</small></div>
        <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="manifesto section-pad">
        <p className="section-kicker">Our mentality</p>
        <h2>DISCIPLINE IS BUILT<br />ONE REP AT A TIME.</h2>
        <div className="manifesto-grid">
          <p className="lead">No shortcuts. No noise. Just the right plan, clear coaching, and the courage to show up again.</p>
          <p>Himal Gym brings structured exercise, practical nutrition guidance and useful fitness tools into one premium experience—without miracle claims or guesswork.</p>
          <div className="signature">Himal<br /><span>Head Coach</span></div>
        </div>
      </section>

      <section className="programs section-pad" id="programs">
        <div className="section-head">
          <div><p className="section-kicker">Choose your path</p><h2>BUILT FOR YOUR<br /><em>NEXT LEVEL.</em></h2></div>
          <p>From your first confident squat to advanced strength work, your program evolves with you.</p>
        </div>
        <div className="program-grid">
          {programs.map((program, index) => (
            <article className={`program-card card-${index + 1}`} key={program.number}>
              <span>{program.number}</span>
              <div><p>Program</p><h3>{program.title}</h3><p>{program.text}</p><a href="#contact">View program →</a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="training section-pad" id="training">
        <div className="training-image"><span>TRAIN<br />WITH<br />PURPOSE.</span></div>
        <div className="training-content">
          <p className="section-kicker">Exercise library</p>
          <h2>MASTER THE<br /><em>MOVEMENT.</em></h2>
          <p>Clear technique cues, target muscles, breathing, common mistakes and smart variations—organized so every athlete can train with intent.</p>
          <div className="discipline-grid">
            {disciplines.map((item, index) => <a href="#contact" key={item}><span>0{index + 1}</span>{item}<b>↗</b></a>)}
          </div>
        </div>
      </section>

      <section className="nutrition section-pad" id="nutrition">
        <div className="nutrition-copy">
          <p className="section-kicker">Fuel the work</p>
          <h2>TRAIN HARD.<br /><em>FUEL SMART.</em></h2>
          <p>Understand calories, protein, carbohydrates, fat, water and recovery with guidance that respects your goal and your health.</p>
          <ul>
            <li><b>01</b><span><strong>Practical nutrition</strong>Flexible ideas for muscle gain, fat loss and everyday performance.</span></li>
            <li><b>02</b><span><strong>Verified information</strong>Product and nutrient data is clearly sourced and admin-reviewed.</span></li>
            <li><b>03</b><span><strong>Safety first</strong>Educational estimates, transparent limits, no guaranteed outcomes.</span></li>
          </ul>
        </div>
        <div className="nutrition-image"></div>
      </section>

      <section className="calculator section-pad" id="calculator">
        <div className="calculator-intro">
          <p className="section-kicker">Know your baseline</p>
          <h2>YOUR NUMBERS.<br /><em>YOUR START.</em></h2>
          <p>BMI is a simple screening tool—not a diagnosis and not a direct measure of body composition.</p>
          <div className="calculator-pills"><span>BMI</span><span>Calories</span><span>Protein</span><span>Macros</span><span>Water</span></div>
        </div>
        <form className="bmi-card" onSubmit={calculateBmi}>
          <div className="bmi-top"><div><small>QUICK TOOL</small><h3>BMI calculator</h3></div><div className="unit-toggle"><button type="button" className={unit === "metric" ? "active" : ""} onClick={() => setUnit("metric")}>Metric</button><button type="button" className={unit === "imperial" ? "active" : ""} onClick={() => setUnit("imperial")}>Imperial</button></div></div>
          <div className="fields"><label>Height <span>{unit === "metric" ? "cm" : "in"}</span><input name="height" type="number" min="1" step="0.1" placeholder={unit === "metric" ? "175" : "69"} required /></label><label>Weight <span>{unit === "metric" ? "kg" : "lb"}</span><input name="weight" type="number" min="1" step="0.1" placeholder={unit === "metric" ? "70" : "154"} required /></label></div>
          <button className="calculate-btn" type="submit">Calculate my BMI <span>→</span></button>
          <div className="bmi-result" aria-live="polite"><small>{bmiLabel}</small><strong>{bmi ?? "—"}</strong><div className="bmi-scale"><i></i><i></i><i></i><i></i></div></div>
          <p className="fine-print">Educational estimate only. Talk with a qualified professional for individualized health guidance.</p>
        </form>
      </section>

      <section className="schedule section-pad" id="schedule">
        <div className="section-head"><div><p className="section-kicker">This week</p><h2>SHOW UP.<br /><em>GET BETTER.</em></h2></div><p>Small group energy, focused coaching and a place for every fitness level.</p></div>
        <div className="schedule-list">
          {schedule.map((item) => <div className="schedule-row" key={item.day}><b>{item.day}</b><h3>{item.name}</h3><span>{item.time}</span><small>{item.level}</small><a href="#contact" aria-label={`Book ${item.name}`}>↗</a></div>)}
        </div>
      </section>

      <section className="membership section-pad" id="membership">
        <div className="membership-panel">
          <p className="section-kicker">Membership</p>
          <h2>ONE DECISION<br /><em>CHANGES EVERYTHING.</em></h2>
          <p>Start with the essentials or unlock complete programs, progress tools and personal guidance.</p>
          <a className="primary-btn dark-btn" href="#contact">View memberships <span>→</span></a>
        </div>
        <div className="membership-visual"><div><strong>4</strong><span>WAYS TO<br />TRAIN</span></div><p>Free · Basic · Premium · Elite</p></div>
      </section>

      <section className="contact section-pad" id="contact">
        <p className="section-kicker">Ready when you are</p>
        <h2>YOUR STRONGER LIFE<br /><em>STARTS TODAY.</em></h2>
        <div className="contact-actions"><a className="primary-btn" href="https://wa.me/9779802935252?text=Hello%2C%20I%20would%20like%20information%20about%20your%20gym%2Fnutrition%20services." target="_blank" rel="noreferrer">Chat on WhatsApp <span>↗</span></a><a className="text-btn" href="mailto:banjadehimal1@gmail.com">banjadehimal1@gmail.com</a></div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">H</span><span>HIMAL <b>GYM</b></span></a>
        <p>Train smart. Eat smart. Live strong.</p>
        <div><a href="#training">Training</a><a href="#nutrition">Nutrition</a><a href="#membership">Membership</a></div>
        <small>© 2026 Himal Gym. Educational fitness information only.</small>
      </footer>

      <a className="whatsapp-float" href="https://wa.me/9779802935252?text=Hello%2C%20I%20would%20like%20information%20about%20your%20gym%2Fnutrition%20services." aria-label="Contact Himal Gym on WhatsApp" target="_blank" rel="noreferrer">WA</a>
    </main>
  );
}
