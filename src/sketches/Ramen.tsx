import { P5CanvasInstance } from "@p5-wrapper/react";

export function ramenSketch(p5: P5CanvasInstance) {
  p5.windowResized = () => {
    p5.resizeCanvas(innerWidth, innerHeight);
  };

  p5.setup = () => {
    p5.createCanvas(innerWidth, innerHeight);
    p5.frameRate(20);
    p5.textSize(40);
  };

  function bottom() {
    p5.push();
    p5.translate(innerWidth / 2, innerHeight / 1.4);

    // bowl?
    p5.push();
    let h = 0;
    let gap = Math.max(30, 30 * (innerWidth / 720));
    for (let r = innerWidth * 0.9; r > 0; r -= gap) {
      p5.fill(220, 40 + h, 40 + h);
      p5.ellipse(0, 0, r, r / 1.2);
      h = (h + 5) % 360;
    }

    // decorating?
    p5.noStroke()
    p5.fill(50, 80, 60)
    p5.rotate(30, [-1, 0, 1])
    p5.rect(innerWidth * 0.2, innerWidth * 0.01, innerWidth * 0.4 ,  innerWidth * 0.3 )
    p5.pop();

    // soup?
    p5.push();
    p5.noStroke();
    p5.fill(235, 220, 200, 200);
    p5.ellipse(0, 0, innerWidth * 0.7, (innerWidth * 0.7) / 1.2);
    p5.pop();

    p5.pop();
  }

  function middle(t) {
    p5.push();
    p5.translate(innerWidth / 2, innerHeight / 1.4);

    // noodle?
    p5.push();
    p5.noFill();
    p5.strokeWeight(3 * (innerWidth / 720));
    p5.strokeJoin(p5.ROUND);
    p5.strokeCap(p5.ROUND);
    p5.stroke(256);
    p5.beginShape();
    let scale = 5;
    let width = innerWidth * 0.3;
    let length = 300;
    for (let i = 0; i < length; i++) {
      const xpos = (p5.sin(i / 1.001) / scale) * width;
      const ypos = (p5.cos(i / 0.991) / scale) * (width / 1.2);
      p5.curveVertex(xpos, ypos);
      scale = scale ** ((Math.sin(t / 50) / 200 + 1.98) / 2);
    }
    p5.endShape();
    p5.pop();

    p5.pop();
  }

  function top(t) {
    p5.push();

    p5.translate(innerWidth / 2, innerHeight / 1.4);
    const xpos = (p5.sin(t / 50) * innerWidth) / 10;
    const ypos = (Math.abs(p5.tan(t / 20)) * innerWidth) / 4;
    let x1 = -(innerWidth * 0.5);
    let y1 = -(innerWidth * 0.5);
    let x2 = x1 + 30;
    let y2 = y1 - 70;

    p5.push();
    p5.noFill();
    p5.strokeWeight(p5.tan(t / 20) < 0 ? 0 : 2 * (innerWidth / 720));
    p5.strokeCap(p5.ROUND);
    p5.stroke(256);
    p5.beginShape();
    for (let i = 0; i < 100; i += 5) {
      p5.line(i / 2, i / 2, xpos + i, ypos + i);
    }
    p5.endShape();
    p5.pop();

    p5.translate(xpos, ypos);

    // chopsticks?
    p5.push();
    p5.strokeWeight(9 * (innerWidth / 720));
    p5.strokeCap(p5.SQUARE);
    p5.stroke(40, 30, 30, 200);
    p5.line(x1, y1, -x1 * 0.1, -y1 * 0.1);
    p5.line(x2, y2, -x2 * 0.1, -y2 * 0.1);
    p5.pop();

    p5.pop();
  }

  p5.draw = () => {
    const t = p5.frameCount;
    p5.clear();

    bottom();
    middle(t);
    top(t);
  };
}
