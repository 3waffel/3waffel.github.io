import { atom } from "jotai";

export enum BackgroundEnum {
  None,
  Star,
  Flow,
  Spire,
}

type SettingsType = {
  backgroundOptionValue: BackgroundEnum;
};

export const settingsAtom = atom<SettingsType>({
  backgroundOptionValue: null,
});

export const updateSettingsAtom = atom(
  () => "",
  (get, set, backgroundOptionValue: BackgroundEnum) => {
    const ns = { ...get(settingsAtom), backgroundOptionValue };
    set(settingsAtom, ns);
  }
);
