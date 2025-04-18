import { P5CanvasInstance } from "@p5-wrapper/react";
import vertShader from "../glsl/main.vert";
import fragShader from "../glsl/main.frag";
import { Shader } from "p5";

export function shaderDemoSketch(p5: P5CanvasInstance) {
  let _shader: Shader;

  p5.preload = () => {
    _shader = p5.createShader(vertShader, fragShader);
  };

  p5.windowResized = () => {
    p5.resizeCanvas(innerWidth, innerHeight);
    _shader.setUniform("resolution", [innerWidth, innerHeight]);
  };

  p5.setup = () => {
    p5.createCanvas(innerWidth, innerHeight, p5.WEBGL);
    p5.shader(_shader);
    _shader.setUniform("resolution", [innerWidth, innerHeight]);
  };

  p5.draw = () => {
    _shader.setUniform("time", p5.frameCount / 1000);
    p5.quad(-1, -1, 1, -1, 1, 1, -1, 1);
  };
}
