import { defineConfig, presetWind3, presetAttributify } from "unocss";

export default defineConfig({
  rules: [],
  presets: [presetWind3(), presetAttributify()],
  shortcuts: {
    fieldset: "border-2 border-solid border-orange50",
    outlet: "w-160 p-5 pt-3 gap-3 flex flex-col overflow-y-auto text-orange50 font-serif"
  },
});
