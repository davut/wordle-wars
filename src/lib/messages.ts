function wordToBoard(word: string, state: string = "correct") {
  return [[...word].map((letter) => ({ letter, state }))];
}

const enterYourName = [
  [
    { letter: "e", state: "correct" },
    { letter: "n", state: "correct" },
    { letter: "t", state: "correct" },
    { letter: "e", state: "correct" },
    { letter: "r", state: "correct" },
  ],
  [
    { letter: "y", state: "present" },
    { letter: "o", state: "present" },
    { letter: "u", state: "present" },
    { letter: "r", state: "present" },
    { letter: "", state: "absent" },
  ],
  [
    { letter: "", state: "absent" },
    { letter: "n", state: "correct" },
    { letter: "a", state: "correct" },
    { letter: "m", state: "correct" },
    { letter: "e", state: "correct" },
  ],
];

const abray = [
  [
    { letter: "a", state: "correct" },
    { letter: "b", state: "absent" },
    { letter: "r", state: "absent" },
    { letter: "a", state: "absent" },
    { letter: "ý", state: "absent" },
  ],
];

const dileg = [
  [
    { letter: "d", state: "absent" },
    { letter: "i", state: "present" },
    { letter: "l", state: "absent" },
    { letter: "e", state: "absent" },
    { letter: "g", state: "absent" },
  ],
];

const gyrat = [
  [
    { letter: "g", state: "absent" },
    { letter: "y", state: "absent" },
    { letter: "r", state: "absent" },
    { letter: "a", state: "absent" },
    { letter: "t", state: "absent" },
  ],
];

const fight = [
  [
    { letter: "s", state: "correct" },
    { letter: "ö", state: "correct" },
    { letter: "w", state: "correct" },
    { letter: "e", state: "correct" },
    { letter: "ş", state: "correct" },
  ],
];

const connecting = [
  [
    { letter: "o", state: "present" },
    { letter: "l", state: "present" },
    { letter: "", state: "absent" },
    { letter: "", state: "absent" },
    { letter: "", state: "absent" },
  ],
  [
    { letter: "", state: "absent" },
    { letter: "s", state: "correct" },
    { letter: "ö", state: "correct" },
    { letter: "z", state: "correct" },
    { letter: "", state: "absent" },
  ],
  [
    { letter: "", state: "absent" },
    { letter: "n", state: "present" },
    { letter: "ä", state: "present" },
    { letter: "m", state: "present" },
    { letter: "e", state: "present" },
  ],
];

export default {
  wordToBoard,
  abray,
  dileg,
  gyrat,
  connecting,
  fight,
  enterYourName,
};
