import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ColorCustomizer } from "@/components/control/customize/color";

export const FontControl = () => {
  return (
    <Card>
      <CardHeader className="px-4">
        <CardTitle>フォント</CardTitle>
        <CardDescription>フォントに関する各種設定</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3 px-4">
        <ColorCustomizer />
      </CardContent>
    </Card>
  );
};
