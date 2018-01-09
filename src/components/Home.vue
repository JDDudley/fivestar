<template>
  <div class="component">
    <h1>{{ msg }}</h1><br><br><br><br><br><br><br><br>
    <h1>{{ msg }}</h1><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
