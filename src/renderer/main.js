import Vue from 'vue'
import VueFire from 'vuefire'
import axios from 'axios'
import VueYouTubeEmbed from 'vue-youtube-embed'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome'
import '@fortawesome/fontawesome-free-solid'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueFire)
Vue.use(VueYouTubeEmbed)

export const busSearch = new Vue()
export const playerBus = new Vue()

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
