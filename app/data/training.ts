export type Exercise = {
  nameEn: string;
  nameNe: string;
  targetEn: string;
  targetNe: string;
  cueEn: string;
  cueNe: string;
  prescription: string;
};

export type TrainingCategory = {
  slug: string;
  titleEn: string;
  titleNe: string;
  introEn: string;
  introNe: string;
  image: string;
  imageAlt: string;
  exercises: Exercise[];
};

export const categories: TrainingCategory[] = [
  {
    slug: "chest", titleEn: "Chest", titleNe: "छाती", image: "/guides/chest.jpg", imageAlt: "Bilingual chest exercise guide",
    introEn: "Train the pectorals through horizontal pressing, incline work and controlled adduction. Keep the shoulder blades stable and progress load only while technique stays clean.",
    introNe: "होरिजोन्टल प्रेस, इन्क्लाइन र नियन्त्रित फ्लाइबाट छातीका मांसपेशी तालिम गर्नुहोस्। काँधको ब्लेड स्थिर राख्नुहोस् र सही फर्म कायम हुँदा मात्र तौल बढाउनुहोस्।",
    exercises: [
      ["Bench Press","बेन्च प्रेस","Chest, triceps","छाती, ट्राइसेप्स","Feet planted; lower the bar with control and press without bouncing.","खुट्टा जमिनमा स्थिर राखी बारलाई नियन्त्रणमा तल ल्याउनुहोस्; छातीमा उफारेर नथिच्नुहोस्।","3–4 × 6–10"],
      ["Incline Dumbbell Press","इन्क्लाइन डम्बेल प्रेस","Upper chest","माथिल्लो छाती","Use a low incline, keep wrists stacked and stop before the shoulders roll forward.","कम इन्क्लाइन राखी नाडी सीधा राख्नुहोस्; काँध अगाडि जानुअघि रोक्नुहोस्।","3 × 8–12"],
      ["Push-Up","पुश-अप","Chest, core","छाती, कोर","Keep a straight body line and bring the chest between the hands.","शरीर टाउकोदेखि एडीसम्म सीधा राखी छातीलाई हातको बीचतिर ल्याउनुहोस्।","3 × quality reps"],
      ["Dumbbell Chest Fly","डम्बेल चेस्ट फ्लाइ","Chest stretch/adduction","छाती तन्काइ","Keep a soft elbow bend and use a load you can control through the arc.","कुहिनो हल्का मोडेर पूरा आर्कमा नियन्त्रण गर्न सकिने तौल प्रयोग गर्नुहोस्।","2–3 × 10–15"],
      ["Cable Crossover","केबल क्रसओभर","Chest adduction","छाती खुम्च्याउने","Brace the torso and bring the upper arms across without shrugging.","धड स्थिर राखी काँध नउचाली हात अगाडि मिलाउनुहोस्।","2–3 × 12–15"],
    ].map(toExercise),
  },
  {
    slug: "back", titleEn: "Back", titleNe: "ढाड", image: "/guides/back.jpg", imageAlt: "Himal demonstrating pull-up, lat pulldown and dumbbell row",
    introEn: "Build the lats, upper back and spinal-support muscles with vertical pulls and rows. Lead with the elbows, keep the ribs controlled and avoid using momentum.",
    introNe: "भर्टिकल पुल र रो प्रयोग गरी ल्याट्स, माथिल्लो ढाड र मेरुदण्डलाई सहारा दिने मांसपेशी बलियो बनाउनुहोस्। कुहिनोबाट तान्नुहोस् र झट्का नदिनुहोस्।",
    exercises: [
      ["Pull-Up / Assisted Pull-Up","पुल-अप / असिस्टेड पुल-अप","Lats, upper back","ल्याट्स, माथिल्लो ढाड","Start from a controlled hang; drive elbows toward the ribs.","नियन्त्रित ह्याङबाट सुरु गरी कुहिनो करङतिर तान्नुहोस्।","3 × 5–10"],
      ["Lat Pulldown","ल्याट पुलडाउन","Lats","ल्याट्स","Pull to the upper chest without leaning far back or yanking the bar.","धेरै पछाडि नढल्की र बार नझट्काई माथिल्लो छातीतिर तान्नुहोस्।","3 × 8–12"],
      ["Barbell Row","बारबेल रो","Mid-back, lats","बीच ढाड, ल्याट्स","Hinge at the hips, brace the trunk and row toward the lower ribs.","हिपबाट झुकी कोर कसेर बारलाई तल्लो करङतिर तान्नुहोस्।","3 × 6–10"],
      ["Seated Cable Row","सिटेड केबल रो","Mid-back","बीच ढाड","Keep the torso quiet and finish with elbows behind the body.","धड स्थिर राखी कुहिनोलाई शरीर पछाडि पुर्‍याउनुहोस्।","3 × 10–12"],
      ["One-Arm Dumbbell Row","एक हात डम्बेल रो","Lats, rear shoulder","ल्याट्स, पछिल्लो काँध","Support the torso and pull the dumbbell toward the hip.","धडलाई सहारा दिई डम्बेललाई हिपतिर तान्नुहोस्।","3 × 8–12/side"],
    ].map(toExercise),
  },
  {
    slug: "shoulders", titleEn: "Shoulders", titleNe: "काँध", image: "/guides/shoulders.jpg", imageAlt: "Bilingual shoulder exercise guide",
    introEn: "Use pressing plus front, side and rear-delt work for balanced shoulders. Painful ranges are not productive—reduce load or range and seek assessment for persistent pain.",
    introNe: "सन्तुलित काँधका लागि प्रेससँगै अगाडि, साइड र रियर डेल्ट अभ्यास गर्नुहोस्। दुख्ने रेन्जमा जबर्जस्ती नगर्नुहोस्; लगातार दुखेमा विशेषज्ञसँग जाँच गराउनुहोस्।",
    exercises: [
      ["Overhead Press","ओभरहेड प्रेस","Shoulders, triceps","काँध, ट्राइसेप्स","Brace the trunk and press overhead without over-arching the lower back.","कोर कसेर तल्लो ढाड अत्यधिक नबङ्ग्याई माथि प्रेस गर्नुहोस्।","3–4 × 6–10"],
      ["Dumbbell Shoulder Press","डम्बेल शोल्डर प्रेस","Shoulders","काँध","Use a comfortable grip and control the bottom position.","सहज ग्रिप प्रयोग गरी तलको स्थिति नियन्त्रण गर्नुहोस्।","3 × 8–12"],
      ["Lateral Raise","लेटरल रेज","Side delts","साइड डेल्ट","Lift with a soft elbow and stop around shoulder height.","कुहिनो हल्का मोडेर काँधको उचाइसम्म उठाउनुहोस्।","3 × 12–20"],
      ["Front Raise","फ्रन्ट रेज","Front delts","अगाडिको काँध","Raise without swinging; pressing already trains this area heavily.","शरीर नहल्लाई उठाउनुहोस्; प्रेसले पनि यो भाग धेरै तालिम गर्छ।","2 × 10–15"],
      ["Rear-Delt Fly","रियर डेल्ट फ्लाइ","Rear delts, upper back","पछिल्लो काँध, माथिल्लो ढाड","Hinge, keep the neck neutral and sweep the arms out wide.","हिपबाट झुकी घाँटी सीधा राखी हात बाहिर फैलाउनुहोस्।","3 × 12–20"],
    ].map(toExercise),
  },
  {
    slug: "arms", titleEn: "Arms", titleNe: "हात", image: "/guides/arms.jpg", imageAlt: "Bilingual arm exercise guide",
    introEn: "Combine elbow flexion for biceps with elbow extension for triceps. Full controlled range usually matters more than chasing heavier weights.",
    introNe: "बाइसेप्सका लागि कुहिनो मोड्ने र ट्राइसेप्सका लागि कुहिनो सिधा गर्ने अभ्यास मिलाउनुहोस्। धेरै तौलभन्दा पूरा नियन्त्रित रेन्ज महत्त्वपूर्ण हुन्छ।",
    exercises: [
      ["Barbell Curl","बारबेल कर्ल","Biceps","बाइसेप्स","Keep elbows near the ribs and avoid leaning back.","कुहिनो करङ नजिक राखी पछाडि नढल्कनुहोस्।","3 × 8–12"],
      ["Hammer Curl","ह्यामर कर्ल","Biceps, brachialis","बाइसेप्स, ब्राकियालिस","Use a neutral grip and lower slowly.","न्युट्रल ग्रिप राखी बिस्तारै तल झार्नुहोस्।","3 × 10–12"],
      ["Preacher Curl","प्रिचर कर्ल","Biceps isolation","बाइसेप्स आइसोलेसन","Keep the upper arm supported; do not snap the elbow straight.","माथिल्लो हात प्याडमा राखी कुहिनो झट्काले सीधा नगर्नुहोस्।","2–3 × 10–15"],
      ["Triceps Pushdown","ट्राइसेप्स पुशडाउन","Triceps","ट्राइसेप्स","Pin elbows by the sides and finish with control.","कुहिनो शरीर छेउमा स्थिर राखी नियन्त्रणमा तल थिच्नुहोस्।","3 × 10–15"],
      ["Overhead Triceps Extension","ओभरहेड ट्राइसेप्स एक्सटेन्सन","Long head triceps","ट्राइसेप्सको लामो भाग","Keep ribs down and use a pain-free elbow position.","करङ तल राखी कुहिनो नदुख्ने स्थितिमा अभ्यास गर्नुहोस्।","3 × 10–15"],
    ].map(toExercise),
  },
  {
    slug: "legs", titleEn: "Legs", titleNe: "खुट्टा", image: "/guides/legs-core.jpg", imageAlt: "Bilingual legs and core exercise guide",
    introEn: "Train knee-dominant, hip-dominant and single-leg patterns for balanced strength. Begin with a stable range you own, then add depth or load gradually.",
    introNe: "सन्तुलित शक्तिका लागि घुँडा, हिप र एक-खुट्टे चालहरू अभ्यास गर्नुहोस्। आफूले नियन्त्रण गर्न सक्ने रेन्जबाट सुरु गरी बिस्तारै गहिराइ वा तौल बढाउनुहोस्।",
    exercises: [
      ["Squat","स्क्वाट","Quads, glutes","क्वाड्स, नितम्ब","Brace, keep the whole foot planted and let knees track with toes.","कोर कसेर पूरा खुट्टा जमिनमा राखी घुँडालाई औँलाको दिशामा लैजानुहोस्।","3–4 × 6–12"],
      ["Walking Lunge","वाकिङ लन्ज","Quads, glutes, balance","क्वाड्स, नितम्ब, सन्तुलन","Step far enough to keep control and drive through the front foot.","नियन्त्रण हुने गरी पाइला चालेर अगाडिको खुट्टाबाट उठ्नुहोस्।","3 × 8–12/side"],
      ["Romanian Deadlift","रोमानियन डेडलिफ्ट","Hamstrings, glutes","ह्यामस्ट्रिङ, नितम्ब","Push hips back with a neutral spine; stop when hamstrings limit the range.","ढाड सीधा राखी हिप पछाडि धकेल्नुहोस्; ह्यामस्ट्रिङ तन्किँदा रोक्नुहोस्।","3 × 6–10"],
      ["Leg Press","लेग प्रेस","Quads, glutes","क्वाड्स, नितम्ब","Keep hips on the pad and use a controlled depth.","हिप प्याडमा राखी नियन्त्रणमा गहिराइ लिनुहोस्।","3 × 10–15"],
      ["Calf Raise","काफ रेज","Calves","पिँडुला","Pause at the top and lower through a comfortable stretch.","माथि केही क्षण रोकिएर सहज तन्काइसम्म तल झार्नुहोस्।","3 × 12–20"],
    ].map(toExercise),
  },
  {
    slug: "core", titleEn: "Core", titleNe: "कोर", image: "/guides/legs-core.jpg", imageAlt: "Bilingual legs and core exercise guide",
    introEn: "The core resists unwanted movement and transfers force. Use anti-extension, anti-rotation and controlled trunk-flexion work—not endless fast repetitions.",
    introNe: "कोरले अनावश्यक चाल रोक्छ र शक्ति सार्छ। धेरै छिटो रेप्सभन्दा एन्टि-एक्सटेन्सन, एन्टि-रोटेसन र नियन्त्रित फ्लेक्सन अभ्यास गर्नुहोस्।",
    exercises: [
      ["Plank","प्लाङ्क","Anterior core","अगाडिको कोर","Squeeze glutes, keep ribs down and breathe behind the brace.","नितम्ब कस्दै करङ तल राखी कोर कसेर सास फेर्नुहोस्।","3 × 20–45 sec"],
      ["Hanging Leg Raise","ह्याङ्गिङ लेग रेज","Abs, hip flexors","एब्स, हिप फ्लेक्सर","Avoid swinging; start with bent knees if needed.","शरीर नझुलाइ अभ्यास गर्नुहोस्; आवश्यक परे घुँडा मोडेर सुरु गर्नुहोस्।","3 × 6–12"],
      ["Dead Bug","डेड बग","Deep core control","गहिरो कोर नियन्त्रण","Keep the lower back gently connected to the floor while limbs move.","हातखुट्टा चलाउँदा तल्लो ढाड हल्का भुइँमा जोडेर राख्नुहोस्।","3 × 6–10/side"],
      ["Pallof Press","प्यालोफ प्रेस","Anti-rotation core","एन्टि-रोटेसन कोर","Stand tall and resist the cable pulling you sideways.","सीधा उभिएर केबलले साइडतिर तान्दा शरीर नघुमाउनुहोस्।","3 × 10–12/side"],
      ["Cable Crunch","केबल क्रन्च","Abdominals","पेटका मांसपेशी","Curl the ribs toward the pelvis without pulling only with the arms.","हातले मात्र नतानिकन करङलाई पेल्भिसतिर मोड्नुहोस्।","3 × 10–15"],
    ].map(toExercise),
  },
  {
    slug: "cardio", titleEn: "Cardio", titleNe: "कार्डियो", image: "/guides/cardio-mobility.jpg", imageAlt: "Bilingual cardio and mobility exercise guide",
    introEn: "Build heart and lung fitness with a sustainable mix of easy aerobic work and limited harder intervals. Increase weekly duration gradually.",
    introNe: "सहज एरोबिक अभ्यास र सीमित कडा इन्टरभल मिलाएर मुटु–फोक्सोको फिटनेस बढाउनुहोस्। साप्ताहिक समय बिस्तारै बढाउनुहोस्।",
    exercises: [
      ["Brisk Walking","छिटो हिँडाइ","Aerobic base","एरोबिक आधार","Walk at a pace where conversation is possible but purposeful.","कुराकानी गर्न सकिने तर सक्रिय महसुस हुने गतिमा हिँड्नुहोस्।","20–40 min"],
      ["Cycling","साइकलिङ","Endurance, legs","सहनशक्ति, खुट्टा","Set the seat for a slight knee bend and keep cadence smooth.","घुँडा हल्का मोडिने गरी सिट मिलाई समान गतिमा चलाउनुहोस्।","20–45 min"],
      ["Jump Rope","डोरी कुदाइ","Coordination, conditioning","समन्वय, कन्डिसनिङ","Stay light on the feet and begin with short rounds.","खुट्टामा हल्का उत्रिँदै छोटो राउन्डबाट सुरु गर्नुहोस्।","6–10 × 30 sec"],
      ["Rowing Machine","रोइङ मेसिन","Full-body cardio","पूरा शरीर कार्डियो","Drive with legs, then finish with the arms; reverse smoothly.","पहिले खुट्टाले धकेलीपछि हात तान्नुहोस्; फर्कँदा क्रम उल्टो गर्नुहोस्।","10–25 min"],
      ["Controlled Intervals","नियन्त्रित इन्टरभल","Work capacity","कार्य क्षमता","Alternate one hard minute with two easy minutes; stop if symptoms are unusual.","१ मिनेट कडा र २ मिनेट सहज पालैपालो गर्नुहोस्; असामान्य लक्षण आए रोक्नुहोस्।","5–8 rounds"],
    ].map(toExercise),
  },
  {
    slug: "mobility", titleEn: "Mobility", titleNe: "मोबिलिटी", image: "/guides/cardio-mobility.jpg", imageAlt: "Bilingual cardio and mobility exercise guide",
    introEn: "Mobility combines usable range of motion with control. Choose movements that match your restriction and use gentle, repeatable ranges rather than forcing pain.",
    introNe: "मोबिलिटी भनेको चलायमान रेन्जसँग नियन्त्रण जोड्नु हो। आफ्नो सीमाअनुसार अभ्यास छान्नुहोस् र दुखाइ जबर्जस्ती नगरी सहज रेन्जमा दोहोर्‍याउनुहोस्।",
    exercises: [
      ["Cat–Cow","क्याट–काउ","Spine mobility","मेरुदण्ड चलायमान","Move one spinal segment at a time with slow breathing.","बिस्तारै सास फेर्दै मेरुदण्डलाई क्रमशः चलाउनुहोस्।","2 × 6–10"],
      ["Shoulder Wall Slide","शोल्डर वाल स्लाइड","Shoulder control","काँध नियन्त्रण","Keep ribs down and slide only as high as you can control.","करङ तल राखी नियन्त्रण हुने उचाइसम्म मात्र हात चलाउनुहोस्।","2 × 8–12"],
      ["Half-Kneeling Hip-Flexor Stretch","हाफ-निलिङ हिप फ्लेक्सर स्ट्रेच","Front hip","अगाडिको हिप","Tuck the pelvis gently before shifting forward.","अगाडि सर्नुअघि पेल्भिस हल्का भित्र मोड्नुहोस्।","2 × 30 sec/side"],
      ["90/90 Hip Switch","९०/९० हिप स्विच","Hip rotation","हिप घुमाइ","Rotate between sides without forcing the knees down.","घुँडालाई जबर्जस्ती नथिची दुवै साइड घुम्नुहोस्।","2 × 6–10"],
      ["Ankle Rock","एङ्कल रक","Ankle dorsiflexion","एङ्कल चलायमान","Drive the knee over the toes while the heel stays down.","एडी जमिनमै राखी घुँडालाई औँलामाथि अगाडि लैजानुहोस्।","2 × 10/side"],
    ].map(toExercise),
  },
];

function toExercise(values: string[]): Exercise {
  return {
    nameEn: values[0], nameNe: values[1], targetEn: values[2], targetNe: values[3],
    cueEn: values[4], cueNe: values[5], prescription: values[6],
  };
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function exerciseSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function getExercise(categorySlug: string, slug: string) {
  const category = getCategory(categorySlug);
  const exercise = category?.exercises.find((item) => exerciseSlug(item.nameEn) === slug);
  return category && exercise ? { category, exercise } : undefined;
}

export function exerciseEquipment(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes("dumbbell") || lower.includes("lateral") || lower.includes("front raise") || lower.includes("rear-delt") || lower.includes("hammer")) return ["Dumbbells", "डम्बेल"];
  if (lower.includes("barbell") || lower.includes("bench press") || lower.includes("overhead press") || lower.includes("romanian")) return ["Barbell / rack", "बारबेल / र्‍याक"];
  if (lower.includes("cable") || lower.includes("pulldown") || lower.includes("pushdown") || lower.includes("pallof")) return ["Cable machine", "केबल मेसिन"];
  if (lower.includes("cycling")) return ["Bicycle / exercise bike", "साइकल / एक्सरसाइज बाइक"];
  if (lower.includes("rowing machine")) return ["Rowing machine", "रोइङ मेसिन"];
  if (lower.includes("rope")) return ["Jump rope", "डोरी"];
  if (lower.includes("leg press")) return ["Leg-press machine", "लेग प्रेस मेसिन"];
  if (lower.includes("preacher")) return ["Curl bench + bar", "कर्ल बेन्च + बार"];
  return ["Body weight / open space", "शरीरको तौल / खुला ठाउँ"];
}
