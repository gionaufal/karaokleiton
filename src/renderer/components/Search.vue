<template>
  <section>
    <input
      type="text"
      v-model="keyword"
      @input="searchMusic"
      placeholder="Busque pela música aqui">
      <input type="checkbox" v-model="karaokeOnly">

      <app-results
        :videos="results"
        v-if="results!==null"></app-results>
  </section>  
</template>

<script>
  import axios from 'axios'
  import results from './Results.vue'

  export default {
    data: () => {
      return {
        keyword: null,
        karaokeOnly: true,
        results: null
      }
    },
    methods: {
      searchMusic () {
        const baseUrs = 'https://www.googleapis.com/youtube/v3/search'
        const apiKey = 'AIzaSyD5lcXLJGhyiRdRNPcfT8ZJyEkSUadEi6E'

        let keyword = (this.karaokeOnly ? this.keyword + ' + karaoke' : this.keyword)

        if (this.keyword !== null && this.keyword.length > 2) {
          axios
            .get(baseUrs, {
              params: {
                part: 'snippet',
                q: keyword,
                type: 'video',
                videoEmbeddable: 'true',
                maxResults: 20,
                key: apiKey
              }
            })
            .then(result => {
              this.results = result.data.items
            })
            .catch(error => {
              console.log(error)
            })
        }
      }
    },
    components: {
      appResults: results
    }
  }
</script>