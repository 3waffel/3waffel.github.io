import { useAtom } from "jotai";
import { settingsAtom } from "../../store";
import { getSketch } from "../../sketches";
import { useEffect } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

export default function SketchContainer() {
  const [settings] = useAtom(settingsAtom);
  const sketch = getSketch(settings.sketchOption);

  useEffect(() => undefined, [settings.sketchOption]);

  return sketch && <ReactP5Wrapper sketch={sketch} />;
}
