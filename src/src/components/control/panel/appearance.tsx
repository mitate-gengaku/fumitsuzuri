import { ColorCustomizer } from "../customize/color";

import { ThemeCustomizer } from "@/components/control/customize/theme";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const AppearanceControl = () => {
  return (
    <Card>
      <CardHeader className="px-4">
        <CardTitle>外観</CardTitle>
        <CardDescription>外観に関する各種設定</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3 px-4">
        <div className="col-span-2 flex flex-col gap-1">
          <p className="text-xs text-muted-foreground">テーマ</p>
          <div className="col-span-2 flex items-center gap-2">
            <ThemeCustomizer />
          </div>
        </div>
        <ColorCustomizer label="背景色" colorKey="background" />
      </CardContent>
    </Card>
  );
};
