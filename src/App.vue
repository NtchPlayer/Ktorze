<template>
  <Header/>
  <Fotorama/>
  <router-view />
</template>

<script>
import Header from '@/components/Header.vue'
import Fotorama from '@/components/Fotorama.vue'

export default {
  name: 'App',
  components: {
    Header,
    Fotorama
  }
}
</script>

<style src="./style/reset.css"></style>
<style lang="scss" src="./style/main.scss"></style>
