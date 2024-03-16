import lume from "lume/mod.ts";
import unocss from "lume/plugins/unocss.ts";
import unocssConfig from "./uno.config.ts";
import preact from "lume/plugins/jsx_preact.ts";

const site = lume();

site.use(unocss({
  // @ts-ignore invalid type
  options: unocssConfig,
}));
site.use(preact());

export default site;
