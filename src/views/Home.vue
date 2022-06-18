<template>
  <Fotorama/>
  <SectionHome/>
  <SectionBottom/>
  <SectionRecommendation />
</template>

<script>
import Fotorama from '@/components/Fotorama.vue'
import SectionHome from '@/components/SectionHome.vue'
import SectionBottom from '@/components/SectionBottom.vue'
import SectionRecommendation from '@/components/SectionRecommendation'

export default {
  name: 'Home',
  components: {
    Fotorama,
    SectionHome,
    SectionBottom,
    SectionRecommendation
  },
  mounted () {
    console.log('test')
    console.log(this.$gtm.debugEnabled())
    console.log(this.$gtm.enabled())
  }
}
</script>

<style>

</style>
