import { PanelRightIcon } from "lucide-react";

import { ZoomCustomizer } from "@/components/control/customize/zoom";
import { ControlPanel } from "@/components/control/panel/control-panel";
import { Button } from "@/components/ui/button";
import { useControlPanel } from "@/hooks/use-control-panel";

const Home = () => {
  const { toggleOpen } = useControlPanel();

  return (
    <main className="flex h-screen w-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="relative flex h-full w-full p-4">
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={() => toggleOpen()}
          className="absolute right-4 top-4"
        >
          <PanelRightIcon />
        </Button>
        <ZoomCustomizer />
      </div>
      <ControlPanel />
    </main>
  );
};

export default Home;
