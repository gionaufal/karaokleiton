<template>
  <div id="app">
    <app-title class="col"></app-title>
    <app-search class="col"></app-search>
  </div>
</template>

<script>
  import Search from './components/Search.vue'
  import Title from './components/Title.vue'

  export default {
    components: {
      appTitle: Title,
      appSearch: Search
    }
  }
</script>

<style lang="sass">
  
</style>
