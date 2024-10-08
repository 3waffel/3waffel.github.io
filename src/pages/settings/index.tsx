import { useAtom } from "jotai";
import { settingsAtom } from "../../store";
import { Dropdown } from "flowbite-react";
import { SketchEnum } from "../../sketches";

const sketchOptions = Object.keys(SketchEnum).filter((e) =>
  isNaN(Number(e))
) as Array<keyof typeof SketchEnum>;

export default function Settings() {
  const [settings, updateSettings] = useAtom(settingsAtom);

  return (
    <div
      className="min-w-60 p-5 pt-3"
      flex="~ col"
      text="orange50"
      font="serif"
    >
      <h2 className="h-auto">Settings</h2>
      <Dropdown
        label="Background"
        p="t-2"
        bg="transparent"
        text="orange50 hover:orange2"
        border="dashed 0 t-2 orange1"
        font="serif bold"
      >
        {sketchOptions.map((option, i) => (
          <Dropdown.Item
            key={i}
            onClick={() => updateSettings({ ...settings, sketchOption: i })}
            className="pt-2 pb-2 bg-transparent"
            text="orange50 hover:orange200"
            border="dashed 0 t-2 orange1"
            font="serif"
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
}
