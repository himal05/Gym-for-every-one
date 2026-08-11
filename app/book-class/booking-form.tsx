"use client";

import { FormEvent, useState } from "react";
import { classPrograms } from "../data/classes";

export default function BookingForm({ initialClass }: { initialClass: string }) {
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); event.currentTarget.reset(); }
  return <form className="booking-form" onSubmit={submit}><div className="booking-form-grid"><label>Full name<input name="fullName" required autoComplete="name" /></label><label>Email<input name="email" type="email" required autoComplete="email" /></label><label>Phone number<input name="phone" type="tel" required autoComplete="tel" /></label><label>Class<select name="classSlug" defaultValue={initialClass} required><option value="">Choose a class</option>{classPrograms.map((item) => <option value={item.slug} key={item.slug}>{item.shortName}</option>)}</select></label><label>Preferred date<input name="preferredDate" type="date" required /></label><label>Preferred time<input name="preferredTime" type="time" required /></label><label>Fitness level<select name="fitnessLevel" required><option value="">Choose your level</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label><label>Primary goal<input name="goals" placeholder="Strength, mobility, conditioning..." required /></label><label className="wide">Optional message<textarea name="message" rows={5} placeholder="Tell the coach about your experience, needs, or schedule." /></label></div><button className="primary-btn" type="submit">Book my class <span>→</span></button>{submitted && <div className="booking-success" role="status"><strong>Request prepared.</strong><p>Thank you. This demo form is ready for a future Supabase connection; no personal data was sent or stored yet.</p></div>}</form>;
}
