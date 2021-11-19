import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import mdiVue from 'mdi-vue/v2'
import * as mdijs from '@mdi/js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { MotionPlugin } from '@vueuse/motion'
import VueGapi from 'vue-gapi'

Vue.config.productionTip = false

Vue.use(mdiVue, {
  icons: mdijs
}) 

Vue.use(VueAxios, axios)


Vue.use(MotionPlugin)

Vue.use(VueGapi, {
  clientId: '301970806661-5fmd83gs9gn0c5vjgqjtdlqfrc83iq8h.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
