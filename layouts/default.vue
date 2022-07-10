<template>
  <div>
    <Header
      @openMenu="responsiveMenu = true"
      :links="links"
    />
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
      responsiveMenu: false,
      links: [{
        id: 'nav-link-functionality',
        text: 'Nos fonctionnalités',
        hash: 'fonctionnalites'
      }, {
        id: 'nav-link-choose',
        text: 'Nous choisir',
        hash: 'nous-choisir'
      }, {
        id: 'nav-link-newsletter',
        text: 'Notre newsletter',
        hash: 'newsletter'
      }]
    }
  },
  watch: {
    $route () {
      this.responsiveMenu = false
    }
  }
}
</script>
