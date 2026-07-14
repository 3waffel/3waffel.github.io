import { Label, Radio } from "flowbite-react";
import { useAtom } from "jotai";
import { sketchMapper } from "../../sketches";
import { settingsAtom } from "../../store";

const sketchOptions = Object.keys(sketchMapper) as Array<
  keyof typeof sketchMapper
>;

export default function Settings() {
  const [settings, updateSettings] = useAtom(settingsAtom);

  return (
    <div className="outlet">
      <h2 className="h-auto">Settings</h2>
      <fieldset className="fieldset flex flex-col gap-2" name="sketchOptions">
        <legend font="serif bold">Sketches</legend>
        {sketchOptions.map((sketchOption) => (
          <div
            key={sketchOption}
            className="pl-3 flex items-center gap-2"
            text="orange50 hover:orange2"
          >
            <Radio
              className="w4 h4 m0 accent-amber appearance-none b-style-solid b-1 checked-b-orange2 checked-bg-orange2"
              value={sketchOption}
              name="sketchOptions"
              onClick={() => updateSettings({ ...settings, sketchOption })}
            />
            <Label htmlFor={sketchOption}>{sketchOption}</Label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}
