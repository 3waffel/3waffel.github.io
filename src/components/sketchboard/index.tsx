import Sketch from "react-p5";
import { useAtom } from "jotai";
import { settingsAtom, BackgroundOption } from "../../store";
import { initFlowSketch, initSpireSketch, initStarSketch } from "../sketches";
import { useEffect } from "react";

const updateParams = (value: BackgroundOption) => {
  switch (value) {
    case BackgroundOption.None:
      return { setup: null, draw: null };
    case BackgroundOption.Star:
      return initStarSketch();
    case BackgroundOption.Flow:
      return initFlowSketch();
    case BackgroundOption.Spire:
      return initSpireSketch();
    default:
      return { setup: null, draw: null };
  }
};

export default function Sketchboard() {
  const [settings] = useAtom(settingsAtom);
  const { setup, draw } = updateParams(settings.backgroundOption);

  useEffect(() => undefined, [settings.backgroundOption]);

  return setup && draw && <Sketch setup={setup} draw={draw} />;
}
