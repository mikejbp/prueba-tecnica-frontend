import {
  DynamicSection,
  HowItWorks,
  MainSection,
  MakeFetch,
  RedWaves,
  Testimonials,
} from '../app/components';
import HomeLayout from '../app/components/layout/HomeLayout';

export function Home() {
  return (
    <HomeLayout>
      <RedWaves />
      <MainSection />
      <DynamicSection />
      <Testimonials />
      <HowItWorks />
      <MakeFetch />
    </HomeLayout>
  );
}
