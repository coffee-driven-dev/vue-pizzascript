import Vue from 'vue'
import App from './App.vue'
import router from '@router/routes.js'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
