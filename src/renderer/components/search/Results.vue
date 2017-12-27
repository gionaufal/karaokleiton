<template>
  <div class="row">
    <div class="col-12 justify-content-around">
      <div class="card"
        v-for="video in videos"
        :key="video.id.videoId"
        @click="playVideo(video.id.videoId)">

        <div class="img-container">
          <img :src="video.snippet.thumbnails.medium.url">
        </div>       

        <div class="card-block">
          <h4 class="card-title">{{ video.snippet.title }}</h4>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import { busPlayer } from '../../main'

  export default {
    props: ['videos'],
    methods: {
      playVideo (videoId) {
        busPlayer.$emit('cardWasClicked', videoId)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .col-12
    display: flex
    flex-wrap: wrap

  .card
    margin: 0 0 15px 0
    width: 19%

  .card-block
    padding: 0.5rem

  .card-title
    font-size: 0.9em
    margin-bottom: 0

  .img-container
    align-items: center
    background-color: black
    display: flex
    justify-content: center
    height: 120px

    img
      max-height: 100%
      max-width: 100%
</style>
