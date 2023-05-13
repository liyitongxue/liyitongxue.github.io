import { defineClientConfig } from "@vuepress/client";
import Presentation from "E:/codes/blog/liyitongxue.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "E:/codes/blog/liyitongxue.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
    
  }
});