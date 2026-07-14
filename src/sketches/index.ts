import type { Sketch } from "@p5-wrapper/react";
import { flowSketch } from "./Flow";
import { shaderDemoSketch } from "./ShaderDemo";
import { spireSketch } from "./Spire";
import { starSketch } from "./Star";

export enum SketchEnum {
  Void,
  FallingStars,
  Flowing,
  Spiral,
  // Ramen,
  ShaderDemo,
}

export const getSketch = (sketch: SketchEnum) => {
  const sketchMapper: Record<SketchEnum, Sketch | null> = {
    [SketchEnum.Void]: null,
    [SketchEnum.FallingStars]: starSketch,
    [SketchEnum.Flowing]: flowSketch,
    [SketchEnum.Spiral]: spireSketch,
    [SketchEnum.ShaderDemo]: shaderDemoSketch,
    // [SketchEnum.Ramen]: ramenSketch,
  };
  return sketchMapper[sketch];
};
