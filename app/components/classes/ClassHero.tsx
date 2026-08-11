import Image from "next/image";
import Link from "next/link";
import type { ClassProgram } from "../../data/classes";

export default function ClassHero({ program }: { program: ClassProgram }) {
  return (
    <section className="class-hero">
      <div className="class-hero-copy">
        <Link className="back-link" href="/#classes">← All classes</Link>
        <p className="section-kicker">Small group training · {program.category}</p>
        <h1>{program.name}</h1>
        <p>{program.subtitle}</p>
        <Link className="primary-btn" href={`/book-class?class=${program.slug}`}>Book this class <span>→</span></Link>
      </div>
      <div className="class-hero-image"><Image src={program.image} alt={`${program.name} class at Himal Gym`} fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div>
    </section>
  );
}
