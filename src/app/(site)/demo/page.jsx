import PlanetScene from "@/components/home/heroSection/PlanetScene";
import dynamic from "next/dynamic";

// const PlanetScene = dynamic(() => import("@/models/PlanetScene"), {
//   ssr: false,
// });

export default function Page() {
  return (
    <div className="planet_section" style={{ width: "100vw", height: "100vh" }}>
      <PlanetScene />
      
    </div>
  );
}
