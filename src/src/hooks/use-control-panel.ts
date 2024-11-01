import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";

const controlAtom = atom(false);

export const useControlPanel = () => {
  const [open, setOpen] = useAtom(controlAtom);
  const [showCard, setShowCard] = useState<boolean>(false);

  const toggleOpen = () => setOpen((open) => !open);

  useEffect(() => {
    if (!open) {
      setShowCard(false);
      return;
    };
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 150);

    return () => clearInterval(timer)
  }, [open]);

  return {
    open,
    showCard,
    toggleOpen
  }
}