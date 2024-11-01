import { DesktopIcon } from "@radix-ui/react-icons";
import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useTheme } from "@/hooks/use-theme";

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
          {theme === "light" && <SunIcon />}
          {theme === "dark" && <MoonIcon />}
          {theme === "system" && <DesktopIcon />}
        </Button>
      </SelectTrigger>
      <SelectContent className="font-noto-sans">
        <SelectItem value="light">ライト</SelectItem>
        <SelectItem value="dark">ダーク</SelectItem>
        <SelectItem value="system">システム</SelectItem>
      </SelectContent>
    </Select>
  );
};
