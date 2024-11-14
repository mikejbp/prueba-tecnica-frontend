interface TestimonialCardProps {
  gradientStart: string;
  gradientEnd: string;
  colors: {
    light: string;
    lighter: string;
    lightest: string;
  };
}

export function TestimonialCard({ gradientStart, gradientEnd, colors }: TestimonialCardProps) {
  return (
    <aside
      className={`relative flex flex-col items-center gap-5 p-8 max-w-xl md:max-w-screen-sm mix-blend-multiply shadow-xl shadow-blue-light rounded-2xl`}
      style={{
        background: `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})`,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 430"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full rounded-b-2xl"
      >
        <defs>
          <linearGradient id="gradient" x1="99%" y1="38%" x2="1%" y2="62%">
            <stop offset="5%" stopColor={gradientStart}></stop>
            <stop offset="95%" stopColor={gradientEnd}></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,600 L 0,112 C 178.2666666666667,104.93333333333334 356.5333333333334,97.86666666666666 529,89 C 701.4666666666666,80.13333333333334 868.1333333333332,69.46666666666667 1019,73 C 1169.8666666666668,76.53333333333333 1304.9333333333334,94.26666666666667 1440,112 L 1440,600 L 0,600 Z"
          stroke="none"
          strokeWidth="0"
          fill={`var(--${colors.light})`}
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <path
          d="M 0,600 L 0,262 C 184.13333333333333,248.26666666666665 368.26666666666665,234.53333333333333 535,245 C 701.7333333333333,255.46666666666667 851.0666666666668,290.1333333333333 999,297 C 1146.9333333333332,303.8666666666667 1293.4666666666667,282.93333333333334 1440,262 L 1440,600 L 0,600 Z"
          stroke="none"
          strokeWidth="0"
          fill={`var(--${colors.lighter})`}
          className="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
        <path
          d="M 0,600 L 0,412 C 193.46666666666664,429.06666666666666 386.9333333333333,446.1333333333333 533,443 C 679.0666666666667,439.8666666666667 777.7333333333333,416.53333333333336 921,408 C 1064.2666666666667,399.46666666666664 1252.1333333333332,405.73333333333335 1440,412 L 1440,600 L 0,600 Z"
          stroke="none"
          strokeWidth="0"
          fill={`var(--${colors.lightest})`}
          className="transition-all duration-300 ease-in-out delay-150 path-2"
        ></path>
      </svg>
      <div className="relative z-10">
        <img
          src="https://acortar.link/FcslMZ"
          className="rounded-full h-20 w-20 object-cover"
          alt="Kenned Dsouza avatar"
        />
      </div>
      <h4 className="relative z-10 font-comfortaa text-lighterWhite text-menu xl:text-[32px]">
        Kenned Dsouza
      </h4>
      <p className="relative z-10 text-lg xl:text-description font-openSans text-lighterWhite text-center leading-7">
        "I like that I got to meet the dog Walker who is walking my dog daily and consult with her.
        I also appreciate the daily communication I get about the dog and how my dog is doing"
      </p>
    </aside>
  );
}
