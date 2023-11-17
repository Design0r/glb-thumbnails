"use client";

import React from "react";
import JSZip from "jszip";
import { useFileStore } from "~/ts/state";

async function download() {
  const viewers = document.querySelectorAll("model-viewer");

  const zip = new JSZip();
  const promises = Array.from(viewers).map(async (v) => {
    try {
      const name = v.getAttribute("alt")?.replace(".glb", "");
      const blob = await v.toBlob({ idealAspect: true });
      zip.file(`${name}.png`, blob);
    } catch (error) {
      // console.log(error);
    }
  });

  await Promise.all(promises);
  const content = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(content);
  const a = document.createElement("a");
  a.href = url;
  a.download = "GLB-Thumbnails.zip";
  a.click();
  URL.revokeObjectURL(url);
}

export const DownloadButton: React.FC = () => {
  return (
    <button
      onClick={download}
      className="rounded bg-violet-900 px-4 py-2 text-center font-bold text-white hover:bg-violet-500 "
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
        onClick={() => setThumbnails(!thumbnails)}
        className="rounded bg-violet-900 px-4 py-2 text-center font-bold text-white hover:bg-violet-500 "
      >
        Load Models
      </button>
    </div>
  );
};
