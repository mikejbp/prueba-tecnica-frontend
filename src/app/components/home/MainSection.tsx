export function MainSection() {
  return (
    <section className="bg-red-light xl:bg-transparent relative px-4 sm:px-10 md:px-20 py-40 xl:py-0 xl:mt-[5.5rem] xl:mb-10 2xl:mt-40 mx-auto max-w-screen-2xl bg-light overflow-visible">
      <div className="flex flex-col lg:flex-row w-full justify-between gap-y-20 md:gap-y-40 items-center xl:items-start">
        <aside className="flex flex-col gap-4 px-5 md:px-10 xl:px0">
          <h1 className="text-5xl sm:text-6xl xl:text-title font-bold text-white">
            We Get Pet Care!
          </h1>
          <p className="text-description text-white mt-5 max-w-[40rem] leading-7">
            For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy
            and happy!
          </p>
          <div className="flex items-center gap-6 mt-5">
            <button className="rounded-full text-button font-bold bg-blue text-lighterWhite p-6 max-w-xs leading-5">
              Schedule Service
            </button>
            <p className="text-lighterWhite text-button">Or Call 866.338.2463</p>
          </div>
        </aside>

        <aside className="mt-10 md:mt-0">
          <div className="rounded-full bg-orangeYellow-dark h-[20rem] w-[20rem] sm:h-[25rem] sm:w-[25rem] lg:w-[21rem] lg:h-[21rem] 2xl:h-[30rem] 2xl:w-[30rem] relative">
            {/* Background image */}
            <img
              src="/images/golden-retriever.webp"
              alt="Dog"
              className="absolute w-full h-full object-cover rounded-full"
            />
          </div>
          {/* Foreground image to create overlap effect with shadow gradient */}
          <div className="relative bottom-[27rem] sm:bottom-[30rem] md:bottom-[34rem] lg:bottom-[28rem] 2xl:bottom-[40rem]">
            <img
              src="/images/golden-retriever.webp"
              alt="Dog"
              className="absolute w-[20rem] sm:w-[25rem] lg:w-[28rem] 2xl:w-[35rem] h-auto object-cover z-10"
              style={{
                clipPath: 'inset(0 0 40% 0)',
                maskImage: 'linear-gradient(to bottom, black 70%, transparent)',
              }}
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
