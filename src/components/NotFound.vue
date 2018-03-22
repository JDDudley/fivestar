<template>
  <div class="component">
    <img src="../assets/logo_dk.png" class="logo hidden-xs-only" alt="Five Star Service Pros">
    <h1>{{ title }}</h1>
    <p>Sorry, it looks like the page you're looking for wasn't found. Please use the list of helpful links below to find what you're looking for:</p>
    <div class="center">
      <v-btn color="primary" href="/">Go Home</v-btn>
      <v-btn color="primary" href="/services">Services</v-btn>
      <v-btn color="primary" href="/contact">Contact Us</v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NotFound',
    data: () => ({
      title: 'Page Not Found'
    }),
    metaInfo: {
      title: 'Five Star Service Pros - Page Not Found'
    }
  }
</script>

<style>
</style>