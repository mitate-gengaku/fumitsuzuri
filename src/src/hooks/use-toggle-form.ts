import { atom, useAtom } from "jotai";

const toggleFormAtom = atom(true);

export const useToggleForm = () => {
  const [show, setShow] = useAtom(toggleFormAtom);

  const toggleShow = () => setShow((show) => !show);

  return {
    show,
    toggleShow,
  };
};
