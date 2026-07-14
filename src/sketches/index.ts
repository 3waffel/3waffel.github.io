import type { Sketch } from "@p5-wrapper/react";
import flowSketch from "./Flow";
import shaderDemoSketch from "./ShaderDemo";
import spireSketch from "./Spire";
import starSketch from "./Star";

export const sketchMapper = {
  Void: null,
  FallingStars: starSketch,
  Flowing: flowSketch,
  Spiral: spireSketch,
  ShaderDemo: shaderDemoSketch,
} as const;

export function getSketch(sketch: keyof typeof sketchMapper): Sketch | null {
  return sketchMapper[sketch];
}
