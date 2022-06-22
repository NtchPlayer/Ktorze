<template>
  <Fotorama/>
  <SectionHome/>
  <SectionBottom/>
  <SectionRecommendation />
  <SectionBar />
  <FormHome />
</template>

<script>
import Fotorama from '@/components/Fotorama.vue'
import SectionHome from '@/components/SectionHome.vue'
import SectionBottom from '@/components/SectionBottom.vue'
import SectionRecommendation from '@/components/SectionRecommendation'
import SectionBar from '@/components/SectionBar'
import FormHome from '@/components/FormHome'

export default {
  name: 'Home',
  components: {
    Fotorama,
    SectionHome,
    SectionBottom,
    SectionRecommendation,
    SectionBar,
    FormHome
  }
}
</script>

<style>

</style>
