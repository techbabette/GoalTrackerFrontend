<template>
  <div id="app">
    <Navbar id="NavComponent"/>
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
  flex-direction: column;
}
.VariableFlexDirection{
    flex-direction: row;
    justify-content: space-between;
}
#NavComponent{
    min-height: 8vh;
    max-height: 10vh;
    display: flex;
    position: relative;
    border-right: 1px solid black;
}
@media only screen and (min-width: 768px) {
  .VariableFlexDirection {
    flex-direction: column;
  }
  #app{
    flex-direction: row;
  }
  #NavComponent{
    min-height: 100vh;
    max-height: 100vh;
    height: 100vh;
  }
}
</style>
