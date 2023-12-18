import Sketch from "react-p5";
import { useAtom } from "jotai";
import { settingsAtom, BackgroundEnum } from "../../store";
import { initFlowSketch, initSpireSketch, initStarSketch } from "../sketches";
import { useEffect } from "react";

const updateParams = (value: BackgroundEnum) => {
  switch (value) {
    case BackgroundEnum.None:
      return { setup: null, draw: null };
    case BackgroundEnum.Star:
      return initStarSketch();
    case BackgroundEnum.Flow:
      return initFlowSketch();
    case BackgroundEnum.Spire:
      return initSpireSketch();
    default:
      return initStarSketch();
  }
};

export default function Sketchboard() {
  const [settings] = useAtom(settingsAtom);
  const { setup, draw } = updateParams(settings.backgroundOptionValue);

  useEffect(() => undefined, [settings.backgroundOptionValue]);

  return setup && draw ? <Sketch setup={setup} draw={draw} /> : <></>;
}
