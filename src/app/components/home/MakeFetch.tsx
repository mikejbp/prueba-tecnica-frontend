export function MakeFetch() {
  return (
    <>
      <svg
        className="absolute -left-48 -z-10 hidden xl:block"
        width="400"
        height="300"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="100" fill="#FFE530" />
        <circle cx="100" cy="100" r="82" fill="#FFE12A" />
        <circle cx="120" cy="120" r="50" fill="#FFDC26" />
      </svg>
      <section id="makefetch" className="max-w-screen-xl mx-auto my-20 px-5 sm:px-10">
        <div
          className="bg-blue rounded-2xl p-10 flex flex-col max-h-96 sm:flex-row shadow-md"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 100"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:rgb(68, 135, 255);;stop-opacity:1" /><stop offset="40%" style="stop-color:rgb(62, 127, 249);stop-opacity:1" /></linearGradient></defs><circle cx="40" cy="50" r="60" fill="url(%23grad1)" /><circle cx="100" cy="50" r="60" fill="url(%23grad1)" /><circle cx="140" cy="50" r="60" fill="url(%23grad1)" /><circle cx="180" cy="50" r="60" fill="url(%23grad1)" /><circle cx="220" cy="50" r="60" fill="url(%23grad1)" /><circle cx="260" cy="50" r="60" fill="url(%23grad1)" /><circle cx="300" cy="50" r="60" fill="url(%23grad1)" /></svg>')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat-x',
          }}
        >
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
    </>
  );
}
