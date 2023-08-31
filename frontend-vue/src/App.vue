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
  },
  async mounted(){
    console.log(this.$store.getters.token);
    if(this.$store.getters.token){
      let result = await this.$store.dispatch("getUserInformation", this.$store.getters.token);

      if(!result.success){
        this.$store.commit("addMessageToList", {text:"Session expired", success:false});
        this.$store.commit("emptySession");
        this.$router.push("/login");
        return;
      }

      this.$store.commit("setActiveUsername", result.body.username);
      this.$store.commit("setActiveUserRole", "user");
      this.$store.commit("addMessageToList", {text:"Continuing session", success:true});
    }
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
