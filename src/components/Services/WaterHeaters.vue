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
  name: "WaterHeaters",
  data() {
    return {
      service: "Water Heaters",
      description:
        "Five Star Service Pros has experience with every type of water heating system.",
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
        }
      ]
    };
  },
  metaInfo: {
    title: 'Five Star Service Pros - Flood Repair',
    meta: [
      {name: 'description', content: '24/7 Emergency flood repair and restoration. Five Star Service Pros is always here to help minimize damage and ensure you get back to normal as quickly as possible.'}
    ]
  }
};
</script>

<style>

</style>