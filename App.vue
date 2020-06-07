<template>
  <div id="app">
    <router-view>
      <Welcome></Welcome>
    </router-view>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'

export default {
  name: 'App',
  components: {
    Welcome,
  }
}
</script>

<style lang="scss">
  #app {
    max-height: 100vh;
  }
</style>
