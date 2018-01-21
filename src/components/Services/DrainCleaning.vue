<template>
  <div class="component">
    <h1>{{ service }}</h1>
    <p>{{ description }}</p>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 v-for="specificService in specificServices" :key="specificService.title">
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
  </div>
</template>

<script>
  export default {
    name: 'DrainCleaning',
    data () {
      return {
        service: 'Drain Cleaning',
        description: 'Experienced and affordable drain cleaning available 24/7 - that\'s the Five Star difference.',
        specificServices: [
          {
            title: 'Drain Cleaning Services',
            list: [
              'Clear Sewer Main',
              'Faucets, Fixtures and Pipe Repair',
              'Clear Drain Clog or Blockage',
              'Sewer Pipe Inspection',
              'Drain Pipe Inspection',
              'Hydrojetting',
              'High Pressure Sewer Rehabilitation',
              'Sump Pump or Foundation Drain Install',
              'Sump Pump Repair',
              'Trenchless Pipe Replacement',
              'Water Main Install or Repair',
              'Sewer Main Install or Replace',
              'Drain Line Breakage Camera Locate'
            ]
          }
        ]
      }
    }
  }
</script>