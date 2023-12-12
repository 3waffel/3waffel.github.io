import Sketch from "react-p5";
import { useAtom } from "jotai";
import { settingsAtom } from "../../store";
import { initFlowSketch, initSpireSketch, initStarSketch } from "../sketches";
import { useEffect } from "react";

const updateParams = (value: string) => {
  switch (value) {
    case "none":
      return { setup: null, draw: null };
    case "star":
      return initStarSketch();
    case "flow":
      return initFlowSketch();
    case "spire":
      return initSpireSketch();
    default:
      return initStarSketch();
  }
};

export default function Sketchboard() {
  const [settings] = useAtom(settingsAtom);
  const { setup, draw } = updateParams(settings.sketchOptionValue);

  useEffect(() => undefined, [settings.sketchOptionValue]);

  return setup && draw ? <Sketch setup={setup} draw={draw} /> : <></>;
}
