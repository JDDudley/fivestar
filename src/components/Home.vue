<template>
  <div class="component">
    <!--<h1>{{ msg }}</h1>-->
    <img src="../assets/logo_dk.png" class="logo hidden-xs-only" alt="Five Star Service Pros">
    <div>
      <h1>Plumbing and Drain Cleaning Experts</h1>
      <p>Welcome to Five Star Service Pros, the most reliable and affordable choice for your plumbing and drain cleaning needs in Boise and surrounding areas.</p>
    </div>
    <!-- Areas Served -->
    <div class="areas-served" v-for="area in areas" :key="area.title">
      <h1>Areas Served in {{ area.title }}</h1>
      <!-- grid -->
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3 xl2 v-for="neighborhood in area.neighborhoods" :key="neighborhood">
            {{ neighborhood }}
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
  import store from '../store'
  
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Five Star Service Pros',
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
        }]
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
