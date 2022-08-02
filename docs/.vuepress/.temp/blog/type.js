export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-59478219","v-1308b2f0","v-1c197530"]},"/en/":{"path":"/en/article/","keys":["v-1d2fcef6","v-7efaea04","v-5de57c7c"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]},"/en/":{"path":"/en/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]},"/en/":{"path":"/en/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]},"/en/":{"path":"/en/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-59478219","v-1308b2f0","v-1c197530"]},"/en/":{"path":"/en/timeline/","keys":["v-1d2fcef6","v-7efaea04","v-5de57c7c"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
