import { NovelFormatCustomizer } from "../customize/novel-format";
import { NovelTagsCustomizer } from "../customize/novel-tags";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const NovelControl = () => {
  return (
    <Card>
      <CardHeader className="px-4">
        <CardTitle>小説</CardTitle>
        <CardDescription>小説に関する各種設定</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3 px-4">
        <NovelFormatCustomizer />
        <NovelTagsCustomizer />
      </CardContent>
    </Card>
  );
};
