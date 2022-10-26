// #ifndef VUE3
import App from './App'
import Vue from 'vue'
import store from './store'
import request from 'common/request.js'

Vue.prototype.$store = store
Vue.prototype.$request = request

Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif