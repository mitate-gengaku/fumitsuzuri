export const convertBytesToMB = (bytes: number): string => {
  const mb = bytes / (1024 * 1024);
  return mb.toFixed(2).toString();
};
