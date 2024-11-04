import { atom, useAtom } from "jotai";


const fileAtom = atom<File | undefined>(undefined)

export const useFile = () => {
  const [file, setFile] = useAtom(fileAtom);

  return {
    file,
    setFile,
  }
}