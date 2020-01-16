
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '云师问答-云师教育培训机构「云师教育是云南一家优质的教师培训机构」',
    meta: [
      { name:"force-rendering",content:"webkit"},
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '云师教育平台集合了教师考前培训、教师就业安置、教师岗前培训以及名师培养打造等一站式服务' },
      {name:"keywords" ,content:"北京云师教育科技有限公司，云师教育特岗，普岗，教师招聘，最新教师信息公告，笔试资料，云南教师招聘"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0f0',height:'5px' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/common.css',
    { src: "swiper/dist/css/swiper.css" }
  ],
//   script:[
//     {src:"http://webapi.amap.com/maps?v=1.4.4&key=2b3e4c7ac067cbb3e9df7be79e635ec4"},
// ],
  /*
  ** Plugins to load before mounting the App 
  */
  plugins: [
    '@/plugins/filters',
    '@/plugins/element-ui',
    '@/plugins/amap',
    '@/plugins/axios',
    { src: "~/plugins/vue-awesome-swiper.js", ssr: false },
    {
      src: "~/plugins/lazy-load",
      ssr: false
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        [ "component", 
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ] 
      ] 
    },
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    vendor:['axios']
  }
}
