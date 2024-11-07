import { atom, useAtom } from "jotai";

const toggleBookModeAtom = atom(true);

export const useToggleBookMode = () => {
  const [mode, setMode] = useAtom(toggleBookModeAtom);

  const toggleMode = () => setMode((mode) => !mode);

  return {
    mode,
    toggleMode,
  };
};
