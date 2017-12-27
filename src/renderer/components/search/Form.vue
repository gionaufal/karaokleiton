<template>
  <div class="row">
    <div class="col-12">
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          v-model="searchKey"
          @input="search"
          placeholder="Busque pela música aqui">
          <span class="input-group-addon">
            <input type="checkbox" v-model="karaokeOnly" title="Somente Karaoke">
          </span>        
      </div>
    </div>
  </div>  
</template>

<script>
  import { busSearch } from '../../main'

  export default {
    data () {
      return {
        searchKey: this.keywork
      }
    },
    props: ['keyword', 'karaokeOnly'],
    watch: {
      karaokeOnly () {
        busSearch.$emit('checkboxWasChanged', this.karaokeOnly)
      }
    },
    methods: {
      search () {
        busSearch.$emit('inputWasChanged', this.searchKey)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .row
    margin-bottom: 30px
</style>
