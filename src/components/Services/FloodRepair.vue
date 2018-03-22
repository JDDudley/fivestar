<template>
  <div class="component">
    <h1>{{ service }}</h1>
    <p :v-for="p in description">{{ p }}</p>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="primary">
            <v-card-title>
              <h2 class="primary-card-title">SERVICES</h2>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 :v-for="specificService in specificServices" :key="specificService.title">
          <v-card>
            <v-card-title primary-title>
              <h3 class="headline">{{ specificService.title }}</h3>
            </v-card-title>
            <v-card-text>
              <ul class="no-bullet-list">
                <li :v-for="item in specificService.list"><v-divider></v-divider>{{ item }}</li>
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
  name: "FloodRepair",
  data() {
    return {
      service: "Flood Repair & Restoration",
      description: [
        'Five Star Service Pros has the experience and equipment to handle all aspects of every homeowner\'s worst nightmare - a broken pipe flooding and damaging your home and belongings. 24 hours a day, 7 days a week, we\'re on call to stop the leak, repair the damaged line, and restore your home in a timely manner.',
        'When searching for help with a serious home flooding emergency, it\'s important to find a trustworthy local company that is available 24/7 and has reliable local plumbing, mold remediation, and restoration contractors ready to get to work.',
        'No matter how big or small, unexpected flooding robs you of your security and comfort and we\'ll be by your side to get things back to normal as quickly as possible.'
      ],
      specificServices: [
        {
          title: "Water Damage Restoration",
          list: [
            "Inspection & Damage Assessment",
            "Water Removal/Water Extraction",
            "Drying and Dehumidification",
            "Cleaning and Repair",
            "Restoration"
          ]
        },
        {
          title: "Mold Remediation",
          list: [
            "Inspection & Damage Assessment",
            "Mold Containment",
            "Air Filtration",
            "Mold Removal",
            "Mold-Infested Material Removal",
            "Cleaning of Damaged Property",
            "Restoration"
          ]
        },
        {
          title: "Storm Damage Restoration",
          list: [
            "Inspection & Damage Assessment",
            "Water Removal",
            "Drying and Dehumidification",
            "Cleaning and Repair",
            "Restoration"
          ]
        }
      ]
    };
  },
  metaInfo: {
    title: 'Five Star Service Pros - Flood Repair, Mold, & Restoration',
    meta: [
      {name: 'description', content: '24/7 Emergency flood repair and restoration. Five Star Service Pros is always here to help minimize damage and ensure you get back to normal as quickly as possible.'}
    ]
  }
};
</script>

<style>

</style>