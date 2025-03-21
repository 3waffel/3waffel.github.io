import { atomWithStorage, loadable } from "jotai/utils";
import { SketchEnum } from "./sketches";
import { atomWithCache } from "jotai-cache";

type SettingsType = {
  sketchOption: SketchEnum;
};

export const settingsAtom = atomWithStorage<SettingsType>("settings", {
  sketchOption: SketchEnum.None,
});

export const linksAtom = atomWithCache(async (get) => {
  const res = await fetch(
    "https://gist.githubusercontent.com/3waffel/1fda54edefabc5f416031a3546ce1611/raw/links.json"
  ).then((result) => result.json());
  return res;
});

export const getLinksAtom = loadable(linksAtom);
