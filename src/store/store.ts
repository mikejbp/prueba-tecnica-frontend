import { create } from 'zustand';

interface SectionState {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useSectionStore = create<SectionState>((set) => ({
  activeSection: 'services',
  setActiveSection: (section) => set({ activeSection: section }),
}));
