import { notFound } from "next/navigation";
import { categories, exerciseSlug, getExercise } from "../../../data/training";
import { ExerciseDetail } from "./exercise-detail";

export function generateStaticParams() {
  return categories.flatMap((category) => category.exercises.map((exercise) => ({ category: category.slug, exercise: exerciseSlug(exercise.nameEn) })));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; exercise: string }> }) {
  const value = await params;
  const found = getExercise(value.category, value.exercise);
  return found ? { title: `${found.exercise.nameEn} Instructions | Himal Gym`, description: `English and Nepali ${found.exercise.nameEn} setup, movement, breathing, sets, mistakes and safety guide.` } : {};
}

export default async function ExercisePage({ params }: { params: Promise<{ category: string; exercise: string }> }) {
  const value = await params;
  const found = getExercise(value.category, value.exercise);
  if (!found) notFound();
  return <ExerciseDetail category={found.category} exercise={found.exercise} />;
}
