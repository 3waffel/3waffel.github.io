import { P5CanvasInstance } from "@p5-wrapper/react";
import { Vector } from "p5";

export function starSketch(p5: P5CanvasInstance) {
  class Particle {
    x: number;
    y: number;
    seed: number;
    velocity: number;
    history: Vector[] = [];
    // reverse diagonal
    rdFactor: number = -(innerHeight / innerWidth);
    inclination: number;
    farPoint: Vector = new Vector(-innerWidth, -innerHeight);

    constructor(seed) {
      this.x = p5.random(-innerWidth, innerWidth);
      this.y = this.rdFactor * this.x;
      this.seed = seed;
      this.velocity = 0;
      this.inclination =
        (this.y - this.farPoint.y) / (this.x - this.farPoint.x);
    }

    update(t) {
      this.velocity += 1;
      this.x += this.velocity;
      this.y += this.inclination * this.velocity;

      let v = p5.createVector(this.x, this.y);
      this.history.push(v);
      if (this.history.length > 10) {
        this.history.splice(0, 1);
      }

      if (this.x > innerWidth || this.y > innerHeight) {
        this.x = p5.random(-innerWidth, innerWidth);
        this.y = this.rdFactor * this.x;
        this.inclination =
          (this.y - this.farPoint.y) / (this.x - this.farPoint.x);
        this.velocity = 0;
        this.history = [];
      }
    }

    show(t) {
      p5.push();
      p5.translate(this.x, this.y);

      p5.stroke(200);
      p5.beginShape();
      for (let i = 0; i < this.history.length; i++) {
        let par = this.history[i];

        p5.noFill();
        p5.vertex(par.x, par.y);
        p5.endShape();
      }
      p5.pop();
    }
  }

  let particles: Particle[] = [];

  p5.windowResized = () => {
    p5.resizeCanvas(innerWidth, innerHeight);
  };

  p5.setup = () => {
    p5.createCanvas(innerWidth, innerHeight);
    p5.frameRate(20);
    p5.textSize(40);
    for (let i = 0; i < innerHeight * innerHeight; i += 20000) {
      particles.push(new Particle(p5.noise(i)));
    }
  };

  p5.draw = () => {
    const t = p5.frameCount;
    p5.clear();
    for (let i = 0; i < particles.length; i++) {
      particles[i].show(t);
      particles[i].update(t);
    }
  };
}
