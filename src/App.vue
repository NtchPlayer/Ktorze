<template>
  <Header/>
  <Footer/>
  <router-view />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Header, 
    Footer
  }
}
</script>

<style src="./style/reset.css"></style>
<style lang="scss" src="./style/main.scss"></style>
