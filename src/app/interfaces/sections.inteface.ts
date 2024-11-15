export interface SectionData {
  id: Section;
  title: string;
  description: string;
  additionalText: string;
  services: Service[];
}

export type Section = 'location' | 'blog' | 'about' | 'services' | 'contact';

interface Service {
  image: string;
  alt: string;
}
