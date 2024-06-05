"use client";
import { analyzeSentiment } from "@/lib/sentement/sentiment-analysis";
import { useState } from "react";

const SentimentAnalysis = () => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleAnalyzeSentiment = () => {
    console.log(1);
    const score = analyzeSentiment(text);
    console.log(2);
    console.log(score);
    setSentiment(score);
  };

  return (
    <div className='flex flex-col space-y-2'>
      <textarea
        value={text}
        onChange={handleTextChange}
        className='w-[300px] border border-neutral-200 '
      />
      <button
        onClick={handleAnalyzeSentiment}
        className='h-10 inline-flex w-fit px-4 items-center justify-center hover:bg-gray-100 border border-neutral-200 '
      >
        Analyze Sentiment
      </button>
      <p>Sentiment Score: {sentiment}</p>
    </div>
  );
};

export default SentimentAnalysis;
