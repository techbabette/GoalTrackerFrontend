<template>
<div id="NavComponent">
    <div id="Navbar" data-bs-toggle="true" class="d-flex show collapse collapse-horizontal flex-column flex-shrink-0 p-3 bg-light">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <span class="fs-4">Goal Tracker</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li v-for="Link, index in AvailableLinks" :key="index" class="nav-item">
        <router-link :to="Link.path" class="nav-link" :class="{active : ActiveLinkPath === Link.path}">{{ Link.text }}</router-link>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>User</strong>
      </a>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><a class="dropdown-item" href="#">New goal...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  <a href="" id="NavCollapser" @click="SwitchNavbarCollapse()" data-bs-toggle="collapse" class="rounded-3 text-decoration-none" data-bs-target="#Navbar">{{ IsNavbarCollapsed ? "&gt;" : "&lt;" }}</a>
</div>
</template>
<script>
export default{
    name: "NavigationComponent",
    data(){
        return {
            //Belongs in a store module, is here for development purposes
            ActiveLinkPath : "/goals",
            AvailableLinks : [
                {
                    text: "Home", path: "/",
                },
                {
                    text: "Goals", path: "/goals"
                }
            ],
            IsNavbarCollapsed : false
        }
    },
    methods:{
        SwitchNavbarCollapse(){
            this.IsNavbarCollapsed = !this.IsNavbarCollapsed;
        }
    }
}
</script>
<style>
.collapse:not(.show){
    display: none !important;
}
#Navbar{
    padding-right: 20px !important;
}
#NavComponent{
    height: 100vh;
    display: flex;
    position: relative;
    border-right: 1px solid black;
}
#NavCollapser{
    padding: 10px;
    background-color: black;
    position: absolute;
    bottom: 1%;
    left: 105%;
    z-index: 5;
    font-weight: bold;
}
</style>