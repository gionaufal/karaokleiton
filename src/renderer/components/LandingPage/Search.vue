<template>
  <div>
    <v-form>
      <v-text-field 
      v-model="input_val"
      @keyup.enter.native="getVideos()"
      label="Qual é a música?">
      </v-text-field>
    </v-form>

  <div class="search-box">
    <p>Searching for: {{input_val}} karaoke</p>

    <v-card v-for="video in videos" :key="video.id.videoId" @click="changeVideo(video.id.videoId)">
      <v-card-media :src="video.snippet.thumbnails.medium.url">
        <v-card-title class="">
            <div class="title-video">{{video.snippet.title}}</div>
          </v-card-title>
      </v-card-media>
    </v-card>

  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'search',
  data () {
    return {
      videos: [],
      input_val: ''
    }
  },

  methods: {
    getVideos () {
      let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='
      url = url + this.input_val + 'karaoke' + '&key=AIzaSyDNtvz2GHiQJga-12qTPbbysPcRehON7V0'

      axios.get(url)
        .then(response => {
          this.videos = response.data.items
        })
        .catch(error => {
          console.log(error)
        })
    },
    changeVideo (videoId) {
      this.$root.$emit('changeVideo', videoId)
    }
  }
}
</script>

<style scopedSlots>
 .title-video {
   font-size: 20px;
   text-shadow: 3px 1px 1px rgba(150, 150, 150, 0.6);
 }
</style>

