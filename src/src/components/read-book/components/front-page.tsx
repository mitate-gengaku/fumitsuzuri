import React, { forwardRef } from "react";

import { useCreateBook } from "@/hooks/use-create-book";
import { cn } from "@/utils/cn";

interface Props extends React.ComponentProps<"div"> {
  isLoading: boolean;
}

export const FrontPage = forwardRef<HTMLDivElement, Props>(
  ({ isLoading }, ref) => {
    const { book, setBook } = useCreateBook();

    return (
      <div
        className={cn(
          "relative border border-slate-100 bg-slate-100 shadow-md",
          "flex h-[670px] w-[456px] flex-row-reverse justify-between",
          "px-8 py-10 [zoom:0.425] md:[zoom:0.725] lg:[zoom:1]",
          "font-yumin",
        )}
        ref={ref}
      >
        <div className="flex h-[calc(670px-5rem)] cursor-pointer">
          <textarea
            className={cn(
              "h-full w-36 flex-none resize-none font-bold [writing-mode:vertical-rl]",
              "overflow-hidden bg-transparent text-7xl focus:outline-1 focus:outline-sky-500 focus:ring-1 focus:ring-sky-500",
              "cursor-pointer leading-none hover:outline-1 hover:outline-sky-500 disabled:cursor-not-allowed",
            )}
            defaultValue={book.title}
            name="title"
            onChange={(e) => {
              setBook({ ...book, title: e.target.value });
            }}
            disabled={isLoading}
          />
        </div>
        <input
          name="author"
          type="text"
          className={cn(
            "flex-none cursor-pointer font-bold text-gray-400 [writing-mode:vertical-rl]",
            "bg-transparent pt-12 text-4xl focus:outline-1 focus:outline-sky-500 focus:ring-1 focus:ring-sky-500 disabled:cursor-not-allowed",
          )}
          value={book.author}
          onChange={(e) => {
            setBook({ ...book, author: e.target.value });
          }}
          disabled={isLoading}
        />
      </div>
    );
  },
);

FrontPage.displayName = "FrontPage";
