import type { P5CanvasInstance } from "@p5-wrapper/react";

export default function flowSketch(p5: P5CanvasInstance) {
  p5.windowResized = () => {
    p5.resizeCanvas(innerWidth, innerHeight);
  };

  p5.setup = () => {
    p5.createCanvas(innerWidth, innerHeight);
    p5.frameRate(20);
    p5.textSize(40);
  };

  p5.draw = () => {
    const t = p5.frameCount;

    p5.clear();
    p5.noFill();
    p5.strokeWeight(400);

    for (let y = -200; y < innerHeight + 200; y += 100) {
      const prop1 = p5.noise(t * 0.03 + y);
      const prop2 = p5.noise(t * 0.03 - y);
      const values = [1 - prop1 - prop2, prop1, prop2];
      values.forEach((value, i) => {
        values[i] = 180 + value * 75;
      });

      p5.push();
      p5.stroke(values);
      p5.beginShape();
      for (let x = -200; x < innerWidth + 200; x += 100) {
        p5.curveVertex(x, y + Math.cos(Math.sqrt(y) + x ** 3 + t * 0.01) * 50);
      }
      p5.endShape();
      p5.pop();
    }
  };
}
