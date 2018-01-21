<template>
  <v-app>
    <v-toolbar color="black" class="top-bar" clipped-left fixed app>
      <v-btn color="primary" icon raised @click.stop="drawer = !drawer">
        <v-icon color="white">menu</v-icon>
      </v-btn>
      <!--<img src="./assets/logo_nav.png" id="nav-logo" alt="FiveStar Service Pros">-->
      <v-toolbar-title class="nav-title">Five Star<span class="hidden-xs-only"> Service Pros</span></v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="hidden-md-and-down">
        <!-- Home button -->
        <v-btn color="primary" dark href="/home">Home</v-btn>
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
        <v-btn color="primary" dark href="/contact">Contact</v-btn>
      </div>
      <v-btn color="primary" href="tel:+1-208-260-1765">
        <v-icon color="white">phone</v-icon>
        <span class="hidden-xs-only"> (208) 260-1765</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <!-- drawer -->
      <v-navigation-drawer dark clipped disable-route-watcher fixed v-model="drawer" app>
        <v-list>
          <v-list-tile href="/home">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Home
            </v-list-tile-title>
          </v-list-tile>
          <!-- services -->
          <v-divider></v-divider>
          <v-list-tile href="/services">
            <v-list-tile-action>
              <v-icon>build</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Services
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-for="service in services"
           :key="service.title"
           :href="service.route">
            <v-list-tile-action>
              <v-icon>keyboard_arrow_right</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              {{ service.title }}
            </v-list-tile-title>
          </v-list-tile>
          <!--<v-list-tile href="/services/residential-plumbing">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Residential Plumbing
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile href="/services/drain-cleaning">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Drain Cleaning
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile href="/services/commercial-plumbing">
            <v-list-tile-action>
              <v-icon>fa-building</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Commercial Plumbing
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile href="/services/mobile-home-plumbing">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Mobile Home Plumbing
            </v-list-tile-title>
          </v-list-tile>-->
          <v-divider></v-divider>
          <v-list-tile href="/contact">
            <v-list-tile-action>
              <v-icon>mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Contact Five Star
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile href="/appointments">
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
         <v-flex xs12 sm6> 
          <v-card class="bottom-card">
            <v-card-title class="contact-title"><v-btn color="primary" dark href="/contact" class="full-width">Contact Five Star</v-btn></v-card-title>
            <v-card-text>
              <v-btn raised color="white" class="full-width" href="tel:+1-208-260-1765">
                <v-icon color="primary">phone</v-icon>
                <span class="hidden-xs-only"> (208) 260-1765</span>
                <span class="hidden-sm-and-up"> Call</span>
              </v-btn>
              <br>
              <v-btn raised color="white" class="full-width" href="mailto:service@fivestarservicepros.com">
                <v-icon color="primary">email</v-icon>
                <span class="hidden-xs-only"> service@fivestarservicepros.com</span>
                <span class="hidden-sm-and-up"> Email</span>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card class="bottom-card">
            <!-- free quote contact link -->
            <v-card-title class="contact-title">
              <v-form v-model="valid" class="full-width" ref="appointmentForm">
                <v-text-field
                  label="Name"
                  class="full-width"
                  v-model="name"
                  :rules="nameRules"
                ></v-text-field>
                <v-text-field
                  label="Phone Number"
                  v-model="phone"
                  class="full-width"
                  :rules="phoneRules"
                ></v-text-field>
                <v-btn color="primary" class="full-width" @click="appointmentSubmit" dark href="/appointments">Set Up Appointment</v-btn>
              </v-form>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
      <!--<p class="full-width center">&copy; 2018, Five Star Service Pros</p>-->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    drawer: null,
    areas: [
      {
        title: 'Boise',
        neighborhoods: [
          'Boise Bench',
          'Boise Heights',
          'Boise State University',
          'Central Bench',
          'Columbia Village',
          'Depot Bench',
          'Downtown Boise',
          'East End',
          'Garden City',
          'Harris Ranch',
          'Hidden Springs',
          'Highlands',
          'Hillcrest',
          'North End',
          'Northeast Boise',
          'Northwest Boise',
          'Quail Ridge',
          'South Boise',
          'South Boise Village',
          'Southeast Boise',
          'Sunset',
          'Warm Springs',
          'Warm Springs Mesa',
          'West Boise',
          'West End'
        ]
      }],
      services: [
      {
        title: 'Drain Cleaning',
        route: '/services/drain-cleaning'
      },
      {
        title: 'Residential Plumbing',
        route: '/services/residential-plumbing'
      },
      {
        title: 'Commercial Plumbing',
        route: '/services/commercial-plumbing'
      }
      // {
      //   title: 'Mobile Home Plumbing',
      //   route: '/services/mobile-home-plumbing'
      // }
    ]
  }),
  methods: {
    appointmentSubmit () {
      if (this.$refs.appointmentForm.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/submit', {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        })
      }
    }
  }
}


</script>

<style>
/* @import '../node_modules/vuetify/src/stylus/main.styl' */
@import './main.css'
</style>
