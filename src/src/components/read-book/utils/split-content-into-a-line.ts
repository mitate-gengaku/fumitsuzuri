import { ContentData } from "../types/type";

import { calculateLineLengthFromString } from "./calculate-line-length-from-string.ts";

export const splitContentIntoALine = (
  contents: ContentData[],
): ContentData[] => {
  const splited: ContentData[] = contents
    .map(({ isNeedIndent, type, content }, index) => {
      const isTypeHeading1: boolean = type === "h1";
      const isAngleBrackets = content.slice(0, 1) === "「";

      if (content.length >= 36) {
        const tmpData: ContentData[] = [];
        const { firstSplitedString, remindedSplitedString } =
          calculateLineLengthFromString(content, type);

        tmpData.push({
          isNeedIndent: isAngleBrackets ? false : isNeedIndent,
          isNeedLineBreak: false,
          isNeedBlankLine: false,
          type: type,
          content: firstSplitedString,
        });

        if (!remindedSplitedString) {
          return tmpData;
        }

        if (remindedSplitedString.length >= 2) {
          const lastSplitedString = remindedSplitedString.splice(-1, 1);
          remindedSplitedString.forEach((remindedSplitedStringContent) => {
            tmpData.push({
              isNeedIndent: isTypeHeading1,
              isNeedLineBreak: false,
              isNeedBlankLine: false,
              type: type,
              content: remindedSplitedStringContent,
            });
          });

          tmpData.push({
            isNeedIndent: isTypeHeading1,
            isNeedLineBreak: true,
            isNeedBlankLine:
              type === "p" &&
              contents[index + 1] &&
              contents[index + 1].type === "h1"
                ? true
                : false,
            type: type,
            content: lastSplitedString[0],
          });

          return tmpData;
        }

        tmpData.push({
          isNeedIndent: isTypeHeading1,
          isNeedLineBreak: true,
          isNeedBlankLine:
            type === "p" &&
            contents[index + 1] &&
            contents[index + 1].type === "h1"
              ? true
              : false,
          type: type,
          content: remindedSplitedString[0],
        });

        return tmpData;
      }

      return {
        isNeedIndent: isAngleBrackets ? false : isNeedIndent,
        isNeedLineBreak: true,
        isNeedBlankLine:
          type === "h1" ||
          (type === "p" &&
            contents[index + 1] &&
            contents[index + 1].type === "h1"),
        type: type,
        content: content,
      };
    })
    .flat();

  return splited;
};
