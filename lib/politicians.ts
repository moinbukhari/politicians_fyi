export function getPoliticianById(id: number): Politician | undefined {
  return politicians.find((politician) => politician.id === id);
}
export const politicians = [
  {
    id: 1,
    name: "Keir Starmer MP",
    constituency: "Holborn and St Pancras",
    party: "Labour",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
    vote: 10,
    affiliationsFinances: 4,
    parliamentaryQuestions: 3,
  },
  {
    id: 2,
    name: "Boris Johnson MP",
    constituency: "Uxbridge and South Ruislip",
    party: "Conservative",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg/640px-Boris_Johnson_official_portrait_%28cropped%29.jpg",
    vote: 15,
    affiliationsFinances: 6,
    parliamentaryQuestions: 5,
  },
  {
    id: 3,
    name: "Rishi Sunak MP",
    constituency: "Richmond",
    party: "Conservative",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/Portrait_of_Prime_Minister_Rishi_Sunak_%28cropped%29.jpg",
    vote: 9,
    affiliationsFinances: 10,
    parliamentaryQuestions: 4,
  },
  {
    id: 4,
    name: "Angela Rayner MP",
    constituency: "Ashton-under-Lyne",
    party: "Labour",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Official_portrait_of_Angela_Rayner_MP_crop_2.jpg",
    vote: 8,
    affiliationsFinances: 6,
    parliamentaryQuestions: 5,
  },
  {
    id: 5,
    name: "Penny Mordaunt MP",
    constituency: "Portsmouth North",
    party: "Conservative",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
    vote: 1,
    affiliationsFinances: 1,
    parliamentaryQuestions: 1,
  },
  {
    id: 6,
    name: "Darren Jones MP",
    constituency: "Bristol North West",
    party: "Labour",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
    vote: 1,
    affiliationsFinances: 1,
    parliamentaryQuestions: 1,
  },
  {
    id: 7,
    name: "Ed Miliband MP",
    constituency: "Doncaster North",
    party: "Labour",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
    vote: 1,
    affiliationsFinances: 1,
    parliamentaryQuestions: 1,
  },
  {
    id: 8,
    name: "Suella Braverman MP",
    constituency: "Fareham",
    party: "Conservative",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
    vote: 1,
    affiliationsFinances: 1,
    parliamentaryQuestions: 1,
  },
  {
    id: 9,
    name: "Lisa Nandy MP",
    constituency: "Wigan",
    party: "Labour",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
    vote: 1,
    affiliationsFinances: 1,
    parliamentaryQuestions: 1,
  },
  {
    id: 10,
    name: "Michael Gove MP",
    constituency: "Surrey Heath",
    party: "Conservative",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
    vote: 1,
    affiliationsFinances: 1,
    parliamentaryQuestions: 1,
  },
  {
    id: 11,
    name: "Wes Streeting MP",
    constituency: "Ilford North",
    party: "Labour",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
    vote: 1,
    affiliationsFinances: 1,
    parliamentaryQuestions: 1,
  },
  {
    id: 12,
    name: "Grant Shapps MP",
    constituency: "Welwyn Hatfield",
    party: "Conservative",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
    vote: 1,
    affiliationsFinances: 1,
    parliamentaryQuestions: 1,
  },
  {
    id: 13,
    name: "David Lammy MP",
    constituency: "Tottenham",
    party: "Labour",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
    vote: 1,
    affiliationsFinances: 1,
    parliamentaryQuestions: 1,
  },
  {
    id: 14,
    name: "Oliver Dowden MP",
    constituency: "Hertsmere",
    party: "Conservative",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
    vote: 1,
    affiliationsFinances: 1,
    parliamentaryQuestions: 1,
  },
  {
    id: 15,
    name: "Rachel Reeves MP",
    constituency: "Leeds West",
    party: "Labour",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
    vote: 1,
    affiliationsFinances: 1,
    parliamentaryQuestions: 1,
  },
  {
    id: 16,
    name: "James Cleverly MP",
    constituency: "Braintree",
    party: "Conservative",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
    vote: 1,
    affiliationsFinances: 1,
    parliamentaryQuestions: 1,
  },
];

export type Politician = {
  id: number;
  name: string;
  constituency: string;
  party: string;
  image: string;
  vote: number;
  affiliationsFinances: number;
  parliamentaryQuestions: number;
};
