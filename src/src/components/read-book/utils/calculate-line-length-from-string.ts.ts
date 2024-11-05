import { ContentData } from "../types/type";

export const calculateLineLengthFromString = (
  content: string,
  type: ContentData["type"],
) => {
  if (type === "h1") {
    const firstSplitedString: string = content.slice(0, 35);
    const remindedSplitedString: RegExpMatchArray | null = content
      .slice(35)
      .match(/.{1,36}/g);

    return { firstSplitedString, remindedSplitedString };
  }

  const firstSplitedString = content.slice(0, 35);
  const remindedSplitedString: RegExpMatchArray | null = content
    .slice(35)
    .match(/.{1,36}/g);

  return { firstSplitedString, remindedSplitedString };
};
