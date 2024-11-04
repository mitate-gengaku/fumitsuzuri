import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToggleForm } from "@/hooks/use-toggle-form"
import { cn } from "@/utils/cn";
import { CloudUploadIcon, FileIcon, Trash2Icon, TrashIcon, XIcon } from "lucide-react";

interface Props {
  name: string;
  size: string;
  onDelete: () => void;
}
export const FileCard = (props: Props) => {
  const {
    name,
    size,
    onDelete
  } = props;

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
          {name}
        </h3>
        <p className="text-xs text-muted-foreground">{size}MB</p>
      </div>
      <button 
        className="ml-auto hover:text-rose-600 transition-all"
        onClick={() => onDelete()}
        >
        <span>
          <Trash2Icon className="size-4"/>
        </span>
      </button>
    </div>
  )
}