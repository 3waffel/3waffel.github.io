import { atom } from "jotai";

type SettingsType = {
  sketchOptionValue: string;
};

export const settingsAtom = atom<SettingsType>({ sketchOptionValue: "" });

export const updateSettingsAtom = atom(
  () => "",
  (get, set, sketchOptionValue: string) => {
    const ns = { ...get(settingsAtom), sketchOptionValue };
    set(settingsAtom, ns);
  }
);
