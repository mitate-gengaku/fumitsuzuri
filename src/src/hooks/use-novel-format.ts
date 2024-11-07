import { useState } from "react";

export const useNovelFormat = () => {
  const [checked, setChecked] = useState<number>(0);

  const onSetCheck = (index: number) => {
    setChecked(index);
  };

  const isEqual = (index: number) => checked === index;

  return {
    checked,
    onSetCheck,
    isEqual,
  };
};
