<template>
  <div id="app">
    <div class="row">
      <app-title class="col-12"></app-title>
      <app-search class="col-12"></app-search>
    </div>
  </div>
</template>

<script>
  import Search from './components/search/Search.vue'
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
