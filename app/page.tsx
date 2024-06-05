import SentimentAnalysis from "@/components/ux/analyze-sentiment";

export default function Home() {
  return (
    <main className=''>
      <div className='mx-auto max-w-xl h-screen items-center justify-end flex flex-col w-full p-4'>
        <div className='border h-full justify-between flex flex-col p-2 rounded-3xl bg-white w-full'>
          <section className='h-fit w-full'>
            <div className='flex flex-col items-center text-center'>
              <p className=''>
                Sentement <br /> Analyser
              </p>
              <p className='text-neutral-500'>Enter Ur Message</p>
            </div>
          </section>
          <section className='h-fit w-full'>
            <SentimentAnalysis />
          </section>
        </div>
      </div>
    </main>
  );
}
