<template>
  <v-app id="app" toolbar footer dark>
    <router-view></router-view>
  </v-app>
</template>

<script>
  export default {
    name: 'karaokleiton',
    data () {
      return {
        drawer: true
      }
    }
  }
</script>

<style>
  
</style>
