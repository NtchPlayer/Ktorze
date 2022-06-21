<template>
  <Menu/>
  <Header/>
  <router-view />
  <NotificationsCookie />
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import NotificationsCookie from '@/components/notifications/NotificationsCookie'
import Menu from '@/components/Menu.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    NotificationsCookie,
    Menu
}
}
</script>

<style src="./style/reset.css"></style>
<style lang="scss" src="./style/main.scss"></style>
