import { useMemo, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import { createContents } from "../utils/crate-contents";

const generateKey = () => {
  return uuidv4();
};

export const useBook = (content: string) => {
  const flick = useRef<boolean>(false);
  const pageCount = useRef<number>(0);
  const pageRef = useRef<HTMLDivElement>(null);

  const refs = useRef<{
    [key in number]: HTMLDivElement;
  }>({});

  const contents = createContents(content);

  const contentsData = useMemo(() => {
    return contents.map((content, index: number) => ({
      id: generateKey(),
      content: content,
      refCallbackFunction: (node: HTMLDivElement | null) => {
        if (node !== null && refs.current[index] === undefined) {
          refs.current[index] = node;
          refs.current[index].id = `page`;

          refs.current[index].style.zIndex = (
            contents.length - index
          ).toString();

          refs.current[index].onclick = () => {
            pageCount.current = index;
          };
        } else {
          delete refs.current[index];
        }
      },
    }));
  }, [contents]);

  const onFlickPage = (index: number) => {
    const target = refs.current[index];

    if (flick.current) return;

    flick.current = true;

    if (target.classList.contains("flip-active")) {
      if (index > 9) {
        target.classList.add("flip-deactive");
        target.classList.remove("flip-active");
        setTimeout(() => {
          target.style.zIndex = (contents.length - index).toString();
        }, 600);
      } else {
        target.style.zIndex = (contents.length - index).toString();
        setTimeout(() => {
          target.classList.add("flip-deactive");
          target.classList.remove("flip-active");
        }, 500);
      }

      flick.current = false;

      pageCount.current = index;
    } else {
      if (index > 9) {
        target.style.zIndex = (index + 1).toString();
        setTimeout(() => {
          target.classList.add("flip-active");
          target.classList.remove("flip-deactive");
        }, 400);
      } else {
        setTimeout(() => {
          target.style.zIndex = (index + 1).toString();
        }, 750);
        target.classList.add("flip-active");
        target.classList.remove("flip-deactive");
      }

      flick.current = false;

      pageCount.current = index + 1;
    }
  };

  return {
    pageCount,
    contents,
    pageRef,
    contentsData,
    createContents,
    onFlickPage,
  };
};
