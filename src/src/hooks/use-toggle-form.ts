import { atom, useAtom } from "jotai";

const toggleFormAtom = atom(false);

export const useToggleForm = () => {
  const [show, setShow] = useAtom(toggleFormAtom);

  const toggleShow = () => setShow((show) => !show);

  return {
    show,
    toggleShow,
  };
};