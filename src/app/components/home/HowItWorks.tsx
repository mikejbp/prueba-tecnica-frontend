import { CurvedDashedLine, CustomInput, CustomSquare } from '../custom';

export function HowItWorks() {
  return (
    <section
      id="howitworks"
      className="mb-20 xl:my-20 mx-auto px-5 sm:px-10 xl:px-40 max-w-screen-2xl flex flex-col gap-y-20 lg:gap-20 lg:flex-row items-center xl:items-start justify-around relative"
    >
      <aside className="flex flex-col gap-5 relative">
        <div className="hidden sm:flex gap-40">
          <div className="grid grid-cols-1 items-center justify-center gap-y-40 gap-x-10">
            <CustomSquare image="/images/Calendar.svg" alt="Reserve" />
            <CustomSquare image="/images/dog-1.svg" alt="Relax" />
          </div>
          <div className="grid grid-cols-1 items-center justify-center gap-y-40 gap-x-10">
            <CustomSquare image="/images/happy.svg" alt="Match" />
          </div>
        </div>
        <div className="grid sm:hidden grid-cols-2 items-center justify-center gap-y-10 gap-x-10">
          <CustomSquare image="/images/Calendar.svg" alt="Reserve" />
          <CustomSquare image="/images/dog-1.svg" alt="Relax" />
          <CustomSquare image="/images/happy.svg" alt="Match" />
        </div>
        <CurvedDashedLine className="hidden sm:block absolute bottom-8 -left-20 w-[35rem] h-[25rem] transform rotate-90" />
      </aside>

      <aside className="max-w-screen-sm flex flex-col gap-5">
        <h4 className="font-comfortaa font-bold text-5xl text-red-light">How it works</h4>
        <p className="font-openSans text-description text-gray leading-6 max-w-lg">
          Because finding a good pet sitter shouldn't be a hassle. With Fetch! It's as easy as…
        </p>

        <span className="flex items-center gap-6 leading-6 text-red-light text-description font-bold font-segoe">
          Enter Your Location and Fetch Our Services
        </span>

        <div className="flex items-center gap-6 mt-10">
          <CustomInput placeholder="Zip Code" type="number" width="w-60" />
        </div>
      </aside>
      <svg
        className="absolute -top-48 left-1/2 -z-10 hidden xl:block"
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
    </section>
  );
}
