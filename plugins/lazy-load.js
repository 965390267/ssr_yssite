import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  loading: require('~/assets/image/loading.png'),
  error: require('~/assets/image/error.png')
})