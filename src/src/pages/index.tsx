import { ZoomCustomizer } from "@/components/control/customize/zoom";
import { ControlPanel } from "@/components/control/panel/control-panel";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useControlPanel } from "@/hooks/use-control-panel";
import { cn } from "@/utils/cn";
import { PanelRightIcon } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const {
    toggleOpen
  } = useControlPanel();
  
  return (
    <main className="w-screen h-screen overflow-hidden relative flex bg-gray-50">
      <div className="w-full h-full flex p-4">
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={() => toggleOpen()}
          className="ml-auto"
          >
          <PanelRightIcon />
        </Button>
        <ZoomCustomizer />
      </div>
      <ControlPanel />
    </main>
  )
};

export default Home;
