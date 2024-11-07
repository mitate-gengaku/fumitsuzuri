import { ContentArray } from "../types/type";

export const convertTo2DArray = (
  content: ContentArray[],
  chunkSize = 2,
): ContentArray[][] => {
  const result: ContentArray[][] = [];

  for (let i = 0; i < content.length; i += chunkSize) {
    result.push(content.slice(i, i + chunkSize));
  }

  return result;
};
