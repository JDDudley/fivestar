<template>
  <v-app>
    <v-toolbar color="accent" class="top-bar" app fixed>
      <img src="./assets/logo_nav.png" id="nav-logo" alt="FiveStar Service Pros">
      <v-toolbar-title class="nav-title">Five Star Service Pros</v-toolbar-title>
      <v-toolbar-icon>menu</v-toolbar-icon>
    </v-toolbar>
    <!-- <v-navigation-drawer app></v-navigation-drawer> -->
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <v-footer color="primary" class="bottom-bar" app>
      <v-layout row wrap>
        <!-- <v-flex xs12 md4> -->
          <v-card class="bottom-card" xs12 md4>
            <v-card-title id="contact-title">CONTACT FIVE STAR</v-card-title>
            <v-card-text>
              <v-icon color="primary">phone</v-icon> (208) 270-0837
              <br>
              <v-icon color="primary">email</v-icon> <a href="mailto:service@fivestarservicepros.com">service@fivestarservicepros.com</a>
            </v-card-text>
            <!-- <v-card-media>
              <v-icon light x-large>phone</v-icon>
            </v-card-media> -->
            <v-card-actions>
              <v-btn raised color="white">Call</v-btn>
              <v-btn raised color="white">Email</v-btn>
            </v-card-actions>
          </v-card>
        <!-- </v-flex> -->
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app'
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
  height: 140px;
}
.nav-logo {
  top: 80px;
  float: left;
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
</style>
