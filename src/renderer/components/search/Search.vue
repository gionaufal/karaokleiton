<template>
  <section>
    <app-form
      :karaokeOnly="karaokeOnly"
      :keyword="keyword"></app-form>

    <div class="row">
      <app-results
        :videos="results"
        v-if="results!==null"></app-results>

      <app-queue></app-queue>
    </div>

  </section>
</template>

<script>
  import axios from 'axios'
  import results from './Results.vue'
  import form from './Form.vue'
  import queue from './Queue.vue'
  import { busSearch } from '../../main'

  export default {
    data () {
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
      appResults: results,
      appForm: form,
      appQueue: queue
    },
    created () {
      busSearch.$on('inputWasChanged', keyword => {
        this.keyword = keyword
        this.searchMusic()
      })

      busSearch.$on('checkboxWasChanged', value => {
        this.karaokeOnly = value
        this.searchMusic()
      })
    }
  }
</script>
