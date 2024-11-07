import { atom, useAtom } from "jotai";

const zoomAtom = atom<string | undefined>(undefined);

export const useZoom = () => {
  const [zoom, setZoom] = useAtom(zoomAtom);

  const handleZoom = (value: string) => {
    if (value === "auto") {
      setZoom(undefined);
      return;
    }
    setZoom(value);
  };

  return {
    zoom,
    handleZoom,
  };
};
