import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Appointments from '@/components/Appointments'
import Services from '@/components/Services'
import DrainCleaning from '@/components/Services/DrainCleaning'
import ResidentialPlumbing from '@/components/Services/ResidentialPlumbing'
import CommercialPlumbing from '@/components/Services/CommercialPlumbing'
import MobileHomePlumbing from '@/components/Services/MobileHomePlumbing'

Vue.use(Router)

let titleStart = 'Five Star Service Pros'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {title: titleStart + ' - Boise\'s Most Reliable & Affordable Plumbing, Heating & Air'}
    },
    {
      path: '/home',
      component: Home,
      meta: {title: titleStart + ' - Boise\'s Most Reliable & Affordable Plumbing, Heating & Air'}
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {title: titleStart + ' - Contact Us'}
    },
    {
      path: '/appointments',
      name: 'Appointments',
      component: Appointments,
      meta: {title: titleStart + ' - Schedule an Appointment'}
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
      meta: {title: titleStart + ' - Services'}
    },
    {
      path: '/services/drain-cleaning',
      name: 'DrainCleaning',
      component: DrainCleaning,
      meta: {title: titleStart + ' - Drain Cleaning'}
    },
    {
      path: '/services/residential-plumbing',
      name: 'ResidentialPlumbing',
      component: ResidentialPlumbing,
      meta: {title: titleStart + ' - Residential Plumbing'}
    },
    {
      path: '/services/commercial-plumbing',
      name: 'CommercialPlumbing',
      component: CommercialPlumbing,
      meta: {title: titleStart + ' - Commercial Plumbing'}
    },
    {
      path: '/services/mobile-home-plumbing',
      name: 'MobileHomePlumbing',
      component: MobileHomePlumbing,
      meta: {title: titleStart + ' - Mobile Home Plumbing'}
    }
  ]
})
