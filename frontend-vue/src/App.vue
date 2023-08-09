<template>
  <div id="app">
    <Navbar style="height: 100vh;"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
}
</style>
