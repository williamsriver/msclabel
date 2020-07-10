// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from "vuetify";
import animated from 'animate.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
Vue.config.productionTip = false
Vue.use(animated);
Vue.use(router)
Vue.use(Vuetify)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify:new Vuetify(),
  template: '<App/>',
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
})
