import { ChangeEvent, DragEvent, useState } from "react";
import { useController, useForm } from "react-hook-form";

import { useCreateBook } from "./use-create-book";

import { useFile } from "@/hooks/use-file";
import { useToggleForm } from "@/hooks/use-toggle-form";
import { validateFileExtension } from "@/utils/validation-extension";



interface IValue {
  file?: File;
}

export const useUploadFile = () => {
  const [isActive, setActive] = useState<boolean>(false);

  const form = useForm<IValue>({
    defaultValues: {
      file: undefined,
    },
  });
  const {
    field,
    fieldState: { error },
  } = useController({
    name: "file",
    control: form.control,
  });
  const { file, setFile } = useFile();
  const { show, toggleShow } = useToggleForm();
  const { setBookContent } = useCreateBook();

  const onDragEnter = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setActive(true);
  };

  const onDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setActive(false);
  };

  const onDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setActive(true);
  };

  const onDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setActive(false);

    const files = e.dataTransfer.files;

    if (!files || !files.length) return;

    const file = files[0];

    const isValidate = validateFileExtension(file);

    if (isValidate) {
      form.clearErrors("file");
      field.onChange(file);
      setFile(file);
      setBookContent(file);
      toggleShow();
      return;
    }
    form.setError("file", {
      message:
        "ファイルの拡張子が正しくありません。.mdのみアップロードしてください。",
    });
    return;
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const files = e.target.files;

    if (!files || !files.length) return;

    const file = files[0];

    const isValidate = validateFileExtension(file);

    if (isValidate) {
      form.clearErrors("file");
      field.onChange(file);
      setFile(file);
      setBookContent(file);
      toggleShow();
      return;
    }
    form.setError("file", {
      message:
        "ファイルの拡張子が正しくありません。.mdのみアップロードしてください。",
    });
    return;
  };

  const onDelete = () => {
    setFile(undefined);
    form.reset();
  };

  return {
    show,
    isActive,
    error,
    file,
    toggleShow,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onChange,
    onDelete,
  };
};
