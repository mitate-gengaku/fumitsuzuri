import { AppearanceControl } from "@/components/control/panel/appearance";
import { ExportFileControl } from "@/components/control/panel/export";
import { FontControl } from "@/components/control/panel/font";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useControlPanel } from "@/hooks/use-control-panel";
import { cn } from "@/utils/cn";

export const ControlPanel = () => {
  const { open, showCard } = useControlPanel();

  return (
    <div
      className={cn(
        "ml-auto h-full font-noto-sans transition-all duration-500",
        open ? "w-full md:w-2/5" : "w-0",
      )}
    >
      <ScrollArea className={cn("h-full", open && "pr-3")}>
        <div className="flex flex-col gap-4 p-4">
          {showCard && (
            <>
              <AppearanceControl />
              <FontControl />
              <ExportFileControl />
            </>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
