import { atom, useAtom } from "jotai";
import { ChangeEvent } from "react";

interface IColor {
  color: string | undefined;
  opacity: string | undefined;
}

const colorAtom = atom<IColor>({
  color: "#000",
  opacity: "1",
});

export const useColor = () => {
  const [color, setColor] = useAtom(colorAtom);
  const onSetColor = (e: ChangeEvent<HTMLInputElement>) => {
    setColor({ ...color, color: e.target.value });
  };
  const onSetOpacity = (value: number[]) =>
    setColor({ ...color, opacity: (value[0] / 100).toString() });

  return {
    color,
    onSetColor,
    onSetOpacity,
  };
};
