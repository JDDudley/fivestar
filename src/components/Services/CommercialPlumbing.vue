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
  </div>
</template>

<script>
  export default {
    name: 'CommercialPlumbing',
    data () {
      return {
        service: 'Commercial Plumbing',
        description: 'Five Star has the knowledge and experience to handle your commercial plumbing needs in a prompt and professional fashion.',
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
        ]
      }
    },
    metaInfo: {
      title: 'Five Star Service Pros - Commercial Plumbing',
      meta: [
        {name: 'description', content: 'Five Star serves numerous local businesses as the most reliable on-call plumber in the valley. Let us provide the assurance that you\'ll always have immediate fixes to any commercial plumbing problems that come up.'}
      ]
    }
  }
</script>

