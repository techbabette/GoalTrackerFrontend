<template>
  <div id="app">
    <Navbar id="NavComponent"/>
    <MessageDisplay/>
    <router-view class="p-3"></router-view>
  </div>
</template>

<script>
import Navbar from './components/Nav.vue'
import MessageDisplay from './components/MessageDisplay.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    MessageDisplay
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}
.active{
  color: white !important;
}
.VariableFlexDirection{
    flex-direction: row;
    justify-content: space-between;
}
#NavComponent{
    display: flex;
    position: relative;
    border-right: 1px solid black;
}
@media only screen and (min-width: 992px) {
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
