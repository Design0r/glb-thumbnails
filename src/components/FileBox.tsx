import React from "react";
import { useFileStore } from "~/ts/state";
import { ModelViewer } from "./ModelViewer";

interface FileBoxProps {
  name: string;
  index: number;
}

const ThumbnailPlaceholder: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-file-3d"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
      <path d="M12 13.5l4 -1.5"></path>
      <path d="M8 11.846l4 1.654v4.5l4 -1.846v-4.308l-4 -1.846z"></path>
      <path d="M8 12v4.2l4 1.8"></path>
    </svg>
  );
};

export const FileBox: React.FC<FileBoxProps> = ({ name, index }) => {
  const { urls } = useFileStore();

  const modelPath = urls[index] || "";

  return (
    <div className="h-auto w-auto rounded-lg border border-slate-100 bg-slate-700 bg-opacity-40 shadow-xl">
      <ModelViewer name={name} path={modelPath} />
      <div className="text-center">{name}</div>
    </div>
  );
};
