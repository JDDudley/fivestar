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
        <v-btn color="primary" dark href="/">Home</v-btn>
        <!-- services dropdown -->
        <v-menu offset-y>
          <v-btn color="primary" dark slot="activator">Services</v-btn>
          <v-list>
            <v-list-tile v-for="service in services" :key="service.title" :href="service.route">
              <v-list-tile-title>{{ service.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <!-- contact link -->
        <v-btn color="primary" dark href="/contact/">Contact</v-btn>
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
          <v-list-tile href="/">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Home
            </v-list-tile-title>
          </v-list-tile>
          <!-- services -->
          <v-divider></v-divider>
          <v-list-tile href="/services/">
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
          <v-divider></v-divider>
          <v-list-tile href="/contact/">
            <v-list-tile-action>
              <v-icon>mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Contact Five Star
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile href="/appointments/">
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
            <v-card-title class="contact-title"><v-btn color="primary" dark href="/contact/" class="full-width">Contact Five Star</v-btn></v-card-title>
            <v-card-text>
              <v-btn raised color="white" class="full-width" href="tel:+1-208-260-1765">
                <v-icon color="primary">phone</v-icon>
                <span class="hidden-xs-only"> (208) 260-1765</span>
                <span class="hidden-sm-and-up"> Call</span>
              </v-btn>
              <br>
              <v-btn raised color="white" class="full-width" href="mailto:holly@fivestarservicepros.com">
                <v-icon color="primary">email</v-icon>
                <span class="hidden-xs-only"> holly@fivestarservicepros.com</span>
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
                <v-btn color="primary" class="full-width" @click="appointmentSubmit" dark>Set Up Appointment</v-btn>
              </v-form>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
      <v-snackbar :timeout="successAppTimeout" color="success" v-model="successAppSnack">
        Thank you for contacting us, we'll reach out as quickly as we can.
      </v-snackbar>
      <!--<p class="full-width center">&copy; 2018, Five Star Service Pros</p>-->
    </v-footer>
  </v-app>
</template>

<script>
const axios = require("axios");

export default {
  name: "app",
  data: () => ({
    drawer: null,
    valid: true,
    name: "",
    nameRules: [v => !!v || "Name is required"],
    phone: "",
    phoneRules: [v => !!v || "Phone number is required"],
    areas: [
      {
        title: "Boise",
        neighborhoods: [
          "Boise Bench",
          "Boise Heights",
          "Boise State University",
          "Central Bench",
          "Columbia Village",
          "Depot Bench",
          "Downtown Boise",
          "East End",
          "Garden City",
          "Harris Ranch",
          "Hidden Springs",
          "Highlands",
          "Hillcrest",
          "North End",
          "Northeast Boise",
          "Northwest Boise",
          "Quail Ridge",
          "South Boise",
          "South Boise Village",
          "Southeast Boise",
          "Sunset",
          "Warm Springs",
          "Warm Springs Mesa",
          "West Boise",
          "West End"
        ]
      }
    ],
    services: [
      {
        title: "Residential Plumbing",
        route: "/services/residential-plumbing/"
      },
      {
        title: "Commercial Plumbing",
        route: "/services/commercial-plumbing/"
      },
      {
        title: "Drain Cleaning",
        route: "/services/drain-cleaning/"
      },
      {
        title: "Flood Repair",
        route: "/services/flood-repair/"
      }
    ],
    successAppSnack: false,
    successAppTimeout: 5000
  }),
  methods: {
    appointmentSubmit() {
      if (this.$refs.appointmentForm.validate()) {
        axios.post("//formspree.io/service@fivestarboise.com", {
          name: this.name,
          phone: this.phone
        });
        this.successAppSnack = true;
        this.$router.push("/thank-you");
      }
    }
  }
};
</script>

<style>
/* @import '../node_modules/vuetify/src/stylus/main.styl' */
@import "./main.css";
</style>
