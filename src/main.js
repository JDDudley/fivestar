// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'

// stylesheets
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#B71C1C',
    secondary: '#F44336',
    accent: '#424242',
    error: '#E65100',
    info: '#01579B',
    success: '#1B5E20',
    warning: '#FFEB3B'
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // data: storeData,
  template: '<App/>',
  components: { App }
})
