import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'bulma/css/bulma.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
