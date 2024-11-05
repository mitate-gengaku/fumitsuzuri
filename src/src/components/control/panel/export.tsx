import { DownloadForm } from "@/components/form/download-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ExportFileControl = () => {
  return (
    <Card>
      <CardHeader className="px-4">
        <CardTitle>エクスポート</CardTitle>
        <CardDescription>エクスポートに関する各種設定</CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <DownloadForm />
      </CardContent>
    </Card>
  );
};
