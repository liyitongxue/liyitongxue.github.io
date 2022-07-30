import { navbar } from "vuepress-theme-hope";

// 顶部导航栏配置
export const en = navbar([
	"/en/",
	{
		text: "Learning Notes",
		icon: "note",
		link:"/en/note/",
		// prefix: "/en/note/",
		// children: [
		// 	{ text: "server", icon: "code", link: "server" },
		// 	{ text: "client", icon: "layout", link: "client" },
		// ],
	},
	// "/en/home", //项目主页
	{ text: "Life Perception", icon: "write", link: "/en/perception/" },
	// { text: "Guide", icon: "creative", link: "/en/guide/" },

	// {
	// 	text: "server",
	// 	icon: "code",
	// 	prefix: "server/",
	// 	children: [
	// 		{
	// 			text: "java",
	// 			icon: "code",
	// 			prefix: "java/",
	// 			children: [
	// 				{ text: "article 1", icon: "edit", link: "article1" },
	// 				{ text: "article 2", icon: "edit", link: "article2" },
	// 			],
	// 		},
	// 		{
	// 			text: "spring",
	// 			icon: "code",
	// 			children: [
	// 				{ text: "article 3", icon: "edit", link: "spring/article3", },
	// 				{ text: "article 4", icon: "edit", link: "spring/article4", },
	// 			],
	// 		},
	// 	],
	// },

]);
