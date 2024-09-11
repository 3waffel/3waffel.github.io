import { P5CanvasInstance } from "@p5-wrapper/react";

let t = 0;

export function flowSketch(p5: P5CanvasInstance) {
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
    p5.noFill();
    p5.strokeWeight(200);

    for (let y = -200; y < innerHeight + 200; y += 100) {
      p5.push();
      p5.stroke(
        180 + p5.noise(y + 10 + t * 0.03) * 75,
        180 + p5.noise(y + 20 + t * 0.03) * 75,
        180 + p5.noise(y + 30 + t * 0.03) * 75
      );
      p5.beginShape();
      for (let x = -200; x < innerWidth + 200; x += 100) {
        p5.curveVertex(x, y + Math.cos(y + x + t * 0.01) * 50);
      }
      p5.endShape();
      p5.pop();
    }
    t += 1;
  };
}
