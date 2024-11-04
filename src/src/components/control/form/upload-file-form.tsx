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
import { DragAndDropZone } from "./drag-and-drop-zone";
import { useUploadFile } from "@/hooks/use-upload-file";

interface FileInputProps extends React.ComponentProps<"input"> {
}

export const UploadFileForm = () => {
  const {
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
    onDelete
  } = useUploadFile();

  if (!show) return <></>
  return (
    <div className="flex flex-col items-center justify-center gap-4 mx-auto w-full md:w-3/5 xl:w-2/5 font-noto-sans">
      <button
        className="ml-auto text-gray-600 hover:text-gray-400 transition-all"
        onClick={() => toggleShow()}
        >
        <XIcon
          className="size-4"
          />
      </button>
      <DragAndDropZone
        isActive={isActive}
        error={error}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onChange={onChange}
        />
      {file && (
        <div className="w-full flex flex-col gap-2">
          <h4 className="text-md font-medium leading-none">
            アップロードしたファイル
          </h4>
          <FileCard 
            name={file.name}
            size={convertBytesToMB(file.size)}
            onDelete={() => onDelete()}
            />
        </div>
      )}
    </div> 
  );
}