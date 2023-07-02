<template>
  <NavBar/>
  <Home/>
</template>

<script>
import Home from './components/Home.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    Home,
    NavBar
  }
}
</script>

<style>

</style>
