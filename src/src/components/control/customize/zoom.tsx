import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ChevronDownIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useZoom } from "@/hooks/use-zoom";
import { cn } from "@/utils/cn";

const zoomItems = [
  {
    value: "100%",
    label: "100%",
  },
  {
    value: "75%",
    label: "75%",
  },
  {
    value: "50%",
    label: "50%",
  },
  {
    value: "25%",
    label: "25%",
  },
  {
    value: "auto",
    label: "自動",
  },
];

export const ZoomCustomizer = () => {
  const { handleZoom } = useZoom();

  return (
    <Select defaultValue="auto" onValueChange={handleZoom}>
      <SelectTrigger
        className={cn(
          "absolute bottom-4 left-4 flex w-32 items-center justify-start gap-1 rounded bg-card font-noto-sans outline-none",
        )}
      >
        <MagnifyingGlassIcon />
        <SelectValue placeholder="ズーム" />
        <ChevronDownIcon className="ml-auto h-4 w-4 opacity-50" />
      </SelectTrigger>
      <SelectContent className="rounded font-noto-sans">
        {zoomItems.map((zoom, i) => (
          <SelectItem
            value={zoom.value}
            key={`${zoom.label}-${zoom.value}-${i}`}
            className="rounded"
          >
            {zoom.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
