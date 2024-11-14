import { useEffect } from 'react';
import { DynamicSection, MainSection, Wave } from '../app/components';
import HomeLayout from '../app/components/layout/HomeLayout';
import { SectionData } from '../app/interfaces';
import { useSectionStore } from '../store/store';

export function Home() {
  const { activeSection, setActiveSection } = useSectionStore();
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setActiveSection(hash || 'services');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [setActiveSection]);

  return (
    <HomeLayout>
      <div className="hidden xl:block">
        <Wave
          id="wave1"
          style={{
            transform: 'rotate(180deg)',
            transition: '0.3s',
            top: '-30px',
            position: 'absolute',
            width: '100%',
            height: 'auto',
            zIndex: -1,
          }}
          viewBox="0 15 1300 490"
          opacity={1}
        />
        <Wave
          id="wave2"
          style={{
            transform: 'rotate(180deg)',
            transition: '0.3s',
            top: '0',
            position: 'absolute',
            width: '100%',
            height: 'auto',
            zIndex: -2,
          }}
          viewBox="0 60 1450 490"
          opacity={0.85}
        />
        <Wave
          id="wave3"
          style={{
            transform: 'rotate(180deg)',
            transition: '0.3s',
            top: '0',
            position: 'absolute',
            width: '100%',
            height: 'auto',
            zIndex: -3,
          }}
          viewBox="200 80 1300 490"
          opacity={0.8}
        />
      </div>
      <MainSection />
      <DynamicSection />
    </HomeLayout>
  );
}