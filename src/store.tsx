import { atomWithStorage } from "jotai/utils";
import { atomWithQuery } from "jotai-tanstack-query";
import { SketchEnum } from "./sketches";

type SettingsType = {
  sketchOption: SketchEnum;
};

export const settingsAtom = atomWithStorage<SettingsType>("settings", {
  sketchOption: SketchEnum.None,
});

export const linksAtom = atomWithQuery((get) => ({
  queryKey: [],
  queryFn: async () => {
    const res = await fetch(
      "https://api.github.com/gists/1fda54edefabc5f416031a3546ce1611"
    ).then((result) => result.json());
    const content = res.files["links.json"].content;
    return JSON.parse(content);
  },
}));
