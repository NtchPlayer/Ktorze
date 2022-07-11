<template>
  <div class="app-container">
    <Header class="desktop" :links="links" />
    <Nuxt class="max-width" />
    <NavBar class="mobile" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
// import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header,
    // Footer,
    NavBar
  },
  data () {
    return {
      links: [{
        text: 'Randonnée',
        name: 'trails'
      }]
    }
  }
}
</script>

<style lang="scss">
.app-container main{
  padding-top: 30px;
}

@media screen and (min-width: 768px) {
  .app-container main{
    padding-top: 150px;
    margin-bottom: 40px;
  }
}
</style>
