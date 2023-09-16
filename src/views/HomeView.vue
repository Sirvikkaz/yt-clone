<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <i class="bi bi-list"></i>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
