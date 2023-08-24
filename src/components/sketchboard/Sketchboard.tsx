import Sketch from "react-p5";
import p5Types from "p5";
import { useAtom } from "jotai";
import { settingsAtom } from "../../store";

let t = 0;

function initStarSketch() {
  const element = (p5: p5Types, value: string) => {
    p5.push();
    p5.fill(value);
    p5.text("✨", 0, 0);
    p5.pop();
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(innerWidth, innerHeight).parent(canvasParentRef);
    p5.frameRate(10);
    p5.textSize(40);
    p5.windowResized = () => {
      p5.resizeCanvas(innerWidth, innerHeight);
    };
  };

  const draw = (p5: p5Types) => {
    p5.noStroke();
    p5.background(17, 24, 39, 50);
    for (let x = 0; x < innerWidth; x += 400) {
      for (let y = 0; y < innerHeight; y += 200) {
        p5.push();
        p5.translate(Math.tan(t) * -100, Math.tan(t) * -100);
        p5.translate(Math.random() * 50, Math.random() * 50);
        p5.translate(x, y);
        element(p5, "102");
        p5.pop();
      }
    }
    t += 1;
  };
  return { setup, draw };
}

export default function Sketchboard() {
  const [settings] = useAtom(settingsAtom);
  const { setup, draw } = (() => {
    switch (settings.sketchOptionValue) {
      case "star":
        return initStarSketch();
      default:
        return initStarSketch();
    }
  })();

  return <Sketch setup={setup} draw={draw} />;
}
