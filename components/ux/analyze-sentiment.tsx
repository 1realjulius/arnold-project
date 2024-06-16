"use client";
import { analyzeSentiment } from "@/lib/sentement/sentiment-analysis";
import { useState } from "react";
import { Tracker } from "../ui/tracker";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp } from "lucide-react";

const formSchema = z.object({
  message: z
    .string()
    .min(1, {
      message: "Message must is required.",
    })
    .max(6000, {
      message: "Message must not be longer than 30 characters.",
    }),
});

const generateTrackerData = (sentiment: number) => {
  const maxItems = 20;
  const data = [];

  if (sentiment === 0) {
    // If sentiment is 0, all colors will be yellow
    for (let i = 0; i < maxItems; i++) {
      data.push({ color: "bg-yellow-500", tooltip: "Neutral" });
    }
  } else {
    const percentage = Math.abs(sentiment) / 20; // Assuming sentiment range is from -20 to 20
    const positiveCount = Math.round(percentage * maxItems);
    const negativeCount = maxItems - positiveCount;

    for (let i = 0; i < positiveCount; i++) {
      data.push({
        color: sentiment > 0 ? "bg-emerald-600" : "bg-red-600",
        tooltip: sentiment > 0 ? "Positive" : "Negative",
      });
    }

    for (let i = 0; i < negativeCount; i++) {
      data.push({ color: "bg-gray-400", tooltip: "Neutral" });
    }
  }

  return data;
};

const getSentimentStatement = (sentiment: number) => {
  if (sentiment === 0) {
    return "Your message seems neutral.";
  } else if (sentiment > 0 && sentiment <= 2) {
    return "Your message has a slightly positive sentiment.";
  } else if (sentiment > 2 && sentiment <= 4) {
    return "Your message has a positive sentiment.";
  } else if (sentiment > 4) {
    return "Your message has an extremely positive sentiment!";
  } else if (sentiment < 0 && sentiment >= -2) {
    return "Your message has a slightly negative sentiment.";
  } else if (sentiment < -2 && sentiment >= -4) {
    return "Your message has a negative sentiment.";
  } else {
    return "Your message has an extremely negative sentiment!";
  }
};

const SentimentAnalysis = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [sentiment, setSentiment] = useState(0);
  const [sentimentMessage, setSentimentMessage] = useState("");
  const [trackerData, setTrackerData] = useState<
    { color: string; tooltip: string }[]
  >([]);

  const handleAnalyzeSentiment = (data: z.infer<typeof formSchema>) => {
    const score = analyzeSentiment(data.message);
    setSentiment(score);
    setTrackerData(generateTrackerData(score));
    setSentimentMessage(getSentimentStatement(score));
  };

  return (
    <div className='flex flex-col h-full justify-end items-center w-full space-y-6'>
      {/* response */}
      <div className='flex flex-col w-full'>
        <span>{sentimentMessage}</span>
        <Tracker data={trackerData} />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleAnalyzeSentiment)}
          className='flex items-center w-full space-x-2 bg-neutral-100 p-1 rounded-2xl border border-neutral-200'
        >
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem className='w-full'>
                {/* <FormDescription>
                  You can <span>@mention</span> other users and organizations.
                </FormDescription> */}
                <FormControl>
                  <Textarea
                    placeholder='Enter Your Message'
                    className='w-full rounded-xl'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='w-fit px-2'>
            <Button size={"icon"} type='submit' className=' rounded-full'>
              <ArrowUp className='size-4' />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SentimentAnalysis;
