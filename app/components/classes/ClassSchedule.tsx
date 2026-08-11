import Link from "next/link";
import { classSchedule } from "../../data/classes";

export default function ClassSchedule({ classSlug }: { classSlug?: string }) {
  const rows = classSlug ? classSchedule.filter((item) => item.classSlug === classSlug) : classSchedule;
  return (
    <section className="class-schedule section-pad" id="class-schedule">
      <div className="section-head"><div><p className="section-kicker">Weekly timetable</p><h2>CHOOSE YOUR<br /><em>SESSION.</em></h2></div><p>Sample times and availability. The schedule is structured so the gym team can update it easily.</p></div>
      <div className="class-schedule-table" role="table" aria-label="Small group training schedule">
        <div className="schedule-heading" role="row"><span>Day / time</span><span>Class</span><span>Coach</span><span>Duration</span><span>Spaces</span><span>Book</span></div>
        {rows.map((item) => <div className="class-schedule-row" role="row" key={`${item.day}-${item.classSlug}`}><span><b>{item.day}</b><small>{item.time}</small></span><strong>{item.className}</strong><span>{item.coach}</span><span>{item.duration}</span><span><i>{item.spaces}</i> available</span><Link href={`/book-class?class=${item.classSlug}`} aria-label={`Book ${item.className} on ${item.day}`}>→</Link></div>)}
      </div>
    </section>
  );
}
