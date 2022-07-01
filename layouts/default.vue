<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '@/components/Footer'

export default {
  name: 'Default',
  components: {
    Footer,
    Header
  }
}
</script>
