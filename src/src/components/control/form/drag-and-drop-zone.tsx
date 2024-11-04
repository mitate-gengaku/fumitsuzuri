import { CloudUploadIcon } from "lucide-react";
import { ChangeEvent, DragEvent } from "react";
import { FieldError } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { cn } from "@/utils/cn";

interface Props {
  isActive: boolean;
  error: FieldError | undefined;
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
      <form className="w-full">
        <Label
          htmlFor="file"
          className={cn(
            "flex h-72 w-full cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-card transition-all hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600",
            isActive &&
              "border-gray-600 bg-gray-100 dark:border-gray-500 dark:bg-gray-600",
            error &&
              "border-rose-500 bg-red-50 transition-all hover:bg-red-100 dark:border-rose-500 dark:hover:border-rose-600",
          )}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <CloudUploadIcon
              className={cn(
                "mb-4 size-8 text-gray-500 dark:text-gray-400 xl:size-12",
                error && "text-rose-500 dark:text-rose-600",
              )}
            />
            <p
              className={cn(
                "mb-2 text-sm font-medium leading-none text-gray-500 dark:text-gray-400",
                error && "text-rose-500 dark:text-rose-600",
              )}
            >
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p
              className={cn(
                "text-xs font-medium leading-none text-gray-400 dark:text-gray-300",
                error && "text-rose-400 dark:text-rose-600",
              )}
            >
              .md
            </p>
          </div>
          <input
            id="file"
            name="file"
            type="file"
            accept=".md"
            className="sr-only"
            value=""
            onChange={onChange}
            multiple={false}
          />
        </Label>
      </form>
      {error && (
        <p
          className="mt-1 w-full text-sm text-rose-500 lg:text-base"
          data-testid="create-book-file-input-error"
        >
          {error.message}
        </p>
      )}
    </>
  );
};
