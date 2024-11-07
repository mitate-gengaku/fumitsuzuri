import { atom, useAtom } from "jotai";
import { atomFamily } from "jotai/utils";
import { ChangeEvent } from "react";

export interface IColor {
  color: string | undefined;
  opacity: string | undefined;
}

const colorFamily = atomFamily((key: string) =>
  atom({
    key: key,
    color: "#D9D9D9",
    opacity: "1",
  }),
);

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
    setColor,
    onSetColor,
    onSetOpacity,
  };
};
