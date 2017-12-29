<template>
  <div>
   <youtube
    player-width="100%"
    player-height="100%"
    @ended="playNext"
    :player-vars="{autoplay: 1, controls: 1, showinfo: 0}"
    :video-id="videoId"></youtube>

    <div class="controls">
      <a
        class="button"
        @click="stopVideo">
        <i class="fas fa-stop"></i>
      </a>

      <a
        class="button"
        @click="playNext">
        <i class="fas fa-step-forward"></i>
      </a>
    </div>
  </div>
</template>

<script>
  import { playerBus } from '../../main'
  import db from '../../Database'

  let videosRef = db.ref('videos')

  export default {
    data () {
      return {
        videoId: null
      }
    },
    methods: {
      stopVideo () {
        playerBus.$emit('closeWasClicked', true)
      },
      playFirst () {
        videosRef
          .limitToFirst(1)
          .once('child_added')
          .then(dataSnapshot => {
            let video = dataSnapshot.val()
            this.videoId = video.videoId
          })
      },
      playNext () {
        // let video = videosRef.child('videoId/' + this.videoId)
        // console.log(video.)
      }
    },
    computed: {
      videoUri () {
        if (this.videoId) {
          return 'http://www.youtube.com/embed/' + this.videoId + '?autoplay=1&controls=0&showinfo=0'
        }
      }
    },
    created () {
      this.playFirst()
    }
  }
</script>

<style lang="sass" scoped>
  div
    height: 99vh

  .controls
    position: fixed
    left: 30px
    top: 10px

    .button
      color: white
      cursor: pointer
      font-size: 1.5rem

      &:hover
        color: fade-out(white, 0.5)
</style>
