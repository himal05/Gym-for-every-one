import type { ClassProgram } from "../../data/classes";

export default function ClassBenefits({ program }: { program: ClassProgram }) {
  return (
    <section className="class-story section-pad" id="about-class">
      <div className="class-story-intro">
        <p className="section-kicker">What is {program.shortName}?</p>
        <h2>TRAIN WITH<br /><em>INTENT.</em></h2>
        <p>{program.description}</p>
      </div>
      {program.distinctions && <div className="distinction-grid">{program.distinctions.map((item) => <article key={item.title}><span>{item.title}</span><p>{item.text}</p></article>)}</div>}
      <div className="class-list-grid">
        <article><small>Who it is for</small><ul>{program.whoFor.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article><small>Key benefits</small><ul>{program.benefits.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article><small>Training focus</small><div className="muscle-cloud">{program.focusAreas.map((item) => <span key={item}>{item}</span>)}</div></article>
      </div>
      {program.workoutStructure && <div className="workout-structure"><div><p className="section-kicker">Session format</p><h3>WORK. REST.<br />REPEAT.</h3></div><ol>{program.workoutStructure.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></div>}
    </section>
  );
}
