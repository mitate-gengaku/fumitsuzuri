import { ContentData } from "../types/type";

export const generateType = (targetStr: string): ContentData["type"] => {
  const firstStringCharcters: string = targetStr.slice(0, 2);
  const isHeading1: boolean = firstStringCharcters === "# ";

  if (isHeading1) {
    return "h1";
  }
  return "p";
};
