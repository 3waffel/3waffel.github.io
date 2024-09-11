import { Sketch } from "@p5-wrapper/react";
import { flowSketch } from "./Flow";
import { spireSketch } from "./Spire";
import { starSketch } from "./Star";

export enum SketchEnum {
  None,
  Star,
  Flow,
  Spire,
}

export const getSketch = (sketch: SketchEnum) => {
  const sketchMapper: Record<SketchEnum, Sketch> = {
    [SketchEnum.None]: null,
    [SketchEnum.Star]: starSketch,
    [SketchEnum.Flow]: flowSketch,
    [SketchEnum.Spire]: spireSketch,
  };
  return sketchMapper[sketch];
};
