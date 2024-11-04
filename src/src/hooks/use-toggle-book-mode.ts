import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const toggleBookModeAtom = atomWithStorage("book-mode", false);

export const useToggleBookMode = () => {
  const [mode, setMode] = useAtom(toggleBookModeAtom);

  const toggleMode = () => setMode((mode) => !mode);

  return {
    mode,
    toggleMode,
  };
};
