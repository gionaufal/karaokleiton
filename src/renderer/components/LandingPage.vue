<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Search for a song</h2>
    <div>
      <input type="text" v-model="input_val" @change='getVideos()'>
    </div>

    <p>Searching for: {{input_val}} karaoke</p>
    <ul>
      <li v-for="video in videos">
        <a :href="'http://youtube.com/watch?v='+video.id.videoId">
          <img :src="video.snippet.thumbnails.default.url" alt="image">
          <p>name: {{video.snippet.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'landing-page',
  data () {
    return {
      msg: 'Welcome to Karaokleiton',
      videos: [],
      input_val: ''
    }
  },

  methods: {
    getVideos () {
      var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='
      url = url + this.input_val + 'karaoke' + '&key=AIzaSyDNtvz2GHiQJga-12qTPbbysPcRehON7V0'

      axios.get(url)
        .then(response => {
          this.videos = response.data.items
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>