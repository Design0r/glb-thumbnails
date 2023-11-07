import { create } from "zustand";

interface StoreState {
  download: boolean;
  files: File[];
  urls: string[];
  setDownload: (bool: boolean) => void;
  addUrl: (url: string) => void;
  addFile: (file: File) => void;
  removeFile: (file: File) => void;
}

export const useFileStore = create<StoreState>((set) => ({
  download: false,
  files: [],
  urls: [],
  setDownload: (bool) => set(() => ({ download: bool })),
  addUrl: (url) => set((state) => ({ urls: [...state.urls, url] })),
  addFile: (file) => set((state) => ({ files: [...state.files, file] })),
  removeFile: (file) =>
    set((state) => ({ files: state.files.filter((i) => i !== file) })),
}));
