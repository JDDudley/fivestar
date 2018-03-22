<template>
  <div class="component">
    <h1>{{ service }}</h1>
    <p v-for="p in description">{{ p }}</p>
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
  name: "ResidentialPlumbing",
  data() {
    return {
      service: "Residential Plumbing",
      description: [
        "Five Star Service Pros offer affordable and professional service for a range of residential plumbing needs. Kitchen sink clogged? Toilet stopped? Bath tub backed up? Let us help you with reliable and affordable service.",
        "From backed up drainpipes to full re-piping services, Five Star is here to provide the most reliable service in the Treasure Valley. And rest assured, all our jobs are priced by the job and not the hour. So you'll never be surprised by a bill at the end of the job.",
        "Listed below are just a few of our specialties:"
      ],
      specificServices: [
        {
          title: "Excavation",
          list: ["Water & Fuel Tank Installation", "Water & Fuel Tank Removal"]
        },
        {
          title: "Foundations",
          list: ["Basement Drainage Channels Repair"]
        },
        {
          title: "Plumbing",
          list: [
            "Clear Sewer Main",
            "Faucets, Fixtures and Pipe Repair",
            "Water Heater Install",
            "Water Heater Repair",
            "Drain & Sewer Pipe Inspection",
            "Gas Piping",
            "Clear Drain Clog or Blockage",
            "Sump Pump or Foundation Drain Install",
            "Sump Pump Repair",
            "Tankless Water Heater Install",
            "Tankless Water Heater Repair",
            "Water Main Install or Repair",
            "Sewer Main Install or Replace",
            "Drain Line Breakage Camera Locate",
            "Hydrojetting",
            "High Pressure Sewer Rehabilitation",
            "Trenchless Pipe Replacement"
          ]
        },
        {
          title: "Water Treatment Systems",
          list: [
            "Water Treatment & Purification Install",
            "Water Treatment & Purification Repair"
          ]
        }
      ]
    };
  },
  metaInfo: {
    title: "Five Star Service Pros",
    titleTemplate: "%s - Residential Plumbing Services",
    meta: [
      {
        name: "description",
        content:
          "Five Star Plumbing has the most reliable service in the Treasure Valley for all your residential plumbing needs. Kitchen, bath, laundry, and everything in between. Let us provide the service you deserve."
      }
    ]
  }
};
</script>