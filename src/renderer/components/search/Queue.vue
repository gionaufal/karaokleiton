<template>
  <div class="col-4">
    <div class="row">
      <h1 class="col-12">Fila</h1>
      <div class="col-12">
        <button class="btn btn-sm btn-success">
          <i class="fas fa-play-circle"></i> Tocar Fila
        </button>
      </div>
      <ul>
        <li
          v-for="(video, index) in videos"
          :key="index">
            {{ video.title }}
          </li>
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
