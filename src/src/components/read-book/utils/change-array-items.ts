import { ContentArray } from "../types/type";

export const changeArrayItems = (contents: ContentArray[][]) => {
  let length: number = 0;
  const copied = contents.map((innerContents) => {
    return innerContents.map((innerContent) => {
      const innerResult = innerContent.content
        .filter((v) => v.content.length)
        .map((content, i) => {
          const isTitle = content.type === "h1";
          const isNeedHeadingMark = (flag: boolean) =>
            flag ? (i === 0 ? "# " : "\n# ") : "";
          const isNeedNewLineMark = (flag: boolean) => (flag ? "\n" : "");

          const isNextTitle = content.type === "p";

          const text =
            isNeedHeadingMark(isTitle) +
            content.content +
            isNeedNewLineMark(isTitle || !isNextTitle);

          length += content.content.length;

          return text;
        })
        .join("");
      return innerResult;
    });
  });

  return {
    length: length,
    contents: copied,
  };
};
