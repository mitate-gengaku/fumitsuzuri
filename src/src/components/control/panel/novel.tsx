import { ColorCustomizer } from "@/components/control/customize/color";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/utils/cn";
import { CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface INovelItems {
  title: string;
  description: string;
  lists: string[];
}

const novelItems: INovelItems[] = [
  {
    title: "デフォルト",
    description: "小説の形式",
    lists: [
      "1ページあたり18行",
      "1行あたり36文字",
      "表・裏表紙あり"
    ]
  },
]

export const NovelControl = () => {
  const [checked, setChecked] = useState<number>(0);
  
  return (
    <Card>
      <CardHeader className="px-4">
        <CardTitle>小説</CardTitle>
        <CardDescription>小説に関する各種設定</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3 px-4">
        <div className="col-span-2 flex flex-col gap-1">
          <p className="text-xs text-muted-foreground">小説の形式</p>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
            {novelItems.map(({ title, description, lists }, i) => (
              <label
                key={`${title}-${description}-${i}`}
                htmlFor="select"
                >
                <Card className={cn(
                  "h-full rounded-md relative",
                  checked === i && "outline-sky-600 dark:outline-sky-700 outline"
                  )}>
                  {checked === i ? (
                    <span className="size-4 rounded-full bg-sky-600 dark:bg-sky-700 text-gray-50 absolute right-2 top-2">
                      <CheckIcon />
                    </span>
                  ) : (
                    <Checkbox 
                      id="select"
                      name="select"
                      className="size-4 rounded-full border-gray-300 absolute right-2 top-2 data-[state=checked]:text-gray-50 data-[state=checked]:border-sky-500 data-[state=checked]:bg-sky-600 data-[state=checked]:dark:bg-sky-700" 
                      checked={i === checked}
                      onCheckedChange={() => setChecked(i)}
                      />
                  )}
                  <CardHeader className="px-2 pb-2 space-y-0.5">
                    <CardTitle className="text-sm">デフォルト</CardTitle>
                    <CardDescription className="text-xs">小説の形式</CardDescription>
                  </CardHeader>
                  <CardContent className="px-2">
                    <ul className="ml-4 list-disc [&>li]:mt-2 text-xs">
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
      </CardContent>
    </Card>
  );
};
