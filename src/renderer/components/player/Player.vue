<template>
  <div>
    <iframe
      id="ytplayer"
      type="text/html"
      width="100%"
      height="100%"
      :src="videoUri"
      frameborder="0"/>
    <a
      @click="stopVideo">
      <i class="fas fa-window-close"></i>
    </a>
  </div>
</template>

<script>
  import { playerBus } from '../../main'

  export default {
    props: ['videoId'],
    methods: {
      stopVideo () {
        playerBus.$emit('closeWasClicked', true)
      }
    },
    computed: {
      videoUri () {
        if (this.videoId) {
          return 'http://www.youtube.com/embed/' + this.videoId + '?autoplay=1&controls=0&showinfo=0'
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  div
    height: 99vh

  a
    cursor: pointer
    position: fixed
    left: 30px
    top: 10px

    .fa-window-close
      color: white
      font-size: 2rem
</style>
