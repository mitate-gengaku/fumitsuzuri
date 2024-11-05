export interface ContentData {
  isNeedIndent: boolean;
  isNeedLineBreak: boolean;
  isNeedBlankLine?: boolean;
  type: "p" | "h1" | "space";
  content: string;
  contentClass?: string;
}

export interface ContentArray {
  content: Array<ContentData>;
}
