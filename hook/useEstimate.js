import { create } from "zustand";

export const useEstimate = create((set) => ({
  isOpened: false,
  onOpen: () => set({ isOpened: true }),
  onClose: () => set({ isOpened: false }),
}));
