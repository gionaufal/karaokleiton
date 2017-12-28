<template>
    <div class="col-9">
      <div class="row">
        <h1 class="col-12">Resultados</h1>
        <div class="cards col-12 justify-content-around">
          <div class="card"
            v-for="video in videos"
            :key="video.id.videoId">

            <div class="img-container">
              <img :src="video.snippet.thumbnails.medium.url">
            </div>

            <div class="card-block">
              <h4 class="card-title">{{ video.snippet.title }}</h4>
              <a
                @click="addToQueue(video)"
                class="btn btn-sm btn-outline-info">
                <i class="fas fa-plus-circle"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { playerBus } from '../../main'
  import db from '../../Database'

  let videosRef = db.ref('videos')

  export default {
    props: ['videos'],
    methods: {
      playVideo (videoId) {
        playerBus.$emit('cardWasClicked', videoId)
      },
      addToQueue (video) {
        let newItem = {
          videoId: video.id.videoId,
          title: video.snippet.title,
          thumb: video.snippet.thumbnails.medium.url
        }
        videosRef.push(newItem)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .cards
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
