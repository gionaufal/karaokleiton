<template>
  <div>
    <h1 class='title'>🎤 Karaokleiton 🎶</h1>
    <div class="video-container">
      <iframe
         v-if="loaded"
         :src="this.videoUrl"
         width="560"
         height="315"
         frameborder="0"
         allowfullscreen>
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'player',
  data () {
    return {
      loaded: false,
      videoUrl: this.$root.$on('changeVideo', id => {
        this.loaded = true
        this.videoUrl = 'https://www.youtube.com/embed/' + id
      })
    }
  }
}
</script>

<style>
.video-container {
  position:relative;
  padding-bottom:56.25%;
  padding-top:30px;
  height:0;
  overflow:hidden;
}

.video-container iframe, .video-container object, .video-container embed {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}

h1 {
  margin-bottom: 20px;
  margin-top: 10px;
  color: #b58900;
}

body {
  background-color: #002b36;
  color: #93a1a1
}
</style>
