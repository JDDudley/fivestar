import Vue from 'vue'
import Router from 'vue-router'
import vueMeta from 'vue-meta'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Appointments from '@/components/Appointments'
import Services from '@/components/Services'
import DrainCleaning from '@/components/Services/DrainCleaning'
import ResidentialPlumbing from '@/components/Services/ResidentialPlumbing'
import CommercialPlumbing from '@/components/Services/CommercialPlumbing'
import MobileHomePlumbing from '@/components/Services/MobileHomePlumbing'
import FloodRepair from '@/components/Services/FloodRepair'
import Thanks from '@/components/Thanks'
import NotFound from '@/components/NotFound'

Vue.use(Router)
Vue.use(vueMeta, {
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
})

let titleStart = 'Five Star Service Pros'
let keywords = 'plumbing,drain cleaning,sewer,pipe,drain,sink,tub,toilet,septic,flood'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: titleStart + ' - Boise Plumbing, Sewer, and Drain'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: titleStart + ' - Contact Us'
      }
    },
    {
      path: '/appointments',
      name: 'Appointments',
      component: Appointments,
      meta: {
        title: titleStart + ' - Schedule an Appointment'
      }
    },
    {
      path: '/thank-you',
      name: 'Thank You',
      component: Thanks,
      meta: {
        title: titleStart + ' - Thank You!'
      }
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
      meta: {
        title: titleStart + ' - Services'
      }
    },
    {
      path: '/services/drain-cleaning',
      name: 'DrainCleaning',
      component: DrainCleaning,
      meta: {
        title: titleStart + ' - Drain Cleaning'
      }
    },
    {
      path: '/services/residential-plumbing',
      name: 'ResidentialPlumbing',
      component: ResidentialPlumbing,
      meta: {
        title: titleStart + ' - Residential Plumbing'
      }
    },
    {
      path: '/services/commercial-plumbing',
      name: 'CommercialPlumbing',
      component: CommercialPlumbing,
      meta: {
        title: titleStart + ' - Commercial Plumbing'
      }
    },
    {
      path: '/services/flood-repair',
      name: 'FloodRepair',
      component: FloodRepair,
      meta: {
        title: titleStart + ' - Flood Repair & Restoration'
      }
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      meta: {
        title: titleStart + ' - Page Not Found'
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: {
        title: titleStart + ' - Page Not Found'
      }
    }
  ]
})
