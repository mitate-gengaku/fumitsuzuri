const accepts = [
  "md",
  "txt",
  "json"
]

const validateFileExtension = (file: File) => {  
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";

  if (!accepts.includes(extension)) {
    return false;
  } else {
    return true;
  }
}