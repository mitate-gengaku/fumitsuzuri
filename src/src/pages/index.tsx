import { Zoom } from "@/components/control/customize/zoom";
import { useZoom } from "@/hooks/use-zoom";

const Home = () => {
  const {} = useZoom();
  return (
    <div className="relative h-screen w-screen p-8 font-noto-sans">
      <Zoom />
    </div>
  );
};

export default Home;
