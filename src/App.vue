<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>HABIBO TP4</h1>
      <NavBar/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar 
  }
}
</script>

<style>

</style>
