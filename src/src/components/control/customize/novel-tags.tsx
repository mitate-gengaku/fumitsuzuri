import { TagsInput } from "@/components/form/tags-input";
import { Label } from "@/components/ui/label";
import { useInputTags } from "@/hooks/use-input-tags";

export const NovelTagsCustomizer = () => {
  const { form, isFocus, tags, onSetFocus, onSubmit, onDeleteTag } =
    useInputTags();

  return (
    <form
      className="col-span-2 flex flex-col gap-1"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Label htmlFor="value" className="text-xs text-muted-foreground">
        小説のタグ付け
      </Label>
      <TagsInput
        id="value"
        name="value"
        rules={{
          min: {
            value: 3,
            message: "3文字以上で入力してください",
          },
          max: {
            value: 9,
            message: "9文字以下で入力してください",
          },
        }}
        control={form.control}
        isFocus={isFocus}
        tags={tags}
        onSetFocus={onSetFocus}
        onDeleteTag={onDeleteTag}
        clearErrors={form.clearErrors}
      />
    </form>
  );
};
