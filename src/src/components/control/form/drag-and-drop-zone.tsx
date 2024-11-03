import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToggleForm } from "@/hooks/use-toggle-form"
import { cn } from "@/utils/cn";
import { CloudUploadIcon, FileIcon, Trash2Icon, TrashIcon, XIcon } from "lucide-react";

export const FileCard = () => {
  return (
    <div className="cursor-default flex items-center rounded-md border gap-4 bg-card text-card-foreground shadow px-6 py-4">
      <span className={cn(
        buttonVariants({ variant: "outline", size: "icon" }),
        "hover:bg-white"
        )}>
        <FileIcon className="size-5"/>
      </span>
      <div className="flex flex-col">
        <h3 className="text-sm font-medium">
          People stopped telling jokes.md
        </h3>
        <p className="text-xs text-muted-foreground">42MB</p>
      </div>
      <button className="ml-auto hover:text-rose-600 transition-all">
        <span>
          <Trash2Icon className="size-4"/>
        </span>
      </button>
    </div>
  )
}

export const DragAndDropZone = () => {
  const {
    show,
    toggleShow
  } = useToggleForm();

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
      <Label htmlFor="dropzone-file" className="mb-4 flex flex-col items-center justify-center w-full h-72 border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-card dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <CloudUploadIcon
            className="size-8 xl:size-12 mb-4 text-gray-500 dark:text-gray-400"
            />
          <p className="mb-2 text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs font-medium leading-none text-gray-500 dark:text-gray-400">.md, .txt, or .json</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </Label>
      <div className="w-full flex flex-col gap-2">
        <h4 className="text-md font-medium leading-none">
          アップロードしたファイル
        </h4>
        <FileCard />
      </div>
    </div> 
  )
}