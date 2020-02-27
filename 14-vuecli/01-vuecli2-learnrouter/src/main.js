import Vue from 'vue'
import App from './App'
import router from './router'//如果只导入文件夹,它会自动去找这个文件夹下的index.js文件

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
