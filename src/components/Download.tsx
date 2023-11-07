"use client";

import React from "react";
import { useFileStore } from "~/ts/state";

export const DownloadButton: React.FC = () => {
  return (
    <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
      Download
    </button>
  );
};

export const CreateThumbnailButton: React.FC = () => {
  const { setDownload } = useFileStore();

  return (
    <button
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      onClick={() => setDownload(true)}
    >
      Download Thumbnails
    </button>
  );
};
