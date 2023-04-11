<template>
  <div id="app">
  
    <router-view></router-view>

  </div>
</template>

<script>
import Main from '../src/views/Main.vue'

export default {
  name: 'App',
  components:{
    Main
  }
}
</script>

<style>
html,body,h3,p {
  margin: 0;
  padding: 0;
}
</style>