<template>
  <div>
    <Header @openMenu="responsiveMenu = true" />
    <NavResponsive v-show="responsiveMenu" @closeMenu="responsiveMenu = false" />
    <Nuxt />
    <NotificationsCookie />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavResponsive from '@/components/NavResponsive'
import Footer from '@/components/Footer'
import NotificationsCookie from '@/components/notifications/NotificationsCookie'

export default {
  name: 'Default',
  components: {
    Footer,
    Header,
    NavResponsive,
    NotificationsCookie
  },
  data () {
    return {
      responsiveMenu: false
    }
  },
  watch: {
    $route () {
      this.responsiveMenu = false
    }
  }
}
</script>
