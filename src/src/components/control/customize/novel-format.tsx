import { CheckIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useNovelFormat } from "@/hooks/use-novel-format";
import { cn } from "@/utils/cn";

interface INovelItems {
  title: string;
  description: string;
  lists: string[];
}

const novelItems: INovelItems[] = [
  {
    title: "デフォルト",
    description: "小説の形式",
    lists: ["1ページあたり18行", "1行あたり36文字", "表・裏表紙あり"],
  },
];

export const NovelFormatCustomizer = () => {
  const { checked, onSetCheck, isEqual } = useNovelFormat();

  return (
    <div className="col-span-2 flex flex-col gap-1">
      <p className="text-xs text-muted-foreground">小説の形式</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {novelItems.map(({ title, description, lists }, i) => (
          <label key={`${title}-${description}-${i}`} htmlFor="select">
            <Card
              className={cn(
                "relative h-full rounded-md",
                isEqual(i) && "outline outline-sky-600 dark:outline-sky-700",
              )}
            >
              {isEqual(i) ? (
                <span className="absolute right-2 top-2 size-4 rounded-full bg-sky-600 text-gray-50 dark:bg-sky-700">
                  <CheckIcon />
                </span>
              ) : (
                <Checkbox
                  id="select"
                  name="select"
                  className="absolute right-2 top-2 size-4 rounded-full border-gray-300 data-[state=checked]:border-sky-500 data-[state=checked]:bg-sky-600 data-[state=checked]:text-gray-50 data-[state=checked]:dark:bg-sky-700"
                  checked={i === checked}
                  onCheckedChange={() => onSetCheck(i)}
                />
              )}
              <CardHeader className="space-y-0.5 px-2 pb-2">
                <CardTitle className="text-sm">デフォルト</CardTitle>
                <CardDescription className="text-xs">
                  小説の形式
                </CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <ul className="ml-4 list-disc text-xs [&>li]:mt-2">
                  {lists.map((list, i) => (
                    <li key={`${list}-${i}`}>{list}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </label>
        ))}
      </div>
    </div>
  );
};
