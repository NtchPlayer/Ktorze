<template>
  <router-view />
  <NotificationsCookie />
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue'
import NotificationsCookie from '@/components/notifications/NotificationsCookie'

export default {
  name: 'App',
  components: {
    Footer,
    NotificationsCookie
  }
}
</script>

<style src="./style/reset.css"></style>
<style lang="scss" src="./style/main.scss"></style>
