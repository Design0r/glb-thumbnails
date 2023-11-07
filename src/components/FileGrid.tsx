"use client";

import React from "react";
import { useFileStore } from "~/ts/state";
import { FileBox } from "./FileBox";
import { CreateThumbnailButton, DownloadButton } from "./Download";

const FileGrid: React.FC = () => {
  const { files, thumbnails } = useFileStore();

  return (
    <>
      <div className="select-none shadow-lg shadow-black">
        {files.length > 0 && !thumbnails && <CreateThumbnailButton />}
        {files.length > 0 && thumbnails && <DownloadButton />}
      </div>
      <div className="container mx-auto p-4">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {files.map((item, index) => (
            <FileBox name={item.name} key={index} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FileGrid;
