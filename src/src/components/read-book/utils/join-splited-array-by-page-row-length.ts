import { ContentArray, ContentData } from "../types/type";

import { insertBlankLine } from "./insert-blank-line";

export const joinSplitedArrayByPageRowLength = (data: ContentData[]) => {
  let count = 0;
  let currentTarget: ContentData[] = [];

  const contentArray = data
    .map((content, index) => {
      if (content.type === "h1" && content.isNeedBlankLine) {
        count++;
      }

      if (
        index !== data.length - 1 &&
        content.type === "p" &&
        data[index + 1].type === "h1"
      ) {
        count++;
      }

      if (index === 0) {
        currentTarget.push(content);
        count++;

        return {
          content: [
            {
              isNeedIndent: false,
              isNeedLineBreak: false,
              isNeedBlankLine: false,
              type: "p",
              content: "",
              isContentPage: true,
            },
          ],
        };
      }

      if (count >= 17) {
        currentTarget.push(content);
        const tmp = { content: [...currentTarget] };
        count = 0;
        currentTarget = [];

        return tmp;
      }

      if (index === data.length - 1) {
        currentTarget.push(content);
        const tmp = { content: [...currentTarget] };

        return tmp;
      }

      currentTarget.push(content);
      count++;
    })
    .filter((value) => value) as ContentArray[];

  if (contentArray.length % 2 === 0) {
    contentArray.push({
      content: [
        {
          isNeedIndent: false,
          isNeedLineBreak: false,
          isNeedBlankLine: false,
          type: "p",
          content: "",
        },
      ],
    });
    contentArray.push({
      content: [
        {
          isNeedIndent: false,
          isNeedLineBreak: false,
          isNeedBlankLine: false,
          type: "p",
          content: "",
        },
      ],
    });

    return insertBlankLine(contentArray);
  }

  contentArray.push({
    content: [
      {
        isNeedIndent: false,
        isNeedLineBreak: false,
        isNeedBlankLine: false,
        type: "p",
        content: "",
      },
    ],
  });

  return insertBlankLine(contentArray);
};
