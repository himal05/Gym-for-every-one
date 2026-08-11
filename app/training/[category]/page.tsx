import { notFound } from "next/navigation";
import { categories, getCategory } from "../../data/training";
import { TrainingGuide } from "./training-guide";

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  return category ? {
    title: `${category.titleEn} Exercises | Himal Gym`,
    description: `Bilingual English and Nepali ${category.titleEn.toLowerCase()} exercise guide with technique, sets and recovery nutrition.`,
  } : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  return <TrainingGuide category={category} />;
}
