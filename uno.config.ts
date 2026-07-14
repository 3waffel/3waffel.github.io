import {
  defineConfig,
  presetAttributify,
  presetWebFonts,
  presetWind3,
} from "unocss";

export default defineConfig({
  rules: [],
  presets: [
    presetWind3(),
    presetAttributify(),
    presetWebFonts({
      provider: "none",
      fonts: {
        sans: "Libertinus Sans",
        serif: "Libertinus Serif",
        mono: "Libertinus Mono",
      },
    }),
  ],
  shortcuts: {
    fieldset: "border-2 border-solid border-orange50",
    outlet:
      "max-w-160 w-full p-5 pt-3 gap-3 flex flex-col overflow-y-auto text-orange50 font-sans",
  },
});
