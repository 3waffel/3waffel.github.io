import { useAtom } from "jotai";
import { updateSettingsAtom } from "../../store";
import { Dropdown } from "flowbite-react";

const sketchOptions: {
  value: string;
  label: string;
}[] = [
  { value: "none", label: "None" },
  { value: "star", label: "Star" },
  { value: "flow", label: "Flow" },
  { value: "spire", label: "Spire" },
];

export default function Settings() {
  const [, updateSettings] = useAtom(updateSettingsAtom);
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
        {sketchOptions.map((option) => (
          <Dropdown.Item
            key={option.value}
            onClick={() => updateSettings(option.value)}
            className="pt-2 pb-2 bg-transparent"
            text="orange50 hover:orange200"
            border="dashed 0 t-2 orange1"
            font="serif"
          >
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
}
