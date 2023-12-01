import { useAtom } from "jotai";
import { updateSettingsAtom } from "../../store";
import { Dropdown } from "flowbite-react";

const sketchOptions: {
  value: string;
  label: string;
}[] = [
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
        bg="transparent"
        text="orange50 hover:orange2"
        border="solid 0 l-2 orange1"
        font="serif"
      >
        {sketchOptions.map((option) => (
          <Dropdown.Item
            key={option.value}
            onClick={() => updateSettings(option.value)}
            bg="transparent"
            text="orange50 hover:orange200"
            border="none"
            font="serif"
          >
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
}
