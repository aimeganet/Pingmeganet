import { create } from 'zustand';

type AppState = {
  locale: 'ar' | 'en';
  sidebarOpen: boolean;
  setLocale: (locale: 'ar' | 'en') => void;
  toggleSidebar: () => void;
};

export const useAppStore = create<AppState>((set) => ({
  locale: 'ar',
  sidebarOpen: true,
  setLocale: (locale) => set({ locale }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen }))
}));
