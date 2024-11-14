import { CurvedDashedLine, CustomInput, CustomSquare } from '../custom';

export function HowItWorks() {
  return (
    <section
      id="howitworks"
      className="mb-20 xl:my-20 mx-auto px-5 sm:px-10 xl:px-40 max-w-screen-2xl flex flex-col gap-y-20 xl:gap-20 lg:flex-row items-center xl:items-start justify-around relative"
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
        <CurvedDashedLine className="hidden sm:block absolute bottom-28 -left-28 w-[35rem] h-[25rem] transform rotate-90" />
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
    </section>
  );
}
