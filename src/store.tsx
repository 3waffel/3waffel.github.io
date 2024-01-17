import { atomWithStorage } from "jotai/utils";

export enum BackgroundOption {
  None,
  Star,
  Flow,
  Spire,
}

type SettingsType = {
  backgroundOption: BackgroundOption;
};

export const settingsAtom = atomWithStorage<SettingsType>("settings", {
  backgroundOption: null,
});
