import { ChevronDownIcon } from "lucide-react";
import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface FormSelectProps extends React.ComponentProps<typeof Select> {
  placeholder: string;
  items: {
    label: string;
    value: string;
  }[];
}

export const FormSelect = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  placeholder,
  items,
  ...props
}: FormSelectProps & UseControllerProps<TFieldValues, TName>) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <>
      <Select onValueChange={field.onChange} {...props}>
        <SelectTrigger
          className={
            error?.message && "bg-rose-100 text-rose-600 ring-1 ring-rose-500"
          }
        >
          <SelectValue placeholder={placeholder} />
          <ChevronDownIcon className="h-4 w-4 opacity-50" />
        </SelectTrigger>
        <SelectContent className="font-noto-sans">
          {items.map((item, i) => (
            <SelectItem value={item.value} key={`${item.value}-${i}`}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error?.message && (
        <p
          className="mt-1 text-xs font-medium leading-none text-rose-500"
          data-testid={`${props.name}-input-error`}
        >
          {error.message}
        </p>
      )}
    </>
  );
};
