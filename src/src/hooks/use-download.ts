import { useForm } from "react-hook-form";

interface IExportFile {
  name: string | undefined;
  extension: string | undefined;
}

export const useDownload = () => {
  const form = useForm<IExportFile>({
    defaultValues: {
      name: "download",
      extension: "",
    },
  });

  const onDownload = (values: IExportFile) => {
    const { name, extension } = values;

    const finalFileName = name;

    // ここでコンテンツを各ファイルに合うように変換する

    const content = new Blob(["Hello World"], {
      type: "text/markdown",
    });

    const url = URL.createObjectURL(content);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${finalFileName}.${extension}`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return {
    form,
    onDownload,
  };
};
