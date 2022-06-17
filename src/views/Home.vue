<template>
    <Fotorama/>
    <SectionHome/>
    <SectionHome/>
    <SectionBottom/>
</template>

<script>
import Fotorama from '@/components/Fotorama.vue'
import SectionHome from '@/components/SectionHome.vue'
import SectionBottom from '@/components/SectionBottom.vue'

export default {
  name: 'Home',
  components: {
    Fotorama,
    SectionHome,
    SectionBottom
  }
}
</script>

<style>

</style>
