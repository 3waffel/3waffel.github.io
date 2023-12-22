import p5Types from "p5";

let t = 0;

// parameters
// const choices = ["あ", "い", "う", "え", "お"];
let duration = 150;
let speed = 0.03;
let interval = 10;
const radius = (size) => size * 10;
const x = (offset, size) => Math.atan(Math.cos(offset * speed)) * radius(size);
const y = (offset, size) => Math.atan(Math.sin(offset * speed)) * radius(size);

export function initSpireSketch() {
  const element = (p5: p5Types) => {
    const salt = (max = 1, seed = 0) => p5.noise(Math.random() + seed) * max;
    let color = [salt(55) + 200, salt(55) + 200, salt(55) + 200];
    // let index = Math.floor(salt(choices.length));
    // let c = choices[index];
    let c = ".";
    p5.push();
    p5.fill(color);
    p5.text(c, 0, 0);
    p5.pop();
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(innerWidth, innerHeight).parent(canvasParentRef);
    p5.frameRate(20);
    p5.windowResized = () => {
      p5.resizeCanvas(innerWidth, innerHeight);
    };
  };

  const draw = (p5: p5Types) => {
    p5.noStroke();
    p5.clear();
    p5.translate(innerWidth / 2, innerHeight / 2);

    for (let i = 0; i < 1000; i += interval) {
      let offset = t + i;
      let size = offset % duration;
      p5.push();
      p5.textSize(size);
      p5.translate(
        x(offset, size) + p5.noise(i) * 500,
        y(offset, size) + p5.noise(i) * 500
      );
      element(p5);
      p5.pop();
    }

    t += 1;
  };
  return { setup, draw };
}
