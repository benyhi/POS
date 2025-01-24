import { create } from 'zustand';

const useNavbarStore = create((set) => ({
  isNavbarOpen: false,
  toggleNavbar: () => set((state) => ({ isNavbarOpen: !state.isNavbarOpen })),
}));

export default useNavbarStore;
