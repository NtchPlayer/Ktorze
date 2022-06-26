<template>
  <HeaderLogo/>
  <Fotorama/>
  <SectionHome/>
  
  <!-- <SectionRecommendation />
  <SectionBar /> -->
  <Citation/>
  <SectionBottom/>
  <FormNewsletter />
</template>

<script>
import HeaderLogo from '@/components/HeaderLogo.vue'
import Fotorama from '@/components/Fotorama.vue'
import SectionHome from '@/components/SectionHome.vue'
import SectionBottom from '@/components/SectionBottom.vue'
// import SectionRecommendation from '@/components/SectionRecommendation'
// import SectionBar from '@/components/SectionBar'
import Citation from '@/components/Citation.vue'
import FormNewsletter from '@/components/FormNewsletter.vue'

export default {
  name: 'Home',
  components: {
    HeaderLogo,
    Fotorama,
    SectionHome,
    SectionBottom,
    // SectionRecommendation,
    // SectionBar,
    Citation,
    FormNewsletter
  }
}
</script>

<style>

</style>


