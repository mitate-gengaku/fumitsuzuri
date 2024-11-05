import { Edit2Icon, FileIcon, PanelRightIcon, PlayIcon } from "lucide-react";
import { useState } from "react";
import { ReactBarcode, ReactBarcodeProps } from "react-jsbarcode";

import { ZoomCustomizer } from "@/components/control/customize/zoom";
import { UploadFileForm } from "@/components/form/upload-file-form";
import { ControlPanel } from "@/components/control/panel/control-panel";
import { Spinner } from "@/components/loading/spinner";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useControlPanel } from "@/hooks/use-control-panel";
import { useCreateBook } from "@/hooks/use-create-book";
import { useFile } from "@/hooks/use-file";
import { useScreenshot } from "@/hooks/use-screen-shot";
import { useToggleBookMode } from "@/hooks/use-toggle-book-mode";
import { useToggleForm } from "@/hooks/use-toggle-form";
import { cn } from "@/utils/cn";

const Home = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [url, setURL] = useState<string>("");
  const [burl, bsetURL] = useState<string>("");
  const { toggleOpen } = useControlPanel();
  const { show, toggleShow } = useToggleForm();
  const { file } = useFile();
  const { mode, toggleMode } = useToggleBookMode();
  const { ref, takeScreenshot } = useScreenshot();
  const { ref: bref, takeScreenshot: btakeScreenshot } = useScreenshot();
  const { book, setBook } = useCreateBook();

  return (
    <main className="flex h-screen w-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="relative flex h-full w-full p-4">
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={() => toggleOpen()}
          className="absolute right-4 top-4 z-10"
        >
          <PanelRightIcon />
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={() => toggleShow()}
          className="absolute right-16 top-4 z-10"
        >
          <FileIcon />
        </Button>
        {!show && file && (
          <Button
            variant={"outline"}
            size={"icon"}
            disabled={isLoading}
            onClick={async (values) => {
              if (mode) {
                setLoading(true);
                const url = await takeScreenshot();
                const burl = await btakeScreenshot();

                setURL(url);
                bsetURL(burl);
                toggleMode();
                setLoading(false);
                return;
              }

              setURL("");
              bsetURL("");
              toggleMode();
            }}
            className="absolute right-28 top-4 z-10"
          >
            {mode ? (
              <>{isLoading ? <Spinner className="size-4" /> : <PlayIcon />}</>
            ) : (
              <Edit2Icon />
            )}
          </Button>
        )}
        {!show && !url && !burl && file && (
          <div className="relative mx-auto flex h-full w-fit">
            <div
              className={cn(
                "flex select-none items-center dark:text-gray-900",
              )}
            >
              <div
                className={cn(
                  "relative border border-slate-100 bg-slate-100 shadow-md",
                  "flex h-[670px] w-[456px] flex-row-reverse justify-between",
                  "px-8 py-10",
                  "font-yumin",
                )}
                ref={ref}
              >
                <div className="h-[calc(670px-5rem)] flex cursor-pointer">
                  <textarea
                    className={cn(
                      "h-full w-36 flex-none resize-none font-bold [writing-mode:vertical-rl]",
                      "overflow-hidden bg-transparent text-7xl focus:outline-1 focus:outline-sky-500 focus:ring-1 focus:ring-sky-500",
                      "cursor-pointer leading-none hover:outline-1 hover:outline-sky-500",
                    )}
                    defaultValue={book.title}
                    name="title"
                    onChange={(e) => {
                      setBook({ ...book, title: e.target.value });
                    }}
                  />
                </div>
                <input
                  name="author"
                  type="text"
                  className={cn(
                    "flex-none cursor-pointer font-bold text-gray-400 [writing-mode:vertical-rl]",
                    "bg-transparent pt-12 text-4xl focus:outline-1 focus:outline-sky-500 focus:ring-1 focus:ring-sky-500",
                  )}
                  value={book.author}
                  onChange={(e) => {
                    setBook({ ...book, author: e.target.value });
                  }}
                />
              </div>
              <div
                className={cn(
                  "h-[670px] w-[456px] select-none border border-slate-100 bg-slate-100 shadow-md",
                  "flex flex-col p-8",
                  "font-yumin",
                )}
                ref={bref}
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
                        className="min-w-4 cursor-pointer bg-transparent focus:outline-1 focus:outline-sky-500 focus:ring-1 focus:ring-sky-500"
                        value={book.price}
                        onChange={(e) => {
                          setBook({ ...book, price: parseInt(e.target.value, 10) });
                        }}
                      />
                      <span className="flex-none">円(税別)</span>
                    </label>
                  </div>
                  <textarea
                    name="summary"
                    className="cursor-pointer resize-none bg-transparent text-sm focus:outline-1 focus:outline-sky-500 focus:ring-1 focus:ring-sky-500"
                    rows={12}
                    value={book.summary}
                    onChange={(e) => {
                      setBook({ ...book, summary: e.target.value });
                    }}
                  />
                </div>
                <div className="mb-4 h-px w-full bg-gray-400" />
                <div className="flex flex-col">
                  <div className="flex items-center text-base">
                    <span className="flex-none">FAKE-ISBN</span>
                    <InputOTP
                      name="otp"
                      className="cursor-pointer"
                      maxLength={13}
                      value={book.id}
                      onChange={(value) => {
                        setBook({ ...book, id: value });
                      }}
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
                  <div className="text-sm flex items-center gap-0.5">
                    {book.edition >= 1 && "改訂"}
                    <input 
                      type="number"
                      className={cn(
                        "cursor-pointer bg-transparent",
                        book.edition === 0 && "text-transparent",
                        "w-10 text-center ",
                      )}
                      max={1000}
                      min={0}
                      step={1}
                      value={book.edition}
                      onChange={(e) => {
                        setBook({ ...book, edition: parseInt(e.target.value, 10) });
                      }}
                      />
                    {book.edition >= 1 && "版"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <UploadFileForm />
        <ZoomCustomizer />
      </div>
      <ControlPanel />
    </main>
  );
};

export default Home;
