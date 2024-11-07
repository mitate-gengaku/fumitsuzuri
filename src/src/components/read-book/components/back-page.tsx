import React from "react";
import { ReactBarcode, ReactBarcodeProps } from "react-jsbarcode";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useCreateBook } from "@/hooks/use-create-book";
import { cn } from "@/utils/cn";

interface Props extends React.ComponentProps<"div"> {
  isLoading: boolean;
}

export const BackPage = React.forwardRef<HTMLDivElement, Props>(
  ({ isLoading }, ref) => {
    const { book, setBook } = useCreateBook();

    return (
      <div
        className={cn(
          "h-[670px] w-[456px] select-none border border-slate-100 bg-slate-100 shadow-md",
          "flex flex-col p-8 [zoom:0.425] md:[zoom:0.725] lg:[zoom:1]",
          "font-yumin",
        )}
        ref={ref}
      >
        <div className={cn("mb-4 grid grid-cols-2 gap-2")}>
          <div className={cn("flex flex-col justify-between")}>
            {book.id && (
              <ReactBarcode
                value={book.id}
                renderer={"image" as ReactBarcodeProps["renderer"]}
                options={{
                  width: 1,
                  font: "sans",
                  background: "transparent",
                  height: 30,
                  fontSize: 12,
                }}
                className="w-full"
              />
            )}
            <label htmlFor="price" className="flex items-center gap-1 text-sm">
              <span className="flex-none">定価: 本体</span>
              <input
                name="price"
                type="number"
                max={100000}
                min={0}
                step={1}
                className={cn(
                  "min-w-4 cursor-pointer bg-transparent",
                  "focus:outline-1 focus:outline-sky-500 focus:ring-1 focus:ring-sky-500",
                  "disabled:cursor-not-allowed",
                )}
                value={book.price}
                onChange={(e) => {
                  setBook({ ...book, price: parseInt(e.target.value, 10) });
                }}
                disabled={isLoading}
              />
              <span className="flex-none">円(税別)</span>
            </label>
          </div>
          <textarea
            name="summary"
            className="cursor-pointer resize-none bg-transparent text-sm focus:outline-1 focus:outline-sky-500 focus:ring-1 focus:ring-sky-500 disabled:cursor-not-allowed"
            rows={12}
            value={book.summary}
            onChange={(e) => {
              setBook({ ...book, summary: e.target.value });
            }}
            disabled={isLoading}
          />
        </div>
        <div className="mb-4 h-px w-full bg-gray-400" />
        <div className="flex flex-col">
          <div className="flex items-center text-base">
            <span className="flex-none">FAKE-ISBN</span>
            <InputOTP
              name="otp"
              className="cursor-pointer disabled:cursor-not-allowed"
              maxLength={13}
              value={book.id}
              onChange={(value) => {
                setBook({ ...book, id: value });
              }}
              disabled={isLoading}
            >
              <InputOTPGroup>
                <InputOTPSlot
                  index={0}
                  className="h-6 w-[0.55rem] border-transparent text-base text-gray-800 shadow-none"
                />
                <InputOTPSlot
                  index={1}
                  className="h-6 w-[0.55rem] border-transparent text-base text-gray-800 shadow-none"
                />
                <InputOTPSlot
                  index={2}
                  className="h-6 w-[0.55rem] border-transparent text-base text-gray-800 shadow-none"
                />
                -
                <InputOTPSlot
                  index={3}
                  className="h-6 w-[0.55rem] border-transparent text-base text-gray-800 shadow-none"
                />
                -
                <InputOTPSlot
                  index={4}
                  className="h-6 w-[0.55rem] border-transparent text-base text-gray-800 shadow-none"
                />
                <InputOTPSlot
                  index={5}
                  className="h-6 w-[0.55rem] border-transparent text-base text-gray-800 shadow-none"
                />
                -
                <InputOTPSlot
                  index={6}
                  className="h-6 w-[0.55rem] border-transparent text-base text-gray-800 shadow-none"
                />
                <InputOTPSlot
                  index={7}
                  className="h-6 w-[0.55rem] border-transparent text-base text-gray-800 shadow-none"
                />
                <InputOTPSlot
                  index={8}
                  className="h-6 w-[0.55rem] border-transparent text-base text-gray-800 shadow-none"
                />
                <InputOTPSlot
                  index={9}
                  className="h-6 w-[0.55rem] border-transparent text-base text-gray-800 shadow-none"
                />
                <InputOTPSlot
                  index={10}
                  className="h-6 w-[0.55rem] border-transparent text-base text-gray-800 shadow-none"
                />
                <InputOTPSlot
                  index={11}
                  className="h-6 w-[0.55rem] border-transparent text-base text-gray-800 shadow-none"
                />
                -
                <InputOTPSlot
                  index={12}
                  className="h-6 w-[0.55rem] border-transparent text-base text-gray-800 shadow-none"
                />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="flex items-center gap-0.5 text-sm">
            {book.edition >= 1 && "改訂"}
            <input
              type="number"
              className={cn(
                "w-10 cursor-pointer bg-transparent text-center disabled:cursor-not-allowed",
                book.edition === 0 && "text-transparent",
              )}
              max={1000}
              min={0}
              step={1}
              value={book.edition}
              onChange={(e) => {
                setBook({ ...book, edition: parseInt(e.target.value, 10) });
              }}
              disabled={isLoading}
            />
            {book.edition >= 1 && "版"}
          </div>
        </div>
      </div>
    );
  },
);

BackPage.displayName = "BackPage";
