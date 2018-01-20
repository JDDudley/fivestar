<template>
  <v-app>
    <v-toolbar color="accent" class="top-bar" clipped-left fixed app>
      <v-btn color="primary" icon raised @click.stop="drawer = !drawer">
        <v-icon color="white">menu</v-icon>
      </v-btn>
      <!--<img src="./assets/logo_nav.png" id="nav-logo" alt="FiveStar Service Pros">-->
      <v-toolbar-title class="nav-title hidden-xs-only">Five Star Service Pros</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="hidden-md-and-down">
        <!-- Home button -->
        <v-btn color="primary" dark href="/#/home">Home</v-btn>
        <!-- services dropdown -->
        <v-menu offset-y>
          <v-btn color="primary" dark slot="activator">Services</v-btn>
          <v-list>
            <v-list-tile v-for="service in services" :key="service.title" :href="service.route" @click="">
              <v-list-tile-title>{{ service.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <!-- contact link -->
        <v-btn color="primary" dark href="/#/contact">Contact</v-btn>
      </div>
      <v-btn color="primary" href="tel:+1-208-270-0837">
        <v-icon color="white">phone</v-icon>
        <span class="hidden-xs-only"> (208) 270-0837</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <!-- drawer -->
      <v-navigation-drawer dark clipped disable-route-watcher absolute v-model="drawer" app>
        <v-list>
          <v-list-tile href="/#/home" @click.stop="drawer = !drawer">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Home
            </v-list-tile-title>
          </v-list-tile>
          <!-- services -->
          <v-divider></v-divider>
          <v-list-tile href="/#/services" @click.stop="drawer = !drawer">
            <v-list-tile-action>
              <v-icon>build</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Services
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-for="service in services"
           :key="service.title"
           :href="service.route"  
           @click.stop="drawer = !drawer">
            <v-list-tile-action>
              <v-icon>keyboard_arrow_right</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              {{ service.title }}
            </v-list-tile-title>
          </v-list-tile>
          <!--<v-list-tile href="/#/services/residential-plumbing">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Residential Plumbing
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile href="/#/services/drain-cleaning">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Drain Cleaning
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile href="/#/services/commercial-plumbing">
            <v-list-tile-action>
              <v-icon>fa-building</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Commercial Plumbing
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile href="/#/services/mobile-home-plumbing">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Mobile Home Plumbing
            </v-list-tile-title>
          </v-list-tile>-->
          <v-divider></v-divider>
          <v-list-tile href="/#/contact" @click.stop="drawer = !drawer">
            <v-list-tile-action>
              <v-icon>mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Contact Five Star
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile href="/#/appointments" @click.stop="drawer = !drawer">
            <v-list-tile-action>
              <v-icon>schedule</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Schedule An Appointment
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-container fluid>
        <div class="hidden-sm-and-up">
          <img src="./assets/logo_dk.png" class="logo" alt="Five Star Service Pros">
        </div>
        <router-view/>
      </v-container>
    </v-content>
    <v-footer color="primary" class="bottom-bar" clipped-left app>
      <v-layout row wrap>
        <!-- <v-flex xs12 md4> -->
          <v-card class="bottom-card" xs12 md4>
            <v-card-title id="contact-title"><v-btn color="primary" dark href="/#/contact" class="full-width">Contact Five Star</v-btn></v-card-title>
            <v-card-text>
              <v-btn raised color="white" class="full-width" href="tel:+1-208-270-0837"><v-icon color="primary">phone</v-icon> (208) 270-0837</v-btn>
              <br>
              <v-btn raised color="white" class="full-width" href="mailto:service@fivestarservicepros.com"><v-icon color="primary">email</v-icon>service@fivestarservicepros.com</v-btn>
            </v-card-text>
            <!-- <v-card-media>
              <v-icon light x-large>phone</v-icon>
            </v-card-media> -->
            <v-card-actions>
              
            </v-card-actions>
          </v-card>
          <v-card class="bottom-card" xs12 md4>
            <!-- free quote contact link -->
            <v-btn color="primary" dark href="/#/appointments">Set Up Your Appointment</v-btn>
          </v-card>
        <!-- </v-flex> -->
      </v-layout>
      <!--<p class="full-width center">&copy; 2018, Five Star Service Pros</p>-->
    </v-footer>
  </v-app>
</template>

<script>
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  data: () => ({
    drawer: null,
    services: [
      {
        title: 'Drain Cleaning',
        route: '#/services/drain-cleaning'
      },
      {
        title: 'Residential Plumbing',
        route: '#/services/residential-plumbing'
      },
      {
        title: 'Commercial Plumbing',
        route: '#/services/commercial-plumbing'
      }
      // {
      //   title: 'Mobile Home Plumbing',
      //   route: '#/services/mobile-home-plumbing'
      // }
    ],
    areas: [
      {
        title: 'Boise'
      },
      {
        title: 'Garden City'
      },
      {
        title: 'Caldwell'
      },
      {
        title: 'Nampa'
      }
    ]
  }),
  props: {
      source: String
  }
}
</script>

<style>
/* @import '../node_modules/vuetify/src/stylus/main.styl' */
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: lightgrey;
  color: black;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
/* this height should match the logo png size */
.top-bar {
  /*height: 140px;*/
}
.nav-logo {
  top: 140px;
  float: left;
}
.logo {
  text-align: center;
  display: block;
  max-width: 100%;
}
.nav-title {
  font-family: 'Roboto','Futura';
  font-size: 2em;
  color: white;
  font-variant: small-caps;
  /* text-transform: uppercase; */
  text-shadow: 1px 1px 5px red;
  font-weight: bold;
};
/* footer */
.bottom-bar {
  color: white;
  padding: 12px;
}
.bottom-card {
  background-color: transparent;
  color: white;
  margin: 12px;
  padding: 12px;
}
#contact-title {
  font-weight: bold;
  text-align: center;
}
/* generic classes */
.component {
  background-color: white;
  padding: 12px;
  box-shadow: 2px 2px 10px black;
  max-width: 800px;
  margin: 12px auto;
}
.component h1 {
  text-align: center;
  color: primary;
  padding-bottom: 12px;
}
.full-width {
  width: 100%;
}
.center {
  text-align: center;
}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
.no-bullet-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.primary-card-title {
  color: white;
  font-weight: bold;
  size: 2em;
  margin: 2px auto;
}
</style>
