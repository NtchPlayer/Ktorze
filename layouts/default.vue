<template>
  <div>
    <HeaderLogo />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import HeaderLogo from '@/components/HeaderLogo.vue'
import Footer from '@/components/Footer'

export default {
  name: 'Default',
  components: {
    Footer,
    HeaderLogo
  }
}
</script>
