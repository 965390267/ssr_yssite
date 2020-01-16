import Vue from 'vue';
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

// 初始化vue-amap
if (!Vue.prototype.$isServer) {
  VueAMap.initAMapApiLoader({
    // 高德的key
    key: '2b3e4c7ac067cbb3e9df7be79e635ec4',
    // 插件集合
    plugin: ['AMap.Geolocation', 'AMap.Marker', 'AMap.ToolBar', 'AMap.Circle', 'AMap.PolyLine'],
    uiVersion: '1.0',
    // 高德 sdk 版本，默认为 1.4.4
    v: '1.4.8'
  });
}