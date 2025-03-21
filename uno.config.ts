import { defineConfig, presetWind3, presetAttributify } from "unocss";

export default defineConfig({
  rules: [],
  presets: [presetWind3(), presetAttributify()],
  shortcuts: {
    fieldset: "border-2 border-solid border-orange50"
  },
});
