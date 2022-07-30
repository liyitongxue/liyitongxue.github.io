import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
	"/": [
		"",
		{
			text: "学习笔记",
			icon: "note",
			prefix: "note/",
			link: "note/",
			children: [
				{
					text: "后端",
					icon: "code",
					prefix: "server/",
					collapsable: true,
					children: "structure",
				},
				{
					text: "前端",
					icon: "layout",
					prefix: "client/",
					collapsable: true,
					children: "structure",
				},
			],
		},

		{
			text: "日常感悟",
			icon: "write",
			prefix: "perception/",
			link: "perception/",
			collapsable: true,
			children: "structure",
		},

		// {
		// 	text: "文章",
		// 	icon: "note",
		// 	prefix: "posts/",
		// 	children: [
		// 		{
		// 			text: "文章 1-4",
		// 			icon: "note",
		// 			collapsable: true, //是否折叠
		// 			prefix: "article/",
		// 			children: ["article1", "article2", "article3", "article4"],
		// 		},
		// 		{
		// 			text: "文章 5-12",
		// 			icon: "note",
		// 			children: [
		// 				{
		// 					text: "文章 5-8",
		// 					icon: "note",
		// 					collapsable: true,
		// 					prefix: "article/",
		// 					children: ["article5", "article6", "article7", "article8"],
		// 				},
		// 				{
		// 					text: "文章 9-12",
		// 					icon: "note",
		// 					children: ["article9", "article10", "article11", "article12"],
		// 				},
		// 			],
		// 		},
		// 	],
		// },


	],
});
