import { ContentArray } from "../types/type";

export const insertBlankLine = (contentsArray: ContentArray[]) => {
  const inserted = contentsArray.map((contents, index) => {
    if (index === 0 || index === contentsArray.length - 1) return contents;
    const hasNeedBlankFlag = contents.content.some(
      (value) => value.isNeedBlankLine,
    );

    if (!hasNeedBlankFlag) {
      return {
        content: [
          ...contents.content,
          ...(new Array(18 - contents.content.length).fill({
            isNeedIndent: false,
            isNeedLineBreak: false,
            isNeedBlankLine: false,
            type: "space",
            content: "",
            contentClass:
              index % 2 === 0 ? `before:content-['']` : `after:content-['']`,
          }) as ContentArray[]),
        ] as ContentArray[],
      };
    }

    const copiedArray = contents.content
      .map((copiedItem, idx) => {
        if (copiedItem.isNeedBlankLine) {
          const isLast = idx === contents.content.length - 1;
          if (isLast) {
            return [
              {
                ...copiedItem,
                isNeedBlankLine: !isLast,
                contentClass:
                  index % 2 === 0
                    ? `before:content-['${copiedItem.content}']`
                    : `after:content-['${copiedItem.content}']`,
              },
            ];
          }
          return [
            {
              ...copiedItem,
              isNeedBlankLine: !isLast,
              contentClass:
                index % 2 === 0
                  ? `before:content-['${copiedItem.content}']`
                  : `after:content-['${copiedItem.content}']`,
            },
            {
              isNeedIndent: false,
              isNeedLineBreak: false,
              isNeedBlankLine: false,
              type: "space",
              content: "",
              contentClass:
                index % 2 === 0 ? `before:content-['']` : `after:content-['']`,
            },
          ];
        } else {
          return {
            ...copiedItem,
            contentClass:
              index % 2 === 0
                ? `before:content-['${copiedItem.content}']`
                : `after:content-['${copiedItem.content}']`,
          };
        }
      })
      .flat();

    return {
      content:
        copiedArray.length === 18
          ? copiedArray
          : [
              ...copiedArray,
              ...(new Array(18 - copiedArray.length).fill({
                isNeedIndent: false,
                isNeedLineBreak: false,
                isNeedBlankLine: false,
                type: "space",
                content: "",
                contentClass:
                  index % 2 === 0
                    ? `before:content-['']`
                    : `after:content-['']`,
              }) as ContentArray[]),
            ],
    };
  }) as ContentArray[];

  return inserted;
};
