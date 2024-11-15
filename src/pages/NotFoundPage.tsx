import { Link } from 'wouter';
import './NotFoundPage.css'; // Import the CSS file for animations

export function NotFoundPage() {
  return (
    <section className="w-screen min-h-screen flex items-center">
      <svg
        className="absolute -top-48 left-1/2 -z-10 hidden xl:block drop-shadow-md"
        width="1300"
        height="800"
        viewBox="0 0 384 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="192" cy="192" r="192" fill="#FFE530" />
        <circle cx="192" cy="162" r="158" fill="#FFE12A" />
        <circle cx="192" cy="102" r="100" fill="#FFDC26" />
      </svg>
      <div
        className="relative flex flex-col items-center justify-center gap-5 my-10 mx-auto w-full max-w-3xl h-fit bg-blue rounded-2xl p-10 shadow-[5px_6px_8px] shadow-blue-lightest text-center"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 100"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:rgb(68, 135, 255);;stop-opacity:1" /><stop offset="40%" style="stop-color:rgb(62, 127, 249);stop-opacity:1" /></linearGradient></defs><circle cx="60" cy="50" r="60" fill="url(%23grad1)" /><circle cx="90" cy="50" r="60" fill="url(%23grad1)" /><circle cx="120" cy="50" r="60" fill="url(%23grad1)" /><circle cx="150" cy="50" r="60" fill="url(%23grad1)" /><circle cx="180" cy="50" r="60" fill="url(%23grad1)" /><circle cx="210" cy="50" r="60" fill="url(%23grad1)" /></svg>')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat-x',
        }}
      >
        <h1 className="text-3xl md:text-5xl text-white z-10 font-openSans">Oops! Page not found</h1>
        <section className="error-container flex z-10">
          <span className="text-title animate-bounce-sequential delay-0 font-museoSans">4</span>
          <span className="text-title animate-bounce-sequential delay-1 font-museoSans">0</span>
          <span className="text-title animate-bounce-sequential delay-2 font-museoSans">4</span>
        </section>
        <aside className="hidden sm:block mt-10">
          <div className="rounded-full bg-orangeYellow-dark h-[12rem] w-[12rem] lg:h-[16rem] lg:w-[16rem] relative shadow-md">
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
        <div className="text-center z-10 flex gap-3">
          <h2 className="text-2xl text-white font-comfortaa">Are you lost?</h2>
          <Link to={'/'} className="text-2xl text-white animated-underline font-comfortaa">
            Go back to Home
          </Link>
        </div>
      </div>
      <svg
        className="absolute -left-48 top-1/2 -z-10 drop-shadow-md"
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
    </section>
  );
}
