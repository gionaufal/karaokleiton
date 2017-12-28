<template>
  <div class="col-4">
    <div class="row">
      <h1 class="col-12">Fila</h1>

      <ul>
        <li v-for="video in videos">{{ video.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import db from '../../Database'

  let videosRef = db.ref('videos')

  export default {
    firebase () {
      return {
        videos: videosRef
      }
    }
  }
</script>
