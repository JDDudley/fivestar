<template>
  <div class="component">
    <h1>{{ service }}</h1>
    <p>{{ description }}</p>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="primary">
            <v-card-title>
              <h2 class="primary-card-title">SERVICES</h2>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 v-for="specificService in specificServices" :key="specificService.title">
          <v-card>
            <v-card-title primary-title>
              <h3 class="headline">{{ specificService.title }}</h3>
            </v-card-title>
            <v-card-text>
              <ul class="no-bullet-list">
                <li v-for="item in specificService.list"><v-divider></v-divider>{{ item }}</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- areas -->
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="primary">
            <v-card-title>
              <h2 class="primary-card-title">AREAS SERVED</h2>
            </v-card-title>
          </v-card>
        </v-flex>
        <div class="areas-served" v-for="area in areas" :key="area.title">
          <h1>{{ area.title }}</h1>
          <!-- grid -->
          <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
              <v-flex xs12 sm6 md3 xl2 v-for="neighborhood in area.neighborhoods" :key="neighborhood">
                {{ neighborhood }}
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Services',
    data () {
      return {
        service: 'Plumbing, Sewer & Drain Cleaning Services',
        description: 'Five Star Service Pros offer affordable and professional service for a range of plumbing, sewer and drain cleaning needs. Listed below are just a few of our specialties:',
        specificServices: [
          {
            title: 'Excavation',
            list: [
              'Water & Fuel Tank Installation',
              'Water & Fuel Tank Removal'
            ]
          },
          {
            title: 'Foundations',
            list: [
              'Basement Drainage Channels Repair'
            ]
          },
          {
            title: 'Plumbing',
            list: [
              'Clear Sewer Main',
              'Faucets, Fixtures and Pipe Repair',
              'Water Heater Install',
              'Water Heater Repair',
              'Gas Piping',
              'Clear Drain Clog or Blockage',
              'Sump Pump or Foundation Drain Install',
              'Sump Pump Repair',
              'Tankless Water Heater Install',
              'Tankless Water Heater Repair',
              'Water Main Install or Repair',
              'Sewer Main Install or Replace',
              'Drain Line Breakage Camera Locate'
            ]
          },
          {
            title: 'Water Treatment Systems',
            list: [
              'Water Treatment & Purification Install',
              'Water Treatment & Purification Repair'
            ]
          }
        ],
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