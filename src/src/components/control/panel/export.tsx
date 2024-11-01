import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ExportFileControl = () => {
  return (
    <Card className="">
      <CardHeader className="px-4">
        <CardTitle>エクスポート</CardTitle>
        <CardDescription>エクスポートに関する各種設定</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3 px-4">
        <div className="col-span-2">
          <Label htmlFor="file" className="text-xs text-gray-500">
            ファイルの種類
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="ファイルの種類" />
              <ChevronDownIcon className="h-4 w-4 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="text">.txt</SelectItem>
              <SelectItem value="markdown">.md</SelectItem>
              <SelectItem value="json">.json</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="col-span-2 rounded-[4px] bg-sky-500 text-gray-50 hover:bg-sky-600 dark:bg-sky-500 dark:hover:bg-sky-600">
          エクスポート
        </Button>
      </CardContent>
    </Card>
  );
};
