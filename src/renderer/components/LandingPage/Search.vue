<template>
  <div class="search-box">
    <h2>Search for a song</h2>
    <div>
      <input type="text" v-model="input_val" @change='getVideos()'>
    </div>

    <p>Searching for: {{input_val}} karaoke</p>
    <ul>
      <li v-for="video in videos">
        <a @click="changeVideo(video.id.videoId)">
          <img :src="video.snippet.thumbnails.medium.url" alt="image">
          <p>name: {{video.snippet.title}}</p>
        </a>
      </li>
    </ul>
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

<style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    cursor: pointer;
  }
</style>

