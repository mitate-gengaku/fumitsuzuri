import { useEffect } from "react";

import { useBook } from "../hooks/use-book";

import { Book } from "./book";

import { useColor } from "@/hooks/use-color";
import { useZoom } from "@/hooks/use-zoom";

interface Props {
  frontScreenshotUrl: string;
  backScreenshotUrl: string;
  content: string;
}

export const ReadBook = ({ content, ...props }: Props) => {
  const books = useBook(content);
  const { color, setColor } = useColor("font");
  const { zoom } = useZoom();

  useEffect(() => {
    setColor({ ...color, color: "#1f2937" });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Book {...books} {...props} {...color} zoom={zoom} ref={books.pageRef} />
  );
};
