import { navbar } from "vuepress-theme-hope";

// 顶部导航栏配置
export const zh = navbar([
	"/",
	{
		text: "学习笔记",
		icon: "note",
		link:"/note/",
		prefix: "/note/",
		children: [
			{ text: "后端", icon: "code", link: "server/" },
			{ text: "前端", icon: "layout", link: "client/" },
		],
	},
	// "/home", //项目主页
	{ text: "日常感悟", icon: "write", link: "/perception/" },
	// { text: "使用指南", icon: "creative", link: "/guide/" },

	// {
	// 	text: "后端",
	// 	icon: "code",
	// 	prefix: "server/",
	// 	children: [
	// 		{
	// 			text: "java",
	// 			icon: "code",
	// 			prefix: "java/",
	// 			children: [
	// 				{ text: "文章 1", icon: "edit", link: "article1" },
	// 				{ text: "文章 2", icon: "edit", link: "article2" },
	// 			],
	// 		},
	// 		{
	// 			text: "spring",
	// 			icon: "code",
	// 			children: [
	// 				{ text: "文章 3", icon: "edit", link: "spring/article3", },
	// 				{ text: "文章 4", icon: "edit", link: "spring/article4", },
	// 			],
	// 		},
	// 	],
	// },
	
]);
