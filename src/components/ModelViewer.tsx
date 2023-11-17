import { useEffect } from "react";

interface ModelViewerProps {
  name: string;
  path: string;
}

export const ModelViewer: React.FC<ModelViewerProps> = ({ name, path }) => {
  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
  }, []);

  return (
    <div className="h-64 w-full ">
      <model-viewer
        style={{ width: "100%", height: "100%" }}
        src={path}
        alt={name}
        shadowIntensity="1"
      ></model-viewer>
    </div>
  );
};
