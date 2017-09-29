<template>
  <div class="container-fluid">
    <div class="row">
      <div class="column-left col-sm-9">
        <player></player>
      </div>
      <div class="column-right col-sm-3">
        <search></search>
      </div>
    </div>
  </div>
</template>

<script>
import Search from './LandingPage/Search'
import Player from './LandingPage/Player'

export default {
  name: 'landing-page',
  components: {
    Search,
    Player
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
