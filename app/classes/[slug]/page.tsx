import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BookingCTA from "../../components/classes/BookingCTA";
import ClassBenefits from "../../components/classes/ClassBenefits";
import ClassHero from "../../components/classes/ClassHero";
import ClassSchedule from "../../components/classes/ClassSchedule";
import ExerciseExplorer from "../../components/classes/ExerciseExplorer";
import { classPrograms, getClassProgram } from "../../data/classes";

export function generateStaticParams() { return classPrograms.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = getClassProgram(slug);
  if (!program) return {};
  const title = `${program.name} | Himal Gym Nepal`;
  const description = program.cardDescription;
  return { title, description, openGraph: { title, description, images: [{ url: program.image, alt: `${program.name} at Himal Gym` }] } };
}

export default async function ClassPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getClassProgram(slug);
  if (!program) notFound();
  return <main className="class-page"><ClassHero program={program} /><section className="class-info-strip" aria-label="Class summary"><article><small>Duration</small><strong>{program.duration}</strong></article><article><small>Difficulty</small><strong>{program.difficulty}</strong></article><article><small>Goal</small><strong>{program.goal}</strong></article><article><small>Equipment</small><strong>{program.equipment}</strong></article><article><small>Calories*</small><strong>{program.calories}</strong></article><article><small>Guidance</small><strong>{program.guidance}</strong></article><article><small>Frequency</small><strong>{program.frequency}</strong></article></section><ClassBenefits program={program} /><ExerciseExplorer exercises={program.exercises} /><ClassSchedule classSlug={program.slug} /><BookingCTA classSlug={program.slug} className={program.shortName} /><aside className="class-disclaimer">*Calorie expenditure is a broad estimate and varies with body size, effort, fitness and session design. Fitness information is educational and is not medical advice.</aside></main>;
}
