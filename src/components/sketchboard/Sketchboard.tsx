import Sketch from "react-p5";
import { useAtom } from "jotai";
import { settingsAtom } from "../../store";
import { initFlowSketch, initSpireSketch, initStarSketch } from "./Sketches";

export default function Sketchboard() {
  const [settings] = useAtom(settingsAtom);
  const { setup, draw } = (() => {
    switch (settings.sketchOptionValue) {
      case "star":
        return initStarSketch();
      case "flow":
        return initFlowSketch();
      case "spire":
        return initSpireSketch();
      default:
        return initStarSketch();
    }
  })();

  return <Sketch setup={setup} draw={draw} />;
}
