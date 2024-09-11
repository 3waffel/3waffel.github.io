import { P5CanvasInstance } from "@p5-wrapper/react";

let t = 0;

export function starSketch(p5: P5CanvasInstance) {
  const element = (p5: P5CanvasInstance, value) => {
    p5.push();
    p5.fill(value);
    p5.text(Math.random() > 0.5 ? "✨" : "⭐", 0, 0);
    p5.pop();
  };

  p5.setup = () => {
    p5.createCanvas(innerWidth, innerHeight);
    p5.frameRate(20);
    p5.textSize(40);
    p5.windowResized = () => {
      p5.resizeCanvas(innerWidth, innerHeight);
    };
  };

  p5.draw = () => {
    p5.clear();
    for (let x = 0; x < innerWidth; x += 400) {
      for (let y = 0; y < innerHeight; y += 200) {
        p5.push();
        p5.translate(
          Math.tan(x + y + t * 0.03) * 100,
          Math.tan(x + y + t * 0.03) * 100
        );
        p5.translate(x, y);
        element(p5, "102");
        p5.pop();
      }
    }
    t += 1;
  };
}
