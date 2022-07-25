export const categoryMap = {"category":{"/":{"path":"/category/","map":{"client":{"path":"/category/client/","keys":["v-1c197530"]}}},"/en/":{"path":"/en/category/","map":{"client":{"path":"/en/category/client/","keys":["v-5de57c7c"]}}}},"tag":{"/":{"path":"/tag/","map":{"Vue.js":{"path":"/tag/vue.js/","keys":["v-1c197530"]}}},"/en/":{"path":"/en/tag/","map":{"Vue.js":{"path":"/en/tag/vue.js/","keys":["v-5de57c7c"]}}}}}

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
