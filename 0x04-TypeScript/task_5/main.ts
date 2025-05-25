interface MajorCredits {
  credits: number;
  __brand: "Major";
}

interface MinorCredits {
  credits: number;
  __brand: "Minor";
}

export const sumMajorCredits = (
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits => {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "Major",
  };
};

export const sumMinorCredits = (
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits => {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "Minor",
  };
};