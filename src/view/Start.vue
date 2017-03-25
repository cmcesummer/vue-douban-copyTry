<template>
  <router-link to="/hello">
    <img src="../assets/logo.png" class="img">
    404
  </router-link>
</template>

<script>
  export default {
      mounted() {
          console.log('in')
      }
  }
</script>

<style scoped>
  img{
    border:1px solid #e5e5e5
  }
</style>
