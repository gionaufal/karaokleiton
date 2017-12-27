import Vue from 'vue'
import axios from 'axios'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome'
import '@fortawesome/fontawesome-free-solid'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

export const busSearch = new Vue()

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
