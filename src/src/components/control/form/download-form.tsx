import { FormInput } from "./input";
import { FormSelect } from "./select";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useDownload } from "@/hooks/use-download";

const exportFileItems = [
  {
    value: "txt",
    label: "テキストファイル(.txt)",
  },
  {
    value: "md",
    label: "マークダウンファイル(.md)",
  },
  {
    value: "json",
    label: "JSONファイル(.json)",
  },
];

export const DownloadForm = () => {
  const { form, onDownload } = useDownload();

  return (
    <form
      className="grid grid-cols-2 gap-3"
      onSubmit={form.handleSubmit(onDownload)}
    >
      <div className="col-span-2">
        <Label htmlFor="name" className="text-xs text-gray-500">
          ファイル名
        </Label>
        <FormInput
          id="name"
          name="name"
          control={form.control}
          rules={{
            required: {
              value: true,
              message: "必須項目です",
            },
            max: {
              value: 36,
              message: "最大36文字まで入力できます",
            },
            min: {
              value: 4,
              message: "4文字以上入力してください",
            },
          }}
          autoComplete="on"
          className="focus:ring-[1.5px] focus:ring-sky-600"
        />
      </div>
      <div className="col-span-2">
        <Label htmlFor="extension" className="text-xs text-gray-500">
          ファイルの拡張子
        </Label>
        <FormSelect
          name="extension"
          control={form.control}
          placeholder="ファイルの拡張子"
          rules={{
            required: {
              value: true,
              message: "必須項目です",
            },
          }}
          items={exportFileItems}
        />
      </div>
      <Button
        type="submit"
        className="col-span-2 rounded-[4px] bg-sky-500 text-gray-50 hover:bg-sky-600 dark:bg-sky-500 dark:hover:bg-sky-600"
      >
        エクスポート
      </Button>
    </form>
  );
};
