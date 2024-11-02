import { atom, useAtom } from "jotai";
import { ChangeEvent } from "react";
import { atomFamily } from 'jotai/utils';

interface IColor {
  color: string | undefined;
  opacity: string | undefined;
}

const colorAtom = atom<IColor>({
  color: "#000",
  opacity: "1",
});

const colorFamily = atomFamily((key: string) => atom({
  color: "#000",
  opacity: "1",
}))

export const useColor = (key: string) => {
  const colorInstance = colorFamily(key);
  const [color, setColor] = useAtom(colorInstance);
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
