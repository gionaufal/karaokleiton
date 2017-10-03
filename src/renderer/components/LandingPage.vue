<template>
  <div>
    <v-navigation-drawer
      persistent
      clipped
      v-model="drawer"
      light
      enable-resize-watcher
      absolute
      dark
      right
    >
      <search></search>
    </v-navigation-drawer>

    <v-toolbar class="indigo" dark fixed>
      <v-spacer></v-spacer>
      <v-toolbar-title>Karaokleiton 🎤 🎹 🎶 🎸</v-toolbar-title>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <main>
      <v-container fluid>
        <player></player>
      </v-container>
    </main>
  </div>
</template>

<script>
import Search from './LandingPage/Search'
import Player from './LandingPage/Player'

export default {
  name: 'landing-page',
  data () {
    return {
      drawer: true
    }
  },
  components: {
    Search,
    Player
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
