"use client";
import React, { DragEvent, useCallback, useState } from "react";
import { useFileStore } from "~/ts/state";

const FileDropField: React.FC = () => {
  const [dragOver, setDragOver] = useState<boolean>(false);
  const { addFile, addUrl } = useFileStore();

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  }, []);

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!dragOver) {
        setDragOver(true);
      }
    },
    [dragOver],
  );

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);

    if (event.dataTransfer.items) {
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        if (event.dataTransfer.items[i]?.kind !== "file") {
          continue;
        }

        const file = event.dataTransfer.items[i]?.getAsFile();
        if (!file) {
          continue;
        }

        if (!file.name.includes(".glb")) {
          continue;
        }

        const url = URL.createObjectURL(file);
        addFile(file);
        addUrl(url);
      }
    } else {
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        const file = event.dataTransfer.files[i];
        if (!file) {
          continue;
        }

        if (!file.name.includes(".glb")) {
          continue;
        }

        const url = URL.createObjectURL(file);
        addFile(file);
        addUrl(url);
      }
    }
  };

  return (
    <div
      className="h-full  w-full cursor-pointer select-none rounded-lg border-2 border-dashed
        border-slate-100 bg-opacity-50 p-6 text-center shadow-lg shadow-slate-900"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {dragOver ? (
        <p className="justify-center ">Release to drop the file</p>
      ) : (
        <p className="justify-center ">Drag and drop a GLB file here</p>
      )}
    </div>
  );
};

export default FileDropField;
