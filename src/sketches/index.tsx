import { P5CanvasInstance, Sketch, SketchProps } from "@p5-wrapper/react";
import { flowSketch } from "./Flow";
import { spireSketch } from "./Spire";
import { starSketch } from "./Star";
import { shaderDemoSketch } from "./ShaderDemo";
import { ramenSketch } from "./Ramen";

export enum SketchEnum {
  None,
  Star,
  Flow,
  Spire,
  // Ramen,
  ShaderDemo,
}

export const getSketch = (sketch: SketchEnum) => {
  const sketchMapper: Record<SketchEnum, Sketch> = {
    [SketchEnum.None]: null,
    [SketchEnum.Star]: starSketch,
    [SketchEnum.Flow]: flowSketch,
    [SketchEnum.Spire]: spireSketch,
    [SketchEnum.ShaderDemo]: shaderDemoSketch,
    // [SketchEnum.Ramen]: ramenSketch,
  };
  return sketchMapper[sketch];
};
