import { AboutControl } from "@/components/control/panel/about";
import { AppearanceControl } from "@/components/control/panel/appearance";
import { FontControl } from "@/components/control/panel/font";
import { NovelControl } from "@/components/control/panel/novel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useControlPanel } from "@/hooks/use-control-panel";
import { cn } from "@/utils/cn";

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
        <div className="flex flex-col gap-4 px-2 py-4 md:p-4">
          {showCard && (
            <>
              <AboutControl />
              <AppearanceControl />
              <NovelControl />
              <FontControl />
            </>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
