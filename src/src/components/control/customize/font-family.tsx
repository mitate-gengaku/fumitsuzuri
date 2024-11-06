import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFontFamily } from "@/hooks/use-font-family";

export const FontFamilyCustomizer = () => {
  const { fontFamily, onSetFamily } = useFontFamily();

  return (
    <div className="col-span-2 flex flex-col gap-1">
      <Label className="text-xs text-muted-foreground">
        フォントファミリー
      </Label>
      <Select value={fontFamily} onValueChange={(value) => onSetFamily(value)}>
        <SelectTrigger className="bg-card font-noto-sans outline-none">
          <SelectValue
            placeholder="フォントファミリー"
            defaultValue={"yu-mincho"}
          />
        </SelectTrigger>
        <SelectContent className="yu-mincho">
          <SelectItem value="yu-mincho">游明朝</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
