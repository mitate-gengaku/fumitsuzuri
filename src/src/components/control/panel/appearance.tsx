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

export const AppearanceControl = () => {
  return (
    <Card>
      <CardHeader className="px-4">
        <CardTitle>外観</CardTitle>
        <CardDescription>外観に関する各種設定</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3 px-4">
        <div className="col-span-2 flex items-center gap-2">
          <ThemeCustomizer />
        </div>
      </CardContent>
    </Card>
  )
}