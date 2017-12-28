<template>
  <div class="col-3">
    <div class="row">
      <h1 class="col-12">Fila</h1>
      <div class="col-12">
        <button class="btn btn-sm btn-success">
          <i class="fas fa-play-circle"></i> Tocar Fila
        </button>

        <button
          @click="clearQueue"
          class="btn btn-sm btn-danger">
          <i class="fas fa-eraser"></i> Limpar Fila
        </button>
      </div>
      <ul>
        <li
          v-for="(video, index) in videos"
          :key="index">
            {{ video.title }}
            <a
              @click="removeFromQueue(video)">
              <i class="fas fa-trash-alt"></i>
            </a>
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
    },
    methods: {
      removeFromQueue (video) {
        videosRef.child(video['.key']).remove()
      },
      clearQueue () {
        confirm('Todas as músicas serão removidas da fila. Deseja continuar?', () => {
          videosRef.remove()
        })
      }
    }
  }
</script>
