import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useColor } from "@/hooks/use-color";

export const ColorCustomizer = () => {
  const { color, onSetColor, onSetOpacity } = useColor();

  return (
    <div className="col-span-2 flex items-center gap-2">
      <Input
        type="color"
        className="size-6 rounded-none border-none p-0 shadow-none"
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
  );
};
