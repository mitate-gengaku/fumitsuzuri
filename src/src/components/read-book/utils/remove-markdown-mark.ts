export const removeMarkdownMark = (content: string) => {
  return content.replaceAll("# ", "");
};
