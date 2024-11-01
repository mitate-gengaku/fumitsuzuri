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

export const ThemeCustomizer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon"}
          className="flex h-9 w-9 items-center justify-center"
        >
          {theme === "light" && (
            <SunIcon />
          )}
          {theme === "dark" && (
            <MoonIcon />
          )}
          {theme === "system" && (
            <DesktopIcon />
          )}
        </Button>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  )
}