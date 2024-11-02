import { AppearanceControl } from "@/components/control/panel/appearance";
import { ExportFileControl } from "@/components/control/panel/export";
import { FontControl } from "@/components/control/panel/font";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useControlPanel } from "@/hooks/use-control-panel";
import { cn } from "@/utils/cn";
import { NovelControl } from "./novel";

export const ControlPanel = () => {
  const { open, showCard } = useControlPanel();

  return (
    <div
      className={cn(
        "ml-auto h-full font-noto-sans transition-all duration-500",
        open ? "w-full xl:w-2/5" : "w-0",
      )}
    >
      <ScrollArea className={cn("h-full")}>
        <div className="flex flex-col gap-4 py-4 px-2 md:p-4">
          {showCard && (
            <>
              <AppearanceControl />
              <NovelControl />
              <FontControl />
              <ExportFileControl />
            </>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
