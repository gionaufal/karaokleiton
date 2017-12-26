<template>
  <section>
    <input
      type="text"
      v-model="keyword"
      @input="searchMusic"
      placeholder="Busque pela música aqui">
      <input type="checkbox" v-model="karaokeOnly">
  </section>  
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => {
      return {
        keyword: null,
        karaokeOnly: true
      }
    },
    methods: {
      searchMusic () {
        const baseUrs = 'https://www.googleapis.com/youtube/v3/search'
        const apiKey = 'AIzaSyD5lcXLJGhyiRdRNPcfT8ZJyEkSUadEi6E'

        if (this.keyword !== null && this.keyword.length > 2) {
          axios
            .get(baseUrs, {
              params: {
                part: 'snippet',
                q: this.keyword,
                key: apiKey
              }
            })
            .then(result => {
              console.log(result)
            })
            .catch(error => {
              console.log(error)
            })
        }
      }
    }
  }
</script>