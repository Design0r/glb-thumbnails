import { useEffect, useRef, useState } from "react";
import { useFileStore } from "~/ts/state";

interface ModelViewerProps {
  name: string;
  path: string;
}

async function downloadPosterToBlob(name: string, modelViewer: any) {
  const blob = await modelViewer.toBlob({ idealAspect: true });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${name}.png`;
  a.click();
  URL.revokeObjectURL(url);
}

export const ModelViewer: React.FC<ModelViewerProps> = ({ name, path }) => {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const { download } = useFileStore();

  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
  }, []);

  useEffect(() => {
    const modelViewer = ref.current;

    if (modelViewer) {
      modelViewer.addEventListener("load", () => setLoaded(true));
    }

    return () => {
      if (modelViewer) {
        modelViewer.removeEventListener("load", () => setLoaded(true));
      }
    };
  }, []);

  useEffect(() => {
    if (download && loaded) {
      downloadPosterToBlob(name, ref.current);
    }
  }, [download]);

  return (
    <div className="h-64 w-full ">
      <model-viewer
        style={{ width: "100%", height: "100%" }}
        ref={ref}
        src={path}
        shadowIntensity="1"
        camera-controls
        auto-rotate
        cameraOrbit="-56.87deg 72.12deg 17.45m"
        fieldOfView="30deg"
      ></model-viewer>
    </div>
  );
};
