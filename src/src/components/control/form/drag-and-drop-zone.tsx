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

interface Props {
  isActive: boolean;
  error: FieldError | undefined
  onDragEnter: (e: DragEvent<HTMLLabelElement>) => void;
  onDragLeave: (e: DragEvent<HTMLLabelElement>) => void;
  onDragOver: (e: DragEvent<HTMLLabelElement>) => void;
  onDrop: (e: DragEvent<HTMLLabelElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const DragAndDropZone = (props: Props) => {
  const {
    isActive,
    error,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onChange,
  } = props;

  return (
    <>
      <form 
        className="w-full"
        >
        <Label 
          htmlFor="file" 
          className={cn(
            "flex flex-col items-center justify-center w-full h-72 border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-card dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 transition-all",
            isActive && "bg-gray-100 border-gray-600 dark:border-gray-500 dark:bg-gray-600",
            error && "border-rose-500 dark:border-rose-500 dark:hover:border-rose-600 bg-red-50 hover:bg-red-100 transition-all"
          )}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
          >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <CloudUploadIcon
              className={cn(
                "size-8 xl:size-12 mb-4 text-gray-500 dark:text-gray-400",
                error && "text-rose-500 dark:text-rose-600"
              )}
              />
            <p className={cn(
              "mb-2 text-sm font-medium leading-none text-gray-500 dark:text-gray-400",
              error && "text-rose-500 dark:text-rose-600"
              )}>
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className={cn(
              "text-xs font-medium leading-none text-gray-400 dark:text-gray-300",
              error && "text-rose-400 dark:text-rose-600"
              )}>.md, .txt, or .json</p>
          </div>
          <input
            id="file"
            name="file"
            type="file"
            accept=".md,.txt,.json"
            className="sr-only"
            value=""
            onChange={onChange}
            multiple={false}
          />
        </Label>   
      </form>
      {error && (
        <p
          className="w-full mt-1 text-sm text-rose-500 lg:text-base"
          data-testid="create-book-file-input-error"
        >
          {error.message}
        </p>
      )}
    </>
  )
}