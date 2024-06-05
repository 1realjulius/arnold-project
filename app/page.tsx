import SentimentAnalysis from "@/components/ux/analyze-sentiment";

export default function Home() {
  return (
    <main>
      <div className='mx-auto max-w-6xl'>
        <section>
          <p>this is the home for ap</p>
          <SentimentAnalysis />
        </section>
      </div>
    </main>
  );
}
