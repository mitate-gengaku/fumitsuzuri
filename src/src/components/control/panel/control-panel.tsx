import { ScrollArea } from "@/components/ui/scroll-area";
import { useControlPanel } from "@/hooks/use-control-panel"
import { cn } from "@/utils/cn"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDownIcon, Moon, MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { DesktopIcon } from "@radix-ui/react-icons";
import { ThemeCustomizer } from "@/components/control/customize/theme";
import { AppearanceControl } from "@/components/control/panel/appearance";

export const ControlPanel = () => {
  const { theme, setTheme } = useTheme();
  const {
    open,
    showCard
  } = useControlPanel();

  return (
    <div className={cn(
      "ml-auto h-full duration-500 transition-all font-noto-sans",
      open ? "w-full md:w-2/5" : "w-0"
      )}>
      <ScrollArea className={cn(
        "h-full",
        open && "pr-3"
      )}>
        <div className="flex flex-col gap-4 p-4">
          {showCard && (
            <AppearanceControl />
          )}
        </div>
      </ScrollArea>
    </div>
  )
}