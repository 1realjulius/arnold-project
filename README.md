# This is a Sentiment Analysis Website

## Getting Started

First, run the development server:

```bash
# to get started clone and run
bun i

# then
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Sentement Code in Python

```py
from textblob import TextBlob

'''
from newspaper import Article
import nltk
nltk.download('punkt')


url = 'https://www.mirror.co.uk/news/uk-news/child-murderer-due-release-dad-32440689'
article = Article(url)

article.download()
article.parse()
article.nlp()

text = article.summary
print(text)
'''


with open('mytext.txt', 'r') as f:
    text = f.read()

blob = TextBlob(text)
sentiment = blob.sentiment.polarity # -1 to 1
print(sentiment)
```

code in ts

```tsx
// utils/sentimentAnalysis.ts
import * as sentiment from "sentiment";

export const analyzeSentiment = (text: string): number => {
  const result = sentiment(text);
  return result.score;
};

// page.tsx
import { useState } from "react";
import { analyzeSentiment } from "@/utils/sentimentAnalysis";

const SentimentAnalysis = () => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleAnalyzeSentiment = () => {
    const score = analyzeSentiment(text);
    setSentiment(score);
  };

  return (
    <div>
      <textarea value={text} onChange={handleTextChange} />
      <button onClick={handleAnalyzeSentiment}>Analyze Sentiment</button>
      <p>Sentiment Score: {sentiment}</p>
    </div>
  );
};

export default SentimentAnalysis;
```
