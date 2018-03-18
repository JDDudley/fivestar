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

// Store data
// let storeData = {
//   areas: [
//     {
//       title: 'Boise',
//       neighborhoods: [
//         'Boise Bench',
//         'Boise Heights',
//         'Boise State University',
//         'Central Bench',
//         'Columbia Village',
//         'Depot Bench',
//         'Downtown Boise',
//         'East End',
//         'Garden City',
//         'Harris Ranch',
//         'Hidden Springs',
//         'Highlands',
//         'Hillcrest',
//         'North End',
//         'Northeast Boise',
//         'Northwest Boise',
//         'Quail Ridge',
//         'South Boise',
//         'South Boise Village',
//         'Southeast Boise',
//         'Sunset',
//         'Warm Springs',
//         'Warm Springs Mesa',
//         'West Boise',
//         'West End'
//       ]
//     }],
//     services: [
//     {
//       title: 'Drain Cleaning',
//       route: '#/services/drain-cleaning'
//     },
//     {
//       title: 'Residential Plumbing',
//       route: '#/services/residential-plumbing'
//     },
//     {
//       title: 'Commercial Plumbing',
//       route: '#/services/commercial-plumbing'
//     }
//     // {
//     //   title: 'Mobile Home Plumbing',
//     //   route: '#/services/mobile-home-plumbing'
//     // }
//   ]
// }

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));
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
