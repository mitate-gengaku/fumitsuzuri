import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";

export const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: React.ComponentProps<typeof Input> &
    UseControllerProps<TFieldValues, TName>,
) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <>
      <Input
        {...props}
        {...field}
        className={cn(
          error?.message && "border-rose-500 bg-rose-100",
          props.className,
        )}
      />
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
