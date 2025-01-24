import { create } from 'zustand';

const useNavbarStore = create((set) => ({
  isNavbarOpen: false,
  drawerWidth: 200,
  toggleNavbar: () => set((state) => ({ isNavbarOpen: !state.isNavbarOpen })),
  setDrawerWidth: (width) => set({ drawerWidth: width }),
}));

export default useNavbarStore;
