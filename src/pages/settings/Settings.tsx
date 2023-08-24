import { useAtom } from "jotai";
import Select, { SingleValue } from "react-select";
import { updateSettingsAtom } from "../../store";

const sketchOptions = [{ value: "star", label: "Star" }];

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
      <Select
        className="text-dark"
        options={sketchOptions}
        onChange={(
          e: SingleValue<{
            value: string;
            label: string;
          }>
        ) => updateSettings(e!.value)}
      />
    </div>
  );
}
