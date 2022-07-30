import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch"; // 导入dosearch
import theme from "./theme";

export default defineUserConfig({

	plugins: [

		// dosearch配置
		// docsearchPlugin({
		// 	apiKey: '<API_KEY>',
		// 	indexName: '<INDEX_NAME>',
		// 	locales: {
		// 		'/': {
		// 			placeholder: '搜索',
		// 			translations: {
		// 				button: {
		// 					buttonText: '搜索',
		// 				},
		// 			},
		// 		},
		// 		'/en/': {
		// 			placeholder: 'Search',
		// 			translations: {
		// 				button: {
		// 					buttonText: 'Search',
		// 				},
		// 			},
		// 		},
		// 	},
		// }),
	],


	base: "/",

	locales: {
		"/": {
			lang: "zh-CN",
			title: "LIYITONGXUE",
			description: "LIYITONGXUE 的主页",
		},
		"/en/": {
			lang: "en-US",
			title: "LIYITONGXUE",
			description: "LIYITONGXUE's HomePage",
		},
	},

	theme,



});
