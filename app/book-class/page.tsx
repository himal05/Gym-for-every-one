import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "./booking-form";

export const metadata: Metadata = { title: "Book a Small Group Class | Himal Gym Nepal", description: "Request your preferred Himal Gym small group training class, date and time." };

export default async function BookClassPage({ searchParams }: { searchParams: Promise<{ class?: string }> }) {
  const query = await searchParams;
  return <main className="booking-page"><header className="booking-header"><Link className="brand" href="/"><span className="brand-mark">H</span><span>HIMAL <b>GYM</b></span></Link><Link href="/#classes">← Back to classes</Link></header><section className="booking-hero"><div><p className="section-kicker">Small group training</p><h1>BOOK YOUR<br /><em>CLASS.</em></h1><p>Choose the session that fits your goal. This form is prepared for a future secure Supabase booking workflow.</p></div><aside><strong>WHAT HAPPENS NEXT?</strong><ol><li>Send your preferred class and time.</li><li>The gym team checks availability.</li><li>You receive a confirmation before training.</li></ol></aside></section><section className="booking-form-wrap"><div><p className="section-kicker">Your details</p><h2>RESERVE A<br /><em>PLACE.</em></h2></div><BookingForm initialClass={query.class ?? ""} /></section></main>;
}
