import {
  FileIcon,
  Trash2Icon,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils/cn";

interface Props {
  name: string;
  size: string;
  onDelete: () => void;
}
export const FileCard = (props: Props) => {
  const { name, size, onDelete } = props;

  return (
    <div className="flex cursor-default items-center gap-4 rounded-md border bg-card px-6 py-4 text-card-foreground shadow">
      <span
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "hover:bg-white",
        )}
      >
        <FileIcon className="size-5" />
      </span>
      <div className="flex flex-col">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-xs text-muted-foreground">{size}MB</p>
      </div>
      <button
        className="ml-auto transition-all hover:text-rose-600"
        onClick={() => onDelete()}
      >
        <span>
          <Trash2Icon className="size-4" />
        </span>
      </button>
    </div>
  );
};
