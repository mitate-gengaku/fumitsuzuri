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
        <div className="col-span-2 flex items-center gap-2">
          <ThemeCustomizer />
        </div>
      </CardContent>
    </Card>
  );
};
