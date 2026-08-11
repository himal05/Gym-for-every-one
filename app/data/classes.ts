export type ClassExercise = {
  id: string;
  slug: string;
  name: string;
  category: string;
  targetMuscles: string[];
  secondaryMuscles: string[];
  equipment: string;
  difficulty: string;
  sets: string;
  reps: string;
  rest: string;
  instructions: string;
  safetyTips: string;
  commonMistakes: string;
  beginnerVariation: string;
  advancedVariation: string;
  breathing: string;
  image: string;
};

export type ClassProgram = {
  slug: string;
  name: string;
  shortName: string;
  subtitle: string;
  cardDescription: string;
  description: string;
  image: string;
  duration: string;
  difficulty: string;
  category: string;
  goal: string;
  equipment: string;
  calories: string;
  guidance: string;
  frequency: string;
  whoFor: string[];
  benefits: string[];
  focusAreas: string[];
  distinctions?: { title: string; text: string }[];
  workoutStructure?: string[];
  exercises: ClassExercise[];
};

export type ClassScheduleEntry = {
  day: string;
  time: string;
  classSlug: string;
  className: string;
  coach: string;
  duration: string;
  spaces: number;
};

type ExerciseSeed = Partial<ClassExercise> & Pick<ClassExercise, "name" | "targetMuscles">;

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function makeExercises(category: string, image: string, seeds: ExerciseSeed[]): ClassExercise[] {
  return seeds.map((seed) => ({
    id: `${category}-${slugify(seed.name)}`,
    slug: slugify(seed.name),
    category,
    secondaryMuscles: [],
    equipment: "Bodyweight",
    difficulty: "All levels",
    sets: "3–4",
    reps: "8–12",
    rest: "60–90 sec",
    instructions: "Move through a comfortable range with a braced core and controlled tempo.",
    safetyTips: "Use a load and range you can control. Stop if you feel sharp pain.",
    commonMistakes: "Rushing the movement, losing alignment, or using more load than you can control.",
    beginnerVariation: "Reduce the load, range, or speed and practise the pattern first.",
    advancedVariation: "Add load, tempo, range, or a controlled pause while keeping good form.",
    breathing: "Inhale during the easier phase; exhale through the working phase while staying braced.",
    image,
    ...seed,
  }));
}

const strengthExercises = makeExercises("Strength", "/images/strength-training.jpg", [
  { name: "Barbell Squat", targetMuscles: ["Quads", "Glutes", "Hamstrings", "Core"], equipment: "Barbell + rack", difficulty: "Intermediate", instructions: "Brace your core, keep your chest tall and sit between your hips under control.", safetyTips: "Keep knees tracking with toes and maintain a neutral spine." },
  { name: "Bench Press", targetMuscles: ["Chest", "Triceps", "Shoulders"], equipment: "Barbell + bench", difficulty: "Intermediate", instructions: "Set your shoulder blades, lower the bar to mid-chest, then press smoothly.", safetyTips: "Use safety arms or a spotter and keep wrists stacked." },
  { name: "Deadlift", targetMuscles: ["Glutes", "Hamstrings", "Back", "Core"], equipment: "Barbell", difficulty: "Intermediate–Advanced", reps: "5–8", rest: "90–150 sec", instructions: "Brace, push the floor away and keep the bar close as hips and shoulders rise together.", safetyTips: "Do not round your lower back; reset every rep when needed." },
  { name: "Bent Over Row", targetMuscles: ["Back", "Lats", "Biceps"], secondaryMuscles: ["Core", "Hamstrings"], equipment: "Barbell", instructions: "Hinge with a neutral spine and pull the bar toward your lower ribs.", safetyTips: "Avoid jerking your torso to move the weight." },
  { name: "Overhead Press", targetMuscles: ["Shoulders", "Triceps", "Core"], equipment: "Barbell or dumbbells", instructions: "Brace your trunk and press overhead without leaning back.", safetyTips: "Use a pain-free shoulder range and keep ribs controlled." },
  { name: "Lat Pulldown", targetMuscles: ["Lats", "Upper Back", "Biceps"], equipment: "Cable machine", difficulty: "Beginner", reps: "10–15", instructions: "Draw elbows toward your sides and bring the bar to upper chest.", safetyTips: "Do not pull behind the neck or swing backward." },
  { name: "Dumbbell Lunges", targetMuscles: ["Quads", "Glutes", "Hamstrings"], secondaryMuscles: ["Core"], equipment: "Dumbbells", difficulty: "Beginner–Intermediate", instructions: "Step long enough to lower both knees comfortably, then drive through the front foot.", safetyTips: "Keep the front knee aligned over the foot." },
  { name: "Romanian Deadlift", targetMuscles: ["Hamstrings", "Glutes"], secondaryMuscles: ["Back", "Core"], equipment: "Barbell or dumbbells", reps: "8–12", instructions: "Push hips back with soft knees and keep the load close to your legs.", safetyTips: "Stop the descent before your back loses its neutral position." },
]);

const hiitExercises = makeExercises("Cardio", "/images/athlete-training.jpg", [
  { name: "Burpees", targetMuscles: ["Full Body", "Cardio", "Core"], reps: "30–40 sec", rest: "20 sec", difficulty: "Intermediate", beginnerVariation: "Step back one foot at a time and remove the jump.", advancedVariation: "Add a push-up and higher jump.", safetyTips: "Land softly and keep hands stable before kicking back." },
  { name: "Kettlebell Swings", targetMuscles: ["Glutes", "Hamstrings", "Core"], equipment: "Kettlebell", reps: "30–40 sec", rest: "20 sec", instructions: "Hinge at the hips and snap them forward; let the bell float rather than lifting with arms.", safetyTips: "Keep the bell close on the backswing and spine neutral." },
  { name: "Battle Ropes", targetMuscles: ["Shoulders", "Arms", "Core", "Cardio"], equipment: "Battle ropes", reps: "30–40 sec", rest: "20 sec", beginnerVariation: "Use alternating waves at a slower pace.", advancedVariation: "Use powerful double waves with a squat.", safetyTips: "Keep knees soft and shoulders away from ears." },
  { name: "Box Jumps", targetMuscles: ["Quads", "Glutes", "Calves"], equipment: "Stable plyo box", difficulty: "Intermediate", reps: "6–10", beginnerVariation: "Use controlled step-ups.", advancedVariation: "Use a slightly higher box only if landings stay quiet.", safetyTips: "Choose a safe height, land with both feet, and step down." },
  { name: "Mountain Climbers", targetMuscles: ["Core", "Shoulders", "Cardio"], reps: "30–40 sec", rest: "20 sec", beginnerVariation: "Slow the pace and use a bench.", advancedVariation: "Increase pace without bouncing the hips.", safetyTips: "Keep shoulders over hands and maintain a firm plank." },
  { name: "Sled Push", targetMuscles: ["Quads", "Glutes", "Calves", "Core"], equipment: "Weighted sled", reps: "15–25 m", rest: "45–60 sec", beginnerVariation: "Use a light sled and shorter distance.", advancedVariation: "Add load or distance while keeping posture.", safetyTips: "Keep a neutral spine and drive with short controlled steps." },
  { name: "Jump Squats", targetMuscles: ["Quads", "Glutes", "Calves"], reps: "8–15", beginnerVariation: "Use fast bodyweight squats without jumping.", advancedVariation: "Add a controlled pause before each jump.", safetyTips: "Land softly with knees aligned and pause if form fades." },
  { name: "Medicine Ball Slams", targetMuscles: ["Core", "Lats", "Shoulders"], equipment: "Slam ball", reps: "10–15", beginnerVariation: "Use a lighter ball and moderate speed.", advancedVariation: "Use rotational slams with coaching.", safetyTips: "Use a ball made for slamming and keep the floor area clear." },
]);

const mobilityExercises = makeExercises("Mobility", "/guides/cardio-mobility.jpg", [
  { name: "Hip 90/90 Rotation", targetMuscles: ["Hips", "Glutes"], reps: "6–10/side", rest: "As needed", difficulty: "All levels", instructions: "Sit tall with both knees bent and rotate them side to side without forcing the range.", commonMistakes: "Leaning far back or forcing the knees to the floor." },
  { name: "World's Greatest Stretch", targetMuscles: ["Hips", "Hamstrings", "Thoracic Spine"], reps: "4–6/side", instructions: "Step into a long lunge, place one hand down and rotate the other arm toward the ceiling.", commonMistakes: "Collapsing the front knee inward or rushing the rotation." },
  { name: "Thoracic Rotation", targetMuscles: ["Upper Back", "Shoulders"], reps: "6–10/side", instructions: "From a supported position, rotate through the upper back while hips remain quiet.", commonMistakes: "Twisting from the lower back instead of the upper spine." },
  { name: "Shoulder CARs", targetMuscles: ["Shoulders", "Upper Back"], reps: "3–5/side", instructions: "Move one straight arm slowly through the largest pain-free circle you control.", commonMistakes: "Shrugging, arching the back, or moving too quickly." },
  { name: "Ankle Mobility Drill", targetMuscles: ["Ankles", "Calves"], reps: "8–12/side", instructions: "Drive the knee gently forward over the middle toes while keeping the heel down.", commonMistakes: "Lifting the heel or collapsing the arch." },
  { name: "Deep Squat Hold", targetMuscles: ["Hips", "Ankles", "Adductors"], reps: "20–45 sec", instructions: "Sit into a supported deep squat, keep heels grounded and breathe slowly.", commonMistakes: "Forcing depth, rounding aggressively, or holding breath." },
  { name: "Cat-Cow", targetMuscles: ["Spine", "Core"], reps: "8–12", instructions: "Alternate gentle spinal rounding and extension, coordinating the motion with your breath.", commonMistakes: "Moving only the neck or forcing the end range." },
  { name: "Hip Flexor Stretch", targetMuscles: ["Hip Flexors", "Quads"], reps: "30–45 sec/side", instructions: "In a half-kneeling stance, tuck the pelvis slightly and shift forward gently.", commonMistakes: "Overarching the lower back or leaning too far." },
]);

const lowerExercises = makeExercises("Legs", "/guides/legs-core.jpg", [
  { name: "Back Squat", targetMuscles: ["Quadriceps", "Glutes"], secondaryMuscles: ["Hamstrings", "Core"], equipment: "Barbell + rack", difficulty: "Intermediate", instructions: "Brace, sit between your hips, then drive evenly through both feet.", safetyTips: "Set rack safeties and keep knees tracking with toes." },
  { name: "Front Squat", targetMuscles: ["Quadriceps", "Glutes"], secondaryMuscles: ["Core", "Upper Back"], equipment: "Barbell + rack", difficulty: "Intermediate", instructions: "Keep elbows high and torso tall as you descend under control.", safetyTips: "Use a secure front-rack position and suitable mobility." },
  { name: "Romanian Deadlift", targetMuscles: ["Hamstrings", "Glutes"], secondaryMuscles: ["Back", "Core"], equipment: "Barbell or dumbbells", instructions: "Hinge hips backward and keep the load close until hamstrings are tensioned.", safetyTips: "Do not chase depth by rounding your back." },
  { name: "Walking Lunges", targetMuscles: ["Quadriceps", "Glutes"], secondaryMuscles: ["Hamstrings", "Core"], equipment: "Bodyweight or dumbbells", reps: "8–12/side", instructions: "Take controlled steps and lower the back knee toward the floor.", safetyTips: "Use a stable stance and keep the front knee aligned." },
  { name: "Leg Press", targetMuscles: ["Quadriceps", "Glutes"], secondaryMuscles: ["Hamstrings"], equipment: "Leg press machine", difficulty: "Beginner–Intermediate", reps: "10–15", instructions: "Lower the platform until your pelvis stays stable, then press without locking knees.", safetyTips: "Keep your lower back supported and use the machine stops." },
  { name: "Hip Thrust", targetMuscles: ["Gluteus Maximus"], secondaryMuscles: ["Hamstrings", "Core"], equipment: "Bench + barbell", difficulty: "Beginner–Intermediate", reps: "8–15", instructions: "Drive through heels and finish with hips extended while ribs remain down.", safetyTips: "Pad the bar and avoid overextending your lower back." },
  { name: "Leg Extension", targetMuscles: ["Quadriceps"], secondaryMuscles: [], equipment: "Leg extension machine", difficulty: "Beginner", reps: "10–15", instructions: "Extend knees smoothly, pause briefly, then lower under control.", safetyTips: "Use a pain-free range and align the machine pivot with your knee." },
  { name: "Hamstring Curl", targetMuscles: ["Hamstrings"], secondaryMuscles: ["Calves"], equipment: "Hamstring curl machine", difficulty: "Beginner", reps: "10–15", instructions: "Curl through a comfortable range without lifting your hips.", safetyTips: "Control the return and avoid jerking the pad." },
  { name: "Bulgarian Split Squat", targetMuscles: ["Quadriceps", "Glutes"], secondaryMuscles: ["Hamstrings", "Core"], equipment: "Bench + dumbbells", difficulty: "Intermediate", reps: "8–12/side", instructions: "Lower straight down through the front leg and drive through the whole front foot.", safetyTips: "Set a stable foot position before adding load." },
  { name: "Standing Calf Raise", targetMuscles: ["Calves"], secondaryMuscles: ["Foot stabilizers"], equipment: "Machine or dumbbells", difficulty: "Beginner", reps: "12–20", instructions: "Rise onto the balls of your feet, pause, and lower through a controlled range.", safetyTips: "Use support for balance and avoid bouncing." },
]);

export const classPrograms: ClassProgram[] = [
  {
    slug: "strength-lab", name: "Strength Lab", shortName: "Strength Lab",
    subtitle: "Build real strength with structured, coach-led resistance training.",
    cardDescription: "Build strength, improve lifting technique, and train your full body with coach-guided resistance training.",
    description: "Strength Lab teaches the foundational resistance-training patterns with progressive loads, clear technique cues and coaching that meets you at your current level.",
    image: "/images/strength-training.jpg", duration: "45–60 min", difficulty: "All levels", category: "Strength", goal: "Strength + lean muscle", equipment: "Barbells, dumbbells, machines", calories: "Approx. 250–450 kcal", guidance: "Coach-led", frequency: "2–4 times/week",
    whoFor: ["Beginners", "Intermediate gym members", "Advanced lifters", "People pursuing muscle development", "People wanting improved strength"],
    benefits: ["Increase muscular strength", "Build lean muscle", "Improve lifting technique", "Support bone strength", "Support healthy metabolism", "Improve functional performance"],
    focusAreas: ["Full body", "Compound lifts", "Progressive resistance", "Technique"], exercises: strengthExercises,
  },
  {
    slug: "functional-hiit", name: "Functional HIIT", shortName: "Functional HIIT",
    subtitle: "High-energy functional training for endurance, conditioning, athleticism and calorie expenditure.",
    cardDescription: "Move with intensity through coach-scaled intervals that build stamina, power and total-body conditioning.",
    description: "Functional HIIT alternates challenging work intervals with planned recovery. Movements are chosen to develop usable fitness and can be scaled for experience and impact tolerance.",
    image: "/images/athlete-training.jpg", duration: "45 min", difficulty: "Scalable", category: "Conditioning", goal: "Endurance + athleticism", equipment: "Kettlebells, ropes, boxes, sleds", calories: "Approx. 350–600 kcal", guidance: "Coach-led intervals", frequency: "2–3 times/week",
    whoFor: ["Active beginners using modifications", "Intermediate trainees", "Athletes", "People building stamina", "People who enjoy group energy"],
    benefits: ["Improve cardiovascular conditioning", "Develop muscular endurance", "Build speed and power", "Improve coordination", "Efficient full-body training", "Scalable intensity"],
    focusAreas: ["Cardio", "Power", "Core", "Full body"],
    workoutStructure: ["Warm-up — 8 minutes", "40 seconds work", "20 seconds rest", "6–8 exercises", "3–4 rounds", "Cool-down — 5–10 minutes"], exercises: hiitExercises,
  },
  {
    slug: "mobility-flow", name: "Mobility Flow", shortName: "Mobility Flow",
    subtitle: "Improve joint movement, flexibility, posture, recovery and movement quality.",
    cardDescription: "Restore useful range of motion and move with more control through guided, low-impact sequences.",
    description: "Mobility combines usable range of motion with strength and control. Unlike flexibility—which describes how far tissues can lengthen—mobility is your ability to actively control a joint through its range.",
    image: "/guides/cardio-mobility.jpg", duration: "20–45 min", difficulty: "All levels", category: "Mobility", goal: "Movement quality + recovery", equipment: "Mat, band, light support", calories: "Not calorie-focused", guidance: "Coach-guided flow", frequency: "2–5 times/week",
    whoFor: ["Beginners", "Intermediate trainees", "Advanced lifters", "Athletes", "Gym members", "Older adults when movements are appropriate"],
    benefits: ["Better joint range of motion", "Improved posture awareness", "Better lifting positions", "Reduce avoidable movement risk", "Support recovery", "Better daily movement"],
    focusAreas: ["Hips", "Shoulders", "Spine", "Ankles"],
    distinctions: [{ title: "Flexibility", text: "The passive length and range available in muscles and tissues." }, { title: "Mobility", text: "The active control and strength you have through a joint's usable range." }], exercises: mobilityExercises,
  },
  {
    slug: "lower-body", name: "Lower Body Training", shortName: "Lower Body",
    subtitle: "Build strong legs, powerful glutes and a more athletic lower body.",
    cardDescription: "Train quads, hamstrings, glutes, calves and hips with smart strength work and balanced technique.",
    description: "Lower Body Training combines bilateral and single-leg patterns to build force, stability and balanced development across the hips, knees and ankles.",
    image: "/guides/legs-core.jpg", duration: "45–60 min", difficulty: "All levels", category: "Lower body", goal: "Leg strength + power", equipment: "Barbells, dumbbells, machines", calories: "Approx. 250–500 kcal", guidance: "Coach-led", frequency: "2 times/week",
    whoFor: ["Beginners learning leg training", "Intermediate gym members", "Strength trainees", "Athletes", "People wanting stronger glutes and legs"],
    benefits: ["Build leg strength", "Develop powerful glutes", "Improve lower-body stability", "Support athletic performance", "Improve training balance", "Build movement confidence"],
    focusAreas: ["Quadriceps", "Hamstrings", "Glutes", "Calves", "Hip muscles"], exercises: lowerExercises,
  },
];

export const classSchedule: ClassScheduleEntry[] = [
  { day: "Monday", time: "6:00 AM", classSlug: "strength-lab", className: "Strength Lab", coach: "Himal", duration: "60 min", spaces: 6 },
  { day: "Tuesday", time: "5:30 PM", classSlug: "functional-hiit", className: "Functional HIIT", coach: "Himal", duration: "45 min", spaces: 8 },
  { day: "Wednesday", time: "7:00 AM", classSlug: "mobility-flow", className: "Mobility Flow", coach: "Himal", duration: "45 min", spaces: 10 },
  { day: "Thursday", time: "6:00 PM", classSlug: "lower-body", className: "Lower Body", coach: "Himal", duration: "60 min", spaces: 5 },
];

export function getClassProgram(slug: string) {
  return classPrograms.find((program) => program.slug === slug);
}
