import { useAtom } from "jotai";
import { settingsAtom } from "../../store";
import { Dropdown, Radio, Label } from "flowbite-react";
import { SketchEnum } from "../../sketches";

const sketchOptions = Object.keys(SketchEnum).filter((e) =>
  isNaN(Number(e))
) as Array<keyof typeof SketchEnum>;

export default function Settings() {
  const [settings, updateSettings] = useAtom(settingsAtom);

  return (
    <div
      className="min-w-60 p-5 pt-3 gap-3"
      flex="~ col"
      text="orange50"
      font="serif"
    >
      <h2 className="h-auto">Settings</h2>
      <fieldset
        className="fieldset flex max-w-md flex-col gap-2"
        name="sketchOptions"
      >
        <legend font="serif bold">Sketches</legend>
        {sketchOptions.map((option, i) => (
          <div
            key={i}
            className="flex items-center gap-1"
            text="orange50 hover:orange2"
          >
            <Radio
              className="w-4 accent-amber"
              value={option}
              name="sketchOptions"
              onClick={() => updateSettings({ ...settings, sketchOption: i })}
            />
            <Label htmlFor={option} font="italic">{option}</Label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}
