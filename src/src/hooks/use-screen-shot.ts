import domToImage from "dom-to-image";
import { useCallback, useRef } from "react";

export const useScreenshot = () => {
  const ref = useRef<HTMLDivElement>(null);

  const takeScreenshot = useCallback(async (): Promise<string> => {
    if (ref.current) {
      const href = await domToImage.toPng(ref.current, {
        width: 456,
        height: 670,
        quality: 1,
      });
      return href;
    }
    throw new Error("No element to screenshot");
  }, []);

  return { ref, takeScreenshot };
};
