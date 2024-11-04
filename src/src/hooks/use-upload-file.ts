import { FileCard } from "@/components/display/file-card";
import { Label } from "@/components/ui/label";
import { useFile } from "@/hooks/use-file";
import { useToggleForm } from "@/hooks/use-toggle-form"
import { cn } from "@/utils/cn";
import { convertBytesToMB } from "@/utils/convert-bytes-to-mb";
import { CloudUploadIcon, XIcon } from "lucide-react";
import { ChangeEvent, DragEvent, useMemo, useState } from "react";
import {
  FieldError,
  useController,
  useForm,
} from "react-hook-form";

interface IValue {
  file?: File
}

export const useUploadFile = () => {
  const [isActive, setActive] = useState<boolean>(false);

  const form = useForm<IValue>({
    defaultValues: {
      file: undefined
    }
  });

  const {
    file, 
    setFile
  } = useFile();
  const {
    show,
    toggleShow
  } = useToggleForm();
  const {
    field,
    fieldState: {
      error
    }
  } = useController({
    name: "file",
    control: form.control,
  });

  const onDragEnter = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setActive(true)
  };

  const onDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setActive(false);
  };

  const onDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setActive(true)
  };

  const onDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setActive(false)

    const files = e.dataTransfer.files;

    if (!files || !files.length) return;

    const file = files[0];

    const isValidate = validateFileExtension(file);

    if (isValidate) {
      form.clearErrors("file");
      field.onChange(file)
      setFile(file);
      toggleShow();
      return;
    }
    form.setError("file", {
      message: "ファイルの拡張子が正しくありません。.md, .txt, .jsonのみアップロードしてください。"
    })
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
      field.onChange(file)
      setFile(file);
      toggleShow();
      return;
    }
    form.setError("file", {
      message: "ファイルの拡張子が正しくありません。.md, .txt, .jsonのみアップロードしてください。"
    })
    return;
  }

  const onDelete = () => {
    setFile(undefined)
    form.reset();
  }

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
  }
}