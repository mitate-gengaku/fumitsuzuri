import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { cn } from "@/utils/cn"
import { XIcon } from "lucide-react"
import { useForm, UseFormClearErrors, UseFormReset } from "react-hook-form"
import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import { atom, useAtom } from "jotai"
import { useInputTags } from "@/hooks/use-input-tags"

interface FormInputProps extends React.ComponentProps<typeof Input> {
  reset: UseFormReset<{
    value: string;
  }>;
  isFocus: boolean;
  tags: string[]
  onSetFocus: (value: boolean | (() => boolean)) => void;
  onDeleteTag: () => void;
  clearErrors: UseFormClearErrors<{
    value: string;
  }>
}

export const TagsInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  { reset, isFocus, tags, onSetFocus, onDeleteTag, clearErrors, ...props }: FormInputProps & UseControllerProps<TFieldValues, TName>,
) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <>
      <div className={cn(
        "w-full flex items-center gap-2 border border-input rounded-lg min-h-9 px-2 py-1 text-sm",
        isFocus && "ring-[1.5px] ring-sky-600",
        error?.message && "border-rose-500 bg-rose-100 dark:bg-gray-700 dark:text-rose-500",
        )}>
        {tags.map((tag, i) => (
          <Badge key={`${tag}-${i}`} className="bg-sky-600 hover:bg-sky-600 text-gray-50 dark:text-gray-100">{tag}</Badge>
        ))}
        <input 
          {...field}
          {...props}
          className={cn(
            "w-full bg-transparent focus:outline-none focus:ring-0",
            error?.message && "bg-rose-100 dark:bg-gray-700",
          )}
          onFocus={() => onSetFocus(true)}
          onBlur={() => onSetFocus(false)}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && !field.value.length && tags.length) {  
              onDeleteTag();
              return;
            }
            if (e.key === "Backspace" && field.value.length) {
              clearErrors("value")
            }
          }}
          autoComplete="off"
          />
      </div>
      {error?.message && (
        <p
          className={cn(
            "mt-1 text-xs font-medium leading-none text-rose-500",
          )}
          data-testid={`${props.name}-input-error`}
        >
          {error.message}
        </p>
      )}
    </>
  )
}