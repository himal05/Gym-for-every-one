"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ClassExercise } from "../../data/classes";

function ExerciseModal({ exercise, onClose }: { exercise: ClassExercise; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    closeRef.current?.focus();
    const handler = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handler); };
  }, [onClose]);
  return <div className="exercise-modal-backdrop" role="presentation" onMouseDown={(e) => e.currentTarget === e.target && onClose()}><section className="exercise-modal" role="dialog" aria-modal="true" aria-labelledby="exercise-modal-title"><button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close exercise details">×</button><div className="modal-image"><Image src={exercise.image} alt={`${exercise.name} exercise demonstration`} fill sizes="(max-width: 800px) 100vw, 45vw" /></div><div className="modal-copy"><p className="section-kicker">{exercise.category} exercise</p><h2 id="exercise-modal-title">{exercise.name}</h2><div className="modal-tags">{exercise.targetMuscles.map((muscle) => <span key={muscle}>{muscle}</span>)}</div><div className="modal-facts"><span><small>Equipment</small>{exercise.equipment}</span><span><small>Difficulty</small>{exercise.difficulty}</span><span><small>Sets × reps</small>{exercise.sets} × {exercise.reps}</span><span><small>Rest</small>{exercise.rest}</span></div><div className="modal-detail-grid"><article><h3>How to perform</h3><p>{exercise.instructions}</p></article><article><h3>Breathing</h3><p>{exercise.breathing}</p></article><article><h3>Safety</h3><p>{exercise.safetyTips}</p></article><article><h3>Common mistakes</h3><p>{exercise.commonMistakes}</p></article><article><h3>Beginner variation</h3><p>{exercise.beginnerVariation}</p></article><article><h3>Advanced variation</h3><p>{exercise.advancedVariation}</p></article></div></div></section></div>;
}

export default function ExerciseExplorer({ exercises }: { exercises: ClassExercise[] }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<ClassExercise | null>(null);
  const filters = useMemo(() => ["All", ...Array.from(new Set(exercises.flatMap((item) => [item.category, ...item.targetMuscles])))], [exercises]);
  const visible = useMemo(() => exercises.filter((item) => {
    const haystack = `${item.name} ${item.category} ${item.targetMuscles.join(" ")} ${item.secondaryMuscles.join(" ")}`.toLowerCase();
    return (filter === "All" || item.category === filter || item.targetMuscles.includes(filter)) && haystack.includes(search.toLowerCase().trim());
  }), [exercises, filter, search]);
  return <section className="exercise-explorer section-pad" id="exercises"><div className="section-head"><div><p className="section-kicker">Movement library</p><h2>KNOW EVERY<br /><em>EXERCISE.</em></h2></div><p>Select a movement for complete technique, breathing, variation and safety guidance.</p></div><div className="exercise-tools"><label><span>Search exercises</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search exercises..." /></label><div className="muscle-filters" aria-label="Filter exercises">{filters.map((item) => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div></div><p className="result-count" aria-live="polite">{visible.length} exercise{visible.length === 1 ? "" : "s"}</p><div className="class-exercise-grid">{visible.map((exercise) => <button className="class-exercise-card" onClick={() => setSelected(exercise)} key={exercise.id}><div><Image src={exercise.image} alt={`${exercise.name} exercise`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /></div><span>{exercise.category}</span><h3>{exercise.name}</h3><p>{exercise.targetMuscles.join(" · ")}</p><dl><div><dt>Sets</dt><dd>{exercise.sets}</dd></div><div><dt>Reps</dt><dd>{exercise.reps}</dd></div><div><dt>Level</dt><dd>{exercise.difficulty}</dd></div></dl><strong>View full technique →</strong></button>)}</div>{visible.length === 0 && <div className="empty-exercises"><strong>No exercises found.</strong><p>Try another muscle or search term.</p></div>}{selected && <ExerciseModal exercise={selected} onClose={() => setSelected(null)} />}</section>;
}
