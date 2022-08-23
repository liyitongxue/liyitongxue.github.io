export const categoryMap = {"category":{"/":{"path":"/category/","map":{"client":{"path":"/category/client/","keys":["v-11dc6176","v-0e72b038","v-18afc3f2","v-154612b4","v-1c197530"]},"server":{"path":"/category/server/","keys":["v-1308b2f0"]}}},"/en/":{"path":"/en/category/","map":{"client":{"path":"/en/category/client/","keys":["v-63040659","v-64b8def8","v-5f9a551b","v-614f2dba","v-5de57c7c"]},"server":{"path":"/en/category/server/","keys":["v-7efaea04"]}}}},"tag":{"/":{"path":"/tag/","map":{"Vue.js":{"path":"/tag/vue.js/","keys":["v-1c197530"]},"html":{"path":"/tag/html/","keys":["v-18afc3f2","v-154612b4"]},"nginx":{"path":"/tag/nginx/","keys":["v-11dc6176"]},"vue":{"path":"/tag/vue/","keys":["v-0e72b038"]},"SpringBoot":{"path":"/tag/springboot/","keys":["v-1308b2f0"]}}},"/en/":{"path":"/en/tag/","map":{"Vue.js":{"path":"/en/tag/vue.js/","keys":["v-5de57c7c"]},"html":{"path":"/en/tag/html/","keys":["v-5f9a551b","v-614f2dba"]},"nginx":{"path":"/en/tag/nginx/","keys":["v-63040659"]},"vue":{"path":"/en/tag/vue/","keys":["v-64b8def8"]},"SpringBoot":{"path":"/en/tag/springboot/","keys":["v-7efaea04"]}}}}}

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
