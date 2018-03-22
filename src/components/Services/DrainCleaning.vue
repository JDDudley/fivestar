<template>
  <div class="component">
    <h1>{{ service }}</h1>
    <p v-for="p in description">{{ p }}</p>
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
  name: "DrainCleaning",
  data() {
    return {
      service: "Drain Cleaning",
      description: [
        "Whether its a clogged sink or tub, or an entire drainage system backed up, Five Star Service Pros has the experience and equipment to repair any damage and get you back to normal.",
        "Backed up drains can occur for a variety of reasons - from a simple clog to decades of undetected root damage. Five Star Service Pros has the latest industry equipment to do the most non-invasive inspections and find the exact culprit - without costly and time-consuming digs until the specific location of the backup is found.",
        "For the most reliable and experienced local service, contact Five Star Service Pros today."
      ],
      specificServices: [
        {
          title: "Drain Cleaning Services",
          list: [
            "Clear Sewer Main",
            "Faucets, Fixtures and Pipe Repair",
            "Clear Drain Clog or Blockage",
            "Sewer Pipe Inspection",
            "Drain Pipe Inspection",
            "Hydrojetting",
            "High Pressure Sewer Rehabilitation",
            "Sump Pump or Foundation Drain Install",
            "Sump Pump Repair",
            "Trenchless Pipe Replacement",
            "Water Main Install or Repair",
            "Sewer Main Install or Replace",
            "Drain Line Breakage Camera Locate"
          ]
        }
      ]
    };
  },
  metaInfo: {
    title: "Five Star Service Pros",
    titleTemplate: "%s - Drain Inspection & Cleaning",
    meta: [
      {
        name: "description",
        content:
          "Whether its a clogged sink or tub, or an entire drainage system backed up, Five Star Service Pros has the experience and equipment to repair any damage and get you back to normal."
      }
    ]
  }
};
</script>