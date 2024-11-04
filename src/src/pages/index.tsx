import { FileIcon, PanelRightIcon } from "lucide-react";

import { ZoomCustomizer } from "@/components/control/customize/zoom";
import { ControlPanel } from "@/components/control/panel/control-panel";
import { Button } from "@/components/ui/button";
import { useControlPanel } from "@/hooks/use-control-panel";
import { useToggleForm } from "@/hooks/use-toggle-form";
import { UploadFileForm } from "@/components/control/form/upload-file-form";

const Home = () => {
  const { toggleOpen } = useControlPanel();
  const { toggleShow } = useToggleForm()

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
        <UploadFileForm />
        <ZoomCustomizer />
      </div>
      <ControlPanel />
    </main>
  );
};

export default Home;
