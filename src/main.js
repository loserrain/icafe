// import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import iCover from './components/Cover.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  faCheck as fasCheck,
  faTimes as fasTimes,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

window.history.scrollRestoration = 'manual'
// Vue.use(iSimple)
Vue.component('i-cover', iCover)

library.add(farEnvelope)
library.add(fasCheck)
library.add(fasTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
