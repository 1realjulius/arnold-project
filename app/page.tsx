import SentimentAnalysis from "@/components/ux/analyze-sentiment";

export default function Home() {
  return (
    <main>
      <div className='mx-auto max-w-6xl'>
        <section>
          <p>Enter Ur Message</p>
          <SentimentAnalysis />
        </section>
      </div>
    </main>
  );
}
