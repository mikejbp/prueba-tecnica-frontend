import { CustomInput, CustomSquare } from '..';
import { useSectionStore } from '../../../store/store';
import { sectionData } from '../../helpers';

export function DynamicSection() {
  const { activeSection } = useSectionStore();

  const currentSection = sectionData.find((section) => section.id === activeSection);

  return (
    <section
      id={currentSection?.id ?? ''}
      className="mx-auto flex flex-col gap-y-20 lg:flex-row justify-around items-center xl:items-start px-5 sm:px-10 xl:px-0 max-w-screen-2xl bg-transparent mt-20 xl:mt-64 mb-20"
    >
      <aside className="flex flex-col gap-8 px-5 md:px-10 xl:px0">
        <h1 className="text-5xl font-bold text-red-light font-comfortaa">
          {currentSection?.title ?? ''}
        </h1>
        <p className="text-description text-gray max-w-[25rem] leading-7 font-openSans ">
          {currentSection?.description ?? ''}
        </p>
        <span className="flex items-center gap-6 leading-6 text-red-light text-description font-bold font-segoe">
          {currentSection?.additionalText ?? ''}
        </span>

        <div className="flex items-center gap-6 mt-10">
          <CustomInput placeholder="Zip Code" type="number" width="w-60" />
        </div>
      </aside>

      <aside className="grid grid-cols-2 items-stretch justify-center gap-y-8 gap-x-10">
        {currentSection?.services?.map((service, index) => (
          <CustomSquare key={index} image={service.image} alt={service.alt} />
        ))}
      </aside>
    </section>
  );
}
