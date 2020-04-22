import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// 导入插件
import './plugins/bootstrap-vue/bootstrap-vue'
import './plugins/swiper/vue-awesome-swiper'
import './plugins/vue-video-player/video-player'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
