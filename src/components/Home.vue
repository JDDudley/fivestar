<template>
  <div class="component">
    <!--<h1>{{ msg }}</h1>-->
    <img src="../assets/logo_dk.png" class="logo hidden-xs-only" alt="Five Star Service Pros">
    <div>
      <h1>Plumbing and Drain Cleaning Experts</h1>
      <p>Welcome to Five Star Service Pros, the most reliable and affordable choice for your plumbing and drain cleaning needs in Boise and surrounding areas.</p>
    </div>
    <div id="areas-served">
      <h1>Areas Served</h1>
      <!-- grouped list-->
      
      <!--<v-list dense>
        <v-list-group v-for="area in areas" :value="area.active" v-bind:key="area.title">
          <v-list-tile-title>{{ area.title }}</v-list-tile-title>
          <v-list-tile-action><v-icon>keyboard_arrow_down</v-icon></v-list-tile-action>
          <v-list-tile v-for="neighborhood in area.neighborhoods" v-bind:key="neighborhood" @click="">
            <v-list-tile-title>{{ neighborhood }}</v-list-tile-title>
          </v-list-tile>
        </v-list-group>
      </v-list>-->
      
      <!-- v-list -->
      <!--<v-list dense>
        <v-list-tile v-for="neighborhood in areas[0].neighborhoods" v-bind:key="neighborhood">
          <v-list-title>{{ neighborhood }}</v-list-title>
        </v-list-tile>
      </v-list>-->
      
      <!-- list -->
      <!--<ul class="areas">
        <li v-for="neighborhood in areas[0].neighborhoods">{{ neighborhood }}</li>
      </ul>-->

      <!-- grid -->
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3 xl2 v-for="neighborhood in areas[0].neighborhoods">
            {{ neighborhood }}
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
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
        }
        // {
        //   title: 'Caldwell'
        // },
        // {
        //   title: 'Nampa'
        // }
      ]
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
