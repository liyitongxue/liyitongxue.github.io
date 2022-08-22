export const categoryMap = {"category":{"/":{"path":"/category/","map":{"client":{"path":"/category/client/","keys":["v-18afc3f2","v-154612b4","v-1c197530"]},"server":{"path":"/category/server/","keys":["v-1308b2f0"]}}},"/en/":{"path":"/en/category/","map":{"client":{"path":"/en/category/client/","keys":["v-5de57c7c"]},"server":{"path":"/en/category/server/","keys":["v-7efaea04"]}}}},"tag":{"/":{"path":"/tag/","map":{"Vue.js":{"path":"/tag/vue.js/","keys":["v-1c197530"]},"html":{"path":"/tag/html/","keys":["v-18afc3f2","v-154612b4"]},"SpringBoot":{"path":"/tag/springboot/","keys":["v-1308b2f0"]}}},"/en/":{"path":"/en/tag/","map":{"Vue.js":{"path":"/en/tag/vue.js/","keys":["v-5de57c7c"]},"SpringBoot":{"path":"/en/tag/springboot/","keys":["v-7efaea04"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
