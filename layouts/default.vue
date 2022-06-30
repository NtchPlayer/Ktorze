<template>
  <div>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'Default',
  components: {
    Footer
  }
}
</script>
