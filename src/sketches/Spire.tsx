import { P5CanvasInstance } from "@p5-wrapper/react";

// parameters
// const choices = ["あ", "い", "う", "え", "お"];
const duration = 150;
const speed = 0.03;
const interval = 10;
const radius = (size) => size * 10;
const x = (offset, size) => Math.atan(Math.cos(offset * speed)) * radius(size);
const y = (offset, size) => Math.atan(Math.sin(offset * speed)) * radius(size);

export function spireSketch(p5: P5CanvasInstance) {
  const element = (p5: P5CanvasInstance) => {
    const salt = (max = 1, seed = 0) => p5.noise(Math.random() + seed) * max;
    const color = [salt(55) + 200, salt(55) + 200, salt(55) + 200];
    const c = ".";
    p5.push();
    p5.fill(color);
    p5.text(c, 0, 0);
    p5.pop();
  };

  p5.windowResized = () => {
    p5.resizeCanvas(innerWidth, innerHeight);
  };

  p5.setup = () => {
    p5.createCanvas(innerWidth, innerHeight);
    p5.frameRate(20);
  };

  p5.draw = () => {
    const t = p5.frameCount;

    p5.noStroke();
    p5.clear();
    p5.translate(innerWidth / 2, innerHeight / 2);

    for (let i = 0; i < 1000; i += interval) {
      const offset = t + i;
      const size = offset % duration;
      p5.push();
      p5.textSize(size);
      p5.translate(
        x(offset, size) + p5.noise(i) * 500,
        y(offset, size) + p5.noise(i) * 500
      );
      element(p5);
      p5.pop();
    }
  };
}
