const accepts = ["md"];

export const validateFileExtension = (file: File) => {
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";

  if (!accepts.includes(extension)) {
    return false;
  } else {
    return true;
  }
};
