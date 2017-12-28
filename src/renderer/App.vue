<template>
  <div id="app">
    <div class="row">
      <app-player
        v-if="showPlayer"
        :videoId="videoId"
        class="col-12"></app-player>

      <app-title class="col-12" v-show="!showPlayer"></app-title>
      <app-search class="col-12" v-show="!showPlayer"></app-search>
    </div>
  </div>
</template>

<script>
  import Search from './components/search/Search.vue'
  import Title from './components/includes/Title.vue'
  import Player from './components/player/Player.vue'
  import { busPlayer } from './main'

  export default {
    data () {
      return {
        showPlayer: false
      }
    },
    components: {
      appTitle: Title,
      appSearch: Search,
      appPlayer: Player
    },
    created () {
      busPlayer.$on('cardWasClicked', videoId => {
        this.videoId = videoId
        this.showPlayer = true
      })

      busPlayer.$on('closeWasClicked', close => {
        if (close === true) {
          this.showPlayer = false
        }
      })
    }
  }
</script>

<style lang="sass">

</style>
