<template>
  <div class="app-container">
    <Nuxt />
    <NavBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
.app-container{
  main{
    padding: 20px;
  }
}
</style>
