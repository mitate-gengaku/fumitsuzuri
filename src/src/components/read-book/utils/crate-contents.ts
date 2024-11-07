import { convertTo2DArray } from "./convert-to-2d-array";
import { joinSplitedArrayByPageRowLength } from "./join-splited-array-by-page-row-length";
import { splitContentIntoALine } from "./split-content-into-a-line";
import { splitContentStringByNewLineAndMark } from "./split-content-string-by-newline-and-mark";

export const createContents = (content: string) => {
  return convertTo2DArray(
    joinSplitedArrayByPageRowLength(
      splitContentIntoALine(splitContentStringByNewLineAndMark(content)),
    ),
  );
};
