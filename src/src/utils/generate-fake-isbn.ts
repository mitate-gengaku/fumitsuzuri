export const generateFakeISBN = (code: string) => {
  if (code.length < 13) {
    throw new Error("13 characters required");
  }
  const id = code.slice(0, 13).split("");

  id.splice(0, 0, "FAKE-ISBN");
  id.splice(4, 0, "-");
  id.splice(6, 0, "-");
  id.splice(9, 0, "-");
  id.splice(16, 0, "-");

  return id.join("");
};
