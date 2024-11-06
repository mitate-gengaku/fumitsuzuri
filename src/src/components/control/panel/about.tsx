import LogoIcon from "@/components/icons/logo";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const AboutControl = () => {
  return (
    <Card>
      <CardHeader className="px-4">
        <CardTitle>
          <LogoIcon className="h-9 w-fit justify-start" />
        </CardTitle>
        <CardDescription>ファイルで作る小説執筆ツール</CardDescription>
      </CardHeader>
    </Card>
  );
};
