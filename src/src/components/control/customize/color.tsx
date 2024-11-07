import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useColor } from "@/hooks/use-color";

interface Props {
  label: string;
  colorKey: string;
}

export const ColorCustomizer = (props: Props) => {
  const { label, colorKey } = props;
  const { color, onSetColor, onSetOpacity } = useColor(colorKey);

  return (
    <div className="col-span-2 flex flex-col gap-1">
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="flex items-center gap-2">
        <Input
          type="color"
          className="m-0 size-6 border-0 p-0 focus:outline-0"
          value={color.color}
          onChange={onSetColor}
        />
        <Slider
          defaultValue={[100]}
          onValueChange={onSetOpacity}
          max={100}
          step={1}
          themeColor={color.color}
        />
      </div>
    </div>
  );
};
