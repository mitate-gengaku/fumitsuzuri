import { Edit2Icon, FileIcon, PanelRightIcon, PlayIcon } from "lucide-react";

import { ZoomCustomizer } from "@/components/control/customize/zoom";
import { ControlPanel } from "@/components/control/panel/control-panel";
import { UploadFileForm } from "@/components/form/upload-file-form";
import { Spinner } from "@/components/loading/spinner";
import { BackPage } from "@/components/read-book/components/back-page";
import { FrontPage } from "@/components/read-book/components/front-page";
import { ReadBook } from "@/components/read-book/components/read-book";
import { Button } from "@/components/ui/button";
import { useColor } from "@/hooks/use-color";
import { useControlPanel } from "@/hooks/use-control-panel";
import { useCreateBook } from "@/hooks/use-create-book";
import { useFile } from "@/hooks/use-file";
import { useSetScreenshotUrl } from "@/hooks/use-set-screenshot-url";
import { useToggleBookMode } from "@/hooks/use-toggle-book-mode";
import { useToggleForm } from "@/hooks/use-toggle-form";
import { cn } from "@/utils/cn";
import { hexToRGB } from "@/utils/hex-to-rgb";

const Home = () => {
  const { color } = useColor("background");
  const { toggleOpen } = useControlPanel();
  const { show, toggleShow } = useToggleForm();
  const { file } = useFile();
  const { mode } = useToggleBookMode();
  const { book } = useCreateBook();
  const {
    isLoading,
    frontRef,
    backRef,
    frontPhoto,
    backPhoto,
    takeScreenshot,
  } = useSetScreenshotUrl();

  return (
    <main
      className="flex h-screen w-screen overflow-hidden bg-gray-50 dark:!bg-gray-900"
      style={{
        backgroundColor: hexToRGB(color.color, color.opacity),
      }}
    >
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
            onClick={async () => await takeScreenshot()}
            className="absolute right-28 top-4 z-10"
          >
            {mode ? (
              <>{isLoading ? <Spinner className="size-4" /> : <PlayIcon />}</>
            ) : (
              <Edit2Icon />
            )}
          </Button>
        )}
        {!show && !mode && frontPhoto && backPhoto && file && (
          <ReadBook
            frontScreenshotUrl={frontPhoto}
            backScreenshotUrl={backPhoto}
            content={book.content}
          />
        )}
        {!show && !frontPhoto && !backPhoto && file && (
          <div className="relative mx-auto flex h-full w-fit">
            <div
              className={cn("flex select-none items-center dark:text-gray-900")}
            >
              <FrontPage ref={frontRef} />
              <BackPage ref={backRef} />
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
