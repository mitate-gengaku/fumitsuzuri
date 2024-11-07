import { XIcon } from "lucide-react";

import { DragAndDropZone } from "./drag-and-drop-zone";

import { FileCard } from "@/components/display/file-card";
import { useUploadFile } from "@/hooks/use-upload-file";
import { convertBytesToMB } from "@/utils/convert-bytes-to-mb";

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
    onDelete,
  } = useUploadFile();

  if (!show) return <></>;
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 font-noto-sans md:w-3/5 xl:w-2/5">
      <button
        className="ml-auto text-gray-600 transition-all hover:text-gray-400"
        onClick={() => toggleShow()}
      >
        <XIcon className="size-4" />
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
        <div className="flex w-full flex-col gap-2">
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
};
