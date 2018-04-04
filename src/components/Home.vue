<template>
  <div class="component">
    <!--<h1>{{ msg }}</h1>-->
    <img src="../assets/logo_dk.png" class="logo hidden-xs-only" alt="Five Star Service Pros">
    <div>
      <h1>Plumbing, Sewer and Drain Cleaning Experts</h1>
      <p>Welcome to Five Star Service Pros, the most reliable and affordable choice for your plumbing, sewer, septic, and drain
        cleaning needs in Boise and surrounding areas. With service available 24 hours a day, you know you can count on emergency
        services from a locally owned company.</p>
      <p>All services are performed by experienced plumbers with years of experience in every area of the plumbing and pipe
        service trade. Whether it's a kitchen sink replacement or a complete drain cleaning service, you can feel confident
        that our plumbing services are performed in the quickest, safest, and most effective manner.</p>
      <h2>Who Are Five Star Service Pros?</h2>
      <p>Five Star Service Pros is a local female-owned company with extensive experience in all areas of residential and commercial
        plumbing. Quality training, experience, and equipment are critical to ensuring that our customers receive the highest-level
        service on every job.</p>
    </div>
    <!-- Main Services -->
    <h1>Services Include</h1>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 md6 v-for="service in services" :key="service" class="center">
          {{ service }}
        </v-flex>
      </v-layout>
    </V-container>
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
    <!-- home advisor badges -->
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs4 text-xs-center>
          <a href="http://www.homeadvisor.com/c.Plumbing.Boise.ID.-12058.html#spid=61604027"><img alt="Top Rated Contractor - 5 Star Service Pros, LLC" src="http://www.homeadvisor.com/images/sp-badges/toprated-solid-border.png?sp=61604027&key=29a3cd3c7e116acee983f0a2a3439c88"
            /></a>
        </v-flex>
        <v-flex xs4 text-xs-center>
          <a href="http://www.homeadvisor.com/c.Plumbing.Boise.ID.-12058.html#spid=61604027"><img alt="5 Star Service Pros, LLC - HomeAdvisor Elite Service" src="http://www.homeadvisor.com/images/sp-badges/elite-solid-border.png?sp=61604027&key=29a3cd3c7e116acee983f0a2a3439c88"
            /></a>
        </v-flex>
        <v-flex xs4 text-xs-center>
          <a href="http://www.homeadvisor.com/rated.5StarServiceProsLLC.61604027.html"><img alt="Rated & Reviewed HomeAdvisor Pro" src="http://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=61604027&key=29a3cd3c7e116acee983f0a2a3439c88"
            /></a>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- service truck image -->
    <img src="../assets/service_truck.jpg" alt="Service Trucks Operating Throughout the Treasure Valley" class="logo">
  </div>
</template>

<script>
// import store from '../store'
  
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
        }],
      services: [
        'Residential Plumbing',
        'Toilets, Sinks, Garbage Disposals, & Drains',
        'Washers & Dryers',
        'Septic Tanks & Systems',             
        'Water Tanks',
        'Fuel Tanks',
        'Hot Water Heaters',
        'Basement Drainage',
        'Sewer Cleaning & Repair',
        'Installations',
        'Gas Piping',
        'Drain Clogs',
        'Sump Pumps',
        'Tankless Water Heaters',
        'Water Treatment & Purification'
      ]
    }
  },
  metaInfo: {
    title: 'Five Star Service Pros - Boise Plumbing, Sewer and Drain',
    meta: [
      {name: 'description', content: 'Five Star Service Pros is Boise\'s  most reliable and affordable choice for your plumbing, sewer, and drain cleaning needs. With service available 24 hours a day, you know you can count on emergency services from a locally owned company.'}
    ]
  }
}
</script>

<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
</style>