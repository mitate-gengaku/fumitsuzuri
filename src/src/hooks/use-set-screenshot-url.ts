import { useState } from "react";

import { useScreenshot } from "./use-screen-shot";
import { useToggleBookMode } from "./use-toggle-book-mode";

export const useSetScreenshotUrl = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [frontPhoto, setFrontPhoto] = useState<string>("");
  const [backPhoto, setBackPhoto] = useState<string>("");
  const { mode, toggleMode } = useToggleBookMode();
  const { ref: frontRef, takeScreenshot: frontTakeScreenshot } =
    useScreenshot();
  const { ref: backRef, takeScreenshot: backTakeScreenshot } = useScreenshot();

  const takeScreenshot = async () => {
    if (mode) {
      setLoading(true);
      const frontUrl = await frontTakeScreenshot();
      const backUrl = await backTakeScreenshot();

      setFrontPhoto(frontUrl);
      setBackPhoto(backUrl);
      toggleMode();
      setLoading(false);
      return;
    }

    setFrontPhoto("");
    setBackPhoto("");
    toggleMode();
  };
  return {
    isLoading,
    frontRef,
    backRef,
    frontPhoto,
    backPhoto,
    takeScreenshot,
  };
};
