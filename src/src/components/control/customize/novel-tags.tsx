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
import { TagsInput } from "../form/tags-input"

export const NovelTagsCustomizer = () => {
  const {
    form,
    isFocus,
    tags,
    onSetFocus,
    onSubmit,
    onDeleteTag
  } = useInputTags();

  return (
    <form 
      className="col-span-2 flex flex-col gap-1" 
      onSubmit={form.handleSubmit(onSubmit)}
      >
      <Label htmlFor="value" className="text-xs text-muted-foreground">小説のタグ付け</Label>
      <TagsInput
        id="value"
        name="value"
        rules={{
          min: {
            value: 3,
            message: "3文字以上で入力してください"
          },
          max: {
            value: 9,
            message: "9文字以下で入力してください"
          }
        }}
        control={form.control}
        reset={form.reset}
        isFocus={isFocus}
        tags={tags}
        onSetFocus={onSetFocus}
        onDeleteTag={onDeleteTag}
        clearErrors={form.clearErrors}
        />
    </form>
  )
}