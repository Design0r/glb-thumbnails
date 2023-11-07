import { create } from "zustand";

interface StoreState {
  download: boolean;
  thumbnails: boolean;
  files: File[];
  urls: string[];
  setDownload: (bool: boolean) => void;
  setThumbnails: (bool: boolean) => void;
  addUrl: (url: string) => void;
  addFile: (file: File) => void;
  removeFile: (file: File) => void;
}

export const useFileStore = create<StoreState>((set) => ({
  download: false,
  thumbnails: false,
  files: [],
  urls: [],
  setDownload: (bool) => set(() => ({ download: bool })),
  setThumbnails: (bool) => set(() => ({ thumbnails: bool })),
  addUrl: (url) => set((state) => ({ urls: [...state.urls, url] })),
  addFile: (file) => set((state) => ({ files: [...state.files, file] })),
  removeFile: (file) =>
    set((state) => ({ files: state.files.filter((i) => i !== file) })),
}));
