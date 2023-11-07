"use client";

import React from "react";
import { useFileStore } from "~/ts/state";

export const DownloadButton: React.FC = () => {
  const { download, setDownload } = useFileStore();
  return (
    <button
      onClick={() => {
        if (download) {
          setDownload(false);
          setDownload(true);
          return;
        }
        setDownload(true);
      }}
      className="rounded bg-slate-600 px-4 py-2 text-center font-bold text-white hover:bg-violet-900"
    >
      Download Thumbnails
    </button>
  );
};

export const CreateThumbnailButton: React.FC = () => {
  const { thumbnails, setThumbnails } = useFileStore();

  return (
    <div className="justify-center">
      <button
        onClick={() => {
          if (thumbnails) {
            setThumbnails(false);
            setThumbnails(true);
            return;
          }
          setThumbnails(true);
        }}
        className="rounded bg-slate-600 px-4 py-2 text-center font-bold text-white hover:bg-violet-900"
      >
        Create Thumbnails
      </button>
    </div>
  );
};
