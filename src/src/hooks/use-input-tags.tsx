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

const tagsAtom = atom<string[]>([]);

interface IValue {
  value: string;
}

export const useInputTags = () => {
  const [isFocus, setFocus] = useState<boolean>(false);
  const [tags, setTags] = useAtom<string[]>(tagsAtom);
  const form = useForm({
    defaultValues: {
      value: ""
    },
  });
  const onSetFocus = (value: boolean | (() => boolean)) => {
    setFocus(value)
  }
  const onSetTags = (value: string[] | (() => string[])) => {
    setTags(value)
  }

  const onSubmit = ({ value }: IValue) => {
    if (value.length < 3) {
      form.setError("value", {
        message: "3文字以上で入力してください"
      })
      return;
    }
    if (tags.length >= 4) {
      form.setError("value", {
        message: "最大4つまでタグを入力できます"
      })
      return;
    }
    setTags([ ...tags, value ])
    form.reset();
  }

  const onDeleteTag = () => {
    setTags((tags) => tags.slice(0, -1))
  }

  return {
    form,
    tags,
    isFocus,
    onSetFocus,
    onSetTags,
    onSubmit,
    onDeleteTag
  }
}