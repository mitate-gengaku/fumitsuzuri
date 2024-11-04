import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const toggleFormAtom = atomWithStorage("form", false);

export const useToggleForm = () => {
  const [show, setShow] = useAtom(toggleFormAtom);

  const toggleShow = () => setShow((show) => !show);

  return {
    show,
    toggleShow,
  };
};