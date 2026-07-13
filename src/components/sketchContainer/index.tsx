import { ReactP5Wrapper } from "@p5-wrapper/react";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { getSketch } from "../../sketches";
import { settingsAtom } from "../../store";

export default function SketchContainer() {
  const [settings] = useAtom(settingsAtom);
  const sketch = getSketch(settings.sketchOption);

  useEffect(() => undefined, [settings.sketchOption]);

  return sketch && <ReactP5Wrapper sketch={sketch} />;
}
