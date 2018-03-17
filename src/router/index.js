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
import FloodRepair from '@/components/Services/FloodRepair'
import Thanks from '@/components/Thanks'
import NotFound from '@/components/NotFound'

Vue.use(Router)

let titleStart = 'Five Star Service Pros'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: titleStart + ' - Boise Plumbing, Sewer, and Drain',
        description: 'Five Star Service Pros is Boise\'s  most reliable and affordable choice for your plumbing, sewer, and drain cleaning needs. With service available 24 hours a day, you know you can count on emergency services from a locally owned company.'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: titleStart + ' - Contact Us'
      },
      description: 'Contact Five Star Service Pros for honest and reliable answers to all your plumbing and sewer needs. We charge by the job, not the hour, so your bill will never surprise you.'
    },
    {
      path: '/appointments',
      name: 'Appointments',
      component: Appointments,
      meta: {
        title: titleStart + ' - Schedule an Appointment'
      },
      description: 'Book an appointment to get Boise\'s best plumbing experts at your door to solve any pluming, sewer, or drain troubles you\'re having.'
    },
    {
      path: '/thank-you',
      name: 'Thank You',
      component: Thanks,
      meta: {
        title: titleStart + ' - Thank You!'
      },
      description: 'Thanks for contacting Five Star Service Pros! You\'re about to hear back from the most reliable plumbers in Boise.'
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
      meta: {
        title: titleStart + ' - Services'
      },
      description: 'Five Star Service Pros has experience and expertise in all areas of plumbing, sewer, and drain cleaning services. Let us give you the best treatment in Boise.'
    },
    {
      path: '/services/drain-cleaning',
      name: 'DrainCleaning',
      component: DrainCleaning,
      meta: {
        title: titleStart + ' - Drain Cleaning'
      },
      description: 'Whether it\s a clogged sink or tub, or an entire drainage system backed up, Five Star Service Pros has the experience and equipment to repair any damage and get you back to normal.'
    },
    {
      path: '/services/residential-plumbing',
      name: 'ResidentialPlumbing',
      component: ResidentialPlumbing,
      meta: {
        title: titleStart + ' - Residential Plumbing'
      },
      description: 'Five Star Plumbing has the most reliable service in the Treasure Valley for all your residential plumbing needs. Kitchen, bath, laundry, and everything in between. Let us provide the service you deserve.'
    },
    {
      path: '/services/commercial-plumbing',
      name: 'CommercialPlumbing',
      component: CommercialPlumbing,
      meta: {
        title: titleStart + ' - Commercial Plumbing'
      },
      description: 'Five Star serves numerous local businesses as the most reliable on-call plumber in the valley. Let us provide the assurance that you\'ll always have immediate fixes to any commercial plumbing problems that come up.'
    },
    {
      path: '/services/flood-repair',
      name: 'FloodRepair',
      component: FloodRepair,
      meta: {
        title: titleStart + ' - Flood Repair & Restoration'
      },
      description: '24/7 Emergency flood repair and restoration. Five Star Service Pros is always here to help minimize damage and ensure you get back to normal as quickly as possible.'
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
