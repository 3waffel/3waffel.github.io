import type { P5CanvasInstance } from "@p5-wrapper/react";

export default function sketch(p5: P5CanvasInstance) {
  p5.windowResized = () => {
    p5.resizeCanvas(innerWidth, innerHeight);
  };

  p5.setup = () => {
    p5.createCanvas(innerWidth, innerHeight);
    p5.frameRate(20);
  };

  p5.draw = () => {
    p5.clear();
    p5.noStroke();
  };
}
