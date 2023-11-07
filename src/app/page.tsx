"use client";

import { CreateThumbnailButton } from "~/components/Download";
import FileDropField from "~/components/FileDropField";
import FileGrid from "~/components/FileGrid";
import { useFileStore } from "~/ts/state";

export default function HomePage() {
  const { files, urls } = useFileStore();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">GLB</span> Thumbnails
        </h1>
        <FileDropField />
        <FileGrid />
        {files.length > 0 && <CreateThumbnailButton />}
      </div>
    </main>
  );
}
