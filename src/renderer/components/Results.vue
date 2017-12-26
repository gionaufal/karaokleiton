<template>
  <div class="row justify-content-center">
    <div class="card"
      v-for="video in videos"
      :key="video.id.videoId">

        <div class="img-container">
          <img :src="video.snippet.thumbnails.medium.url">
        </div>       

        <div class="card-block">
          <h4 class="card-title">{{ video.snippet.title }}</h4>
        </div>

      </div>
  </div>
</template>

<script>
  export default {
    props: ['videos']
  }
</script>

<style lang="sass" scoped>
  .row
    flex-wrap: wrap

  .card
    margin: 0 10px 30px 10px
    width: 18%

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
