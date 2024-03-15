import lume from "lume/mod.ts";
import unocss from "lume/plugins/unocss.ts";
import { presetWind } from "@unocss/preset-wind";

const site = lume();

site.use(unocss({
  options: {
    presets: [
      presetWind({
        prefix: "un-",
      }),
    ],
  },
}));

export default site;
