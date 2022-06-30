<template>
  <HeaderLogo/>
  <Fotorama/>
  <SectionHome :slides="slides"/>
  
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
  },
  data () {
    return{
        formText: 'test',
        slides: [
        {
          image: require('@/assets/icons/map.svg'),
          title: 'Des parcours personnalisés',
          content: 'Trouvez des parcours de randonnée adaptés à vos envies. Indiquez différents critères sur votre profil comme le niveau, la durée et le type de parcours.',
        }, {
          image: require('@/assets/icons/leaf.svg'),
          title: 'Protégez l’environnement',
          content: 'Ressourcez vous dans la nature mais ressourcez la également au travers de vos parcours. Randonnez tout en apprenant à observer, analyser et préserver la nature. ',
        }, {
          image: require('@/assets/icons/heart.svg'),
          title: 'Rejoignez la communauté',
          content: 'Parcourez les sentiers mais aussi les avis de tous les randonneurs sur notre plateforme. Partagez vos expériences et encouragez celles des autres !',
        }
      ],
    }
  }
}
</script>

<style>

</style>


