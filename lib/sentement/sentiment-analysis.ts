import sentiment from "sentiment";

export const analyzeSentiment = (text: string): number => {
  const result = new sentiment().analyze(text);
  return result.score;
};
