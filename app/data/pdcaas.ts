export type PdcaasFood = {
  nameEn: string;
  nameNe: string;
  score: number;
  group: "Dairy" | "Animal" | "Plant";
  noteEn: string;
  noteNe: string;
};

// Typical published PDCAAS values. Scores vary with processing, test method,
// amino-acid reference pattern and product formulation.
export const pdcaasFoods: PdcaasFood[] = [
  { nameEn: "Whey protein isolate", nameNe: "व्हे प्रोटिन आइसोलेट", score: 1.0, group: "Dairy", noteEn: "Complete dairy protein; PDCAAS is capped at 1.00.", noteNe: "पूर्ण दूधजन्य प्रोटिन; PDCAAS अधिकतम १.०० मा सीमित हुन्छ।" },
  { nameEn: "Milk", nameNe: "दूध", score: 1.0, group: "Dairy", noteEn: "High-quality complete protein.", noteNe: "उच्च गुणस्तरको पूर्ण प्रोटिन।" },
  { nameEn: "Egg", nameNe: "अण्डा", score: 1.0, group: "Animal", noteEn: "High-quality complete protein.", noteNe: "उच्च गुणस्तरको पूर्ण प्रोटिन।" },
  { nameEn: "Chicken breast", nameNe: "चिकेन ब्रेस्ट", score: 1.0, group: "Animal", noteEn: "Typical published score for cooked chicken protein.", noteNe: "पकाएको चिकेन प्रोटिनको सामान्य प्रकाशित स्कोर।" },
  { nameEn: "Soy protein isolate", nameNe: "सोया प्रोटिन आइसोलेट", score: 1.0, group: "Plant", noteEn: "A high-quality isolated plant protein.", noteNe: "उच्च गुणस्तरको अलग गरिएको वनस्पति प्रोटिन।" },
  { nameEn: "Beef", nameNe: "गाईको मासु", score: 0.92, group: "Animal", noteEn: "Typical value; cooking and cut can affect estimates.", noteNe: "सामान्य मान; पकाउने तरिका र भागले अनुमान बदल्न सक्छ।" },
  { nameEn: "Pea protein isolate", nameNe: "मटर प्रोटिन आइसोलेट", score: 0.89, group: "Plant", noteEn: "Concentrated plant protein; formulation matters.", noteNe: "सघन वनस्पति प्रोटिन; उत्पादनको बनावट महत्त्वपूर्ण हुन्छ।" },
  { nameEn: "Boiled chickpeas", nameNe: "उसिनेको चना", score: 0.74, group: "Plant", noteEn: "Pulse protein with a moderate score.", noteNe: "मध्यम स्कोर भएको दालजन्य प्रोटिन।" },
  { nameEn: "Cooked oats", nameNe: "पकाएको ओट्स", score: 0.67, group: "Plant", noteEn: "Cereal protein; typically limited by lysine.", noteNe: "अन्नको प्रोटिन; सामान्यतया लाइसिन सीमित हुन्छ।" },
  { nameEn: "Green lentils", nameNe: "हरियो मसुरो", score: 0.63, group: "Plant", noteEn: "Pulse protein; pair with grains for dietary variety.", noteNe: "दालजन्य प्रोटिन; विविधताका लागि अन्नसँग मिलाउन सकिन्छ।" },
  { nameEn: "Boiled peas", nameNe: "उसिनेको मटर", score: 0.60, group: "Plant", noteEn: "Whole-food plant protein.", noteNe: "सम्पूर्ण वनस्पति खानाको प्रोटिन।" },
  { nameEn: "White rice", nameNe: "सेतो चामल", score: 0.56, group: "Plant", noteEn: "Cereal protein; score is not protein quantity.", noteNe: "अन्नको प्रोटिन; यो स्कोर प्रोटिनको मात्रा होइन।" },
  { nameEn: "Tofu", nameNe: "टोफु", score: 0.56, group: "Plant", noteEn: "Reported values vary substantially by processing.", noteNe: "प्रशोधनअनुसार प्रकाशित मान धेरै फरक हुन सक्छ।" },
  { nameEn: "Roasted peanuts", nameNe: "भुटेको बदाम", score: 0.51, group: "Plant", noteEn: "Protein-rich food, but with a lower amino-acid score.", noteNe: "प्रोटिनयुक्त खाना, तर एमिनो एसिड स्कोर तुलनात्मक रूपमा कम।" },
  { nameEn: "Wheat bread", nameNe: "गहुँको रोटी", score: 0.28, group: "Plant", noteEn: "Typical published score; usually limited by lysine.", noteNe: "सामान्य प्रकाशित स्कोर; प्रायः लाइसिन सीमित हुन्छ।" },
];
