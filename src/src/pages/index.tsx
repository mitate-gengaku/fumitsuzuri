import { CloudUploadIcon, FileIcon, PanelRightIcon, XIcon } from "lucide-react";

import { ZoomCustomizer } from "@/components/control/customize/zoom";
import { ControlPanel } from "@/components/control/panel/control-panel";
import { Button } from "@/components/ui/button";
import { useControlPanel } from "@/hooks/use-control-panel";
import { Label } from "@/components/ui/label";
import { useToggleForm } from "@/hooks/use-toggle-form";
import { DragAndDropZone } from "@/components/control/form/drag-and-drop-zone";

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
        <DragAndDropZone />
        <ZoomCustomizer />
      </div>
      <ControlPanel />
    </main>
  );
};

export default Home;
