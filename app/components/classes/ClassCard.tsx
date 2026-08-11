import Image from "next/image";
import Link from "next/link";
import type { ClassProgram } from "../../data/classes";

export default function ClassCard({ program, index }: { program: ClassProgram; index: number }) {
  return (
    <Link className="class-card" href={`/classes/${program.slug}`} aria-label={`Explore ${program.shortName}`}>
      <Image src={program.image} alt={`${program.shortName} training class`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
      <div className="class-card-shade" />
      <div className="class-card-top"><span>0{index + 1}</span><b>{program.category}</b></div>
      <div className="class-card-copy">
        <h3>{program.shortName}</h3>
        <p>{program.cardDescription}</p>
        <div className="class-card-meta"><span>{program.duration}</span><span>{program.difficulty}</span></div>
        <strong>Explore {program.shortName} <i>→</i></strong>
      </div>
    </Link>
  );
}
