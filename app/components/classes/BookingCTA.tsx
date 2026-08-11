import Link from "next/link";

export default function BookingCTA({ classSlug, className }: { classSlug: string; className: string }) {
  return <section className="booking-cta"><div><p className="section-kicker">Your place is waiting</p><h2>READY TO TRAIN?</h2><p>Choose a preferred date and time. Our team will confirm your {className} request.</p></div><Link className="primary-btn dark-btn" href={`/book-class?class=${classSlug}`}>Book this class <span>→</span></Link></section>;
}
