export function MakeFetch() {
  return (
    <section id="makefetch" className="max-w-screen-xl mx-auto my-20 px-5 sm:px-10 ">
      <div className="bg-blue rounded-2xl p-10 flex flex-col max-h-96 sm:flex-row ">
        <aside className="hidden sm:block mt-10">
          <div className="rounded-full bg-orangeYellow-dark h-[12rem] w-[12rem] lg:h-[16rem] lg:w-[16rem] relative">
            {/* Background image */}
            <img
              src="/images/dog.webp"
              alt="Dog"
              className="absolute w-full h-full object-cover rounded-full"
            />
          </div>
          {/* Foreground image to create overlap effect with shadow gradient */}
          <div className="relative bottom-[14.5rem] lg:bottom-[19.5rem]">
            <img
              src="/images/dog.webp"
              alt="Dog"
              className="absolute w-[15rem] lg:w-[20rem] h-auto object-cover z-10"
              style={{
                clipPath: 'inset(0 0 50% 0)',
                maskImage: 'linear-gradient(to bottom, black 70%, transparent)',
              }}
            />
          </div>
        </aside>

        <aside className="flex flex-col justify-between gap-5 xl:gap-10 px-5 md:px-10 xl:px0">
          <h5 className="text-4xl lg:text-5xl font-bold font-comfortaa text-orangeYellow-dark">
            Make Fetch! Happen
          </h5>

          <p className="text-lightWhite text-sm lg:text-description max-w-[40rem] leading-7">
            If you love pets and want exciting work, apply to be a Fetch! Pet Care Provider! We
            train every team member and provide ongoing support to help you get the most from your
            experience.
          </p>

          <button className="rounded-full text-sm xl:text-button font-bold bg-white font-openSans text-red p-3 xl:p-6 max-w-28 xl:max-w-[10rem] shadow-md leading-5">
            Join Now
          </button>
        </aside>
      </div>
    </section>
  );
}
