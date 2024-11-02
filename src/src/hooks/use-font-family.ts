import { atom, useAtom } from "jotai";

const fontFamilyAtom = atom<string>("");

export const useFontFamily = () => {
  const [fontFamily, setFontFamily] = useAtom<string>(fontFamilyAtom);

  const onSetFamily = (font: string) => {
    setFontFamily(font);
  };

  return {
    fontFamily,
    onSetFamily,
  };
};
