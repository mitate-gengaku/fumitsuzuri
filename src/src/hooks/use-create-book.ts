import { atom, useAtom } from "jotai";
import { useForm } from "react-hook-form";

import { getYamlHeader } from "@/utils/get-yaml-header";

interface IValue {
  id: string;
  title: string;
  author: string;
  summary: string;
  price: number;
  edition: number;
  content: string;
}

const bookAtom = atom<IValue>({
  id: "",
  title: "",
  author: "",
  summary: "",
  price: 0,
  edition: 0,
  content: "",
});

export const useCreateBook = () => {
  const [book, setBook] = useAtom(bookAtom);
  const form = useForm<IValue>({
    defaultValues: {
      id: "",
      title: "",
      author: "",
      summary: "",
      price: 0,
      edition: 0,
    },
    mode: "onChange",
  });

  const setBookContent = async (file: File) => {
    const headers = await getYamlHeader(file);
    setBook({ ...book, ...headers });
  };

  return {
    book,
    form,
    setBook,
    setBookContent,
  };
};
