import { GitHubLogoIcon, Insta } from "@radix-ui/react-icons";
import { LightbulbIcon } from "lucide-react";
import Link from "next/link";

import LogoIcon from "@/components/icons/logo";
import { XIcon } from "@/components/icons/x";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/utils/cn";

export const AboutControl = () => {
  return (
    <Card>
      <CardHeader className="px-4">
        <CardTitle>
          <LogoIcon className="h-9 w-fit justify-start" />
        </CardTitle>
        <CardDescription>
          ファイルで作る小説執筆・プレビューサービス
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 px-4">
        <TooltipProvider>
          <div className="flex flex-col gap-2">
            <h3 className="text-xs text-muted-foreground">各種コンテンツ</h3>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant={"outline"} asChild>
                    <Link
                      href={"/"}
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                          size: "icon",
                        }),
                      )}
                    >
                      <LightbulbIcon />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="font-noto-sans">
                  よくある質問
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xs text-muted-foreground">各種SNS</h3>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant={"outline"} asChild>
                    <Link
                      href={"https://x.com/TsuzuriF68323"}
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                          size: "icon",
                        }),
                      )}
                    >
                      <XIcon />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="font-noto-sans">
                  @TsuzuriF6832
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant={"outline"} asChild>
                    <Link
                      href={"https://github.com/fumitsuzuri-dev"}
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                          size: "icon",
                        }),
                      )}
                    >
                      <GitHubLogoIcon />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="font-noto-sans">
                  @fumitsuzuri-dev
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};
