import { defineConfig, type UserConfig } from "unocss";
import { presetWind } from "@unocss/preset-wind";

export const unocssConfig: UserConfig = {
  presets: [
    // @ts-ignore invalid type
    presetWind({
      prefix: "un-",
    }),
  ],
};

export default defineConfig(unocssConfig);
