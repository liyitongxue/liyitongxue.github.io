import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme({
	hostname: "http://www.liyi.io", // 绑定的域名

	author: {
		name: "LIYITONGXUE", // 作者名
		url: "http://www.liyi.io", // 作者链接
	},

	iconAssets: "iconfont", // 可使用 IconFont 精选图标:https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html

	logo: "/logo.svg",

	darkmode: "toggle", // 深色模式 toggle为 日间和夜间模式切换

	// repo: "vuepress-theme-hope/vuepress-theme-hope", //在导航栏显示一个github图标跳转到此仓库地址

	// docsDir: "demo/src", //文档在仓库中的目录

	pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

	blog: {
		medias: {
			QQ: "http://wpa.qq.com/msgrd?v=3&uin=985434750&site=qq&menu=yes",
			Email: "mailto:liyi@liyitongxue.com",
			GitHub: "https://github.com/liyitongxue",
			Gitee: "https://gitee.com/illl1314",
			// CSDN: [
			// 	"https://blog.csdn.net/qq_42006801",
			// 	"csdn.svg",
			// ],
			// Gitlab: "https://example.com",
			// Baidu: "https://example.com",
			// Bitbucket: "https://example.com",
			// Dingding: "https://example.com",
			// Discord: "https://example.com",
			// Dribbble: "https://example.com",
			// Evernote: "https://example.com",
			// Facebook: "https://example.com",
			// Flipboard: "https://example.com",
			// Gmail: "https://example.com",
			// Instagram: "https://example.com",
			// Lines: "https://example.com",
			// Linkedin: "https://example.com",
			// Pinterest: "https://example.com",
			// Pocket: "https://example.com",
			// Qzone: "https://example.com",
			// Reddit: "https://example.com",
			// Rss: "https://example.com",
			// Steam: "https://example.com",
			// Twitter: "https://example.com",
			// Wechat: "https://example.com",
			// Weibo: "https://example.com",
			// Whatsapp: "https://example.com",
			// Youtube: "https://example.com",
			// Zhihu: "https://example.com",
		},
	},

	locales: {
		"/en/": {
			// navbar
			navbar: navbar.en,

			// sidebar
			sidebar: sidebar.en,

			footer: "Default footer",

			displayFooter: false, // intro.html页面的footer

			blog: {
				description: "A Migrant Worker",
				intro: "/en/intro.html",
			},
		},

		/**
		 * Chinese locale config
		 */
		"/": {
			// navbar
			navbar: navbar.zh,

			// sidebar
			sidebar: sidebar.zh,

			footer: "默认页脚",

			displayFooter: false, // intro.html页面的footer

			blog: {
				description: "小单位普通员工一枚",
				intro: "/intro.html",
			},
		},
	},

	//加密文章
	encrypt: {
		config: {
			"/en/guide/encrypt.html": ["1234"],
			"/guide/encrypt.html": ["1234"],
		},
	},

	plugins: {
		// 禁用 当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新。
		activeHeaderLinks: false,

		blog: {
			autoExcerpt: true, // 自动摘要
		},

		// If you don't need comment feature, you can remove following option
		// The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
		// To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
		comment: {
			/**
			 * Using Giscus
			 */
			provider: "Giscus",
			repo: "vuepress-theme-hope/giscus-discussions",
			repoId: "R_kgDOG_Pt2A",
			category: "Announcements",
			categoryId: "DIC_kwDOG_Pt2M4COD69",

			/**
			 * Using Twikoo
			 */
			// provider: "Twikoo",
			// envId: "https://twikoo.ccknbc.vercel.app",

			/**
			 * Using Waline
			 */
			// provider: "Waline",
			// serverURL: "https://vuepress-theme-hope-comment.vercel.app",
		},

		mdEnhance: {
			enableAll: false,
			presentation: {
				plugins: ["highlight", "math", "search", "notes", "zoom"],
			},
		},
	},
});
