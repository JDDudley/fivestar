<template>
  <div class="component">
    <h1>{{ service }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
  export default {
    name: 'CommercialPlumbing',
    data () {
      return {
        service: 'Commercial Plumbing',
        description: 'Five Star has the knowledge and experience to handle your commercial plumbing needs in a prompt and professional fashion.'
      }
    }
  }
</script>