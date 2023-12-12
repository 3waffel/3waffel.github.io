import p5Types from "p5";

let t = 0;

export function initSpireSketch() {
  const element = (p5: p5Types, value: string) => {
    p5.push();
    p5.fill(value);
    p5.text("あ", 0, 0);
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
    for (let i = 0; i < 30; i++) {
      const speed = i * 0.01,
        scale = Math.log10(i) * 300;
      for (let j = 0; j < i ** 0.5; j++) {
        p5.push();
        p5.textSize(Math.sin(t * 0.1 + j) * i * 5 + 20);
        p5.translate(innerWidth / 2, innerHeight / 2);
        p5.translate(Math.sin(i + j / 3) * scale, Math.cos(i + j / 3) * scale);
        element(p5, "102");
        p5.pop();
      }
    }
    t += 1;
  };
  return { setup, draw };
}
