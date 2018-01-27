<template>
  <div class="component">
    <img src="../assets/logo_dk.png" class="logo hidden-xs-only" alt="Five Star Service Pros">
    <h1>{{ title }}</h1>
    <p>Thanks for reaching out to us! We will be in contact as soon as possible, and want to thank you again for giving us the opportunity to serve you with the most reliable and affordable plumbing, sewer, and drain cleaning services in Boise. We look forward to exceeding your expectations on what trustworthy service means in the Treasure Valley!</p>
  </div>
</template>

<script>
  export default {
    name: 'thanks',
    data: () => ({
      title: 'Thank You!'
    })
  }
</script>

<style>
</style>