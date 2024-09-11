import { P5CanvasInstance } from "@p5-wrapper/react";
import vertShader from "../glsl/main.vert";
import fragShader from "../glsl/main.frag";

export function shaderDemoSketch(p5: P5CanvasInstance) {
  let _shader;

  p5.preload = () => {
    _shader = p5.createShader(vertShader, fragShader);
  };

  p5.windowResized = () => {
    p5.resizeCanvas(innerWidth, innerHeight);
  };

  p5.setup = () => {
    p5.createCanvas(innerWidth, innerHeight, p5.WEBGL);

    p5.shader(_shader);
    _shader.setUniform("colorCenter", [1.0, 0.5, 0.0]);
    _shader.setUniform("colorBackground", [0.226, 0.0, 0.615]);
  };

  p5.draw = () => {
    _shader.setUniform("offset", [0, p5.sin(p5.frameCount * 0.01) + 1]);

    p5.quad(-1, -1, 1, -1, 1, 1, -1, 1);
  };
}
