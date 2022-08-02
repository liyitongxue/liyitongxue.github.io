import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "E:/codes/blog/liyitongxue.github.io/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-pwa2@2.0.0-beta.87/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup";
import SWUpdatePopup from "E:/codes/blog/liyitongxue.github.io/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-pwa2@2.0.0-beta.87/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});