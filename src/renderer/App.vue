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
  import { playerBus } from './main'
  import db from './Database'

  let videosRef = db.ref('videos')

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
    methods: {
      playNow (videoId) {
        this.videoId = videoId
        this.showPlayer = true
      }
    },
    created () {
      playerBus.$on('cardWasClicked', videoId => {
        this.playNow(videoId)
      })

      playerBus.$on('closeWasClicked', close => {
        if (close === true) {
          this.showPlayer = false
        }
      })

      playerBus.$on('playQueue', play => {
        if (play === true) {
          videosRef
            .limitToFirst(1)
            .on('child_added', snapshop => {
              let video = snapshop.val()
              this.playNow(video.videoId)
            })
        }
      })
    }
  }
</script>

<style lang="sass">

</style>
