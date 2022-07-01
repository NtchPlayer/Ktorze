<template>
  <HeaderLogo/>
  <Fotorama :datacomponent="fotorama"/>
  <SectionHome :slides="slides"/>
  
  <!-- <SectionRecommendation />
  <SectionBar /> -->
  <Citation/>
  <SectionBottom :datacomponent="sectionbottom"/>
  <FormNewsletter :datacomponent="form"/>
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
      fotorama: {
        text: '<span>Rejoignez la plateforme qui regroupe les endroits les  </span><span>plus spectaculaires du patrimoine naturel français.</span>',
        src: 'coverfotorama.png'
      },

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
      
      sectionbottom: {
        text:"<p>Vous pouvez avec notre application vous renseignez sur tous les parcours de randonnée, <strong>redécouvrir la France</strong> et sa biodiversité sous un autre angle mais aussi préserver notre patrimoine !</p><p>Une solution qui va permettre d’accompagner nos aventuriers à s’organiser et de bien s’orienter durant leur randonnée. En utilisant <strong>balise 360</strong> les randonneurs vont participer selon leur localisation à récolter des données scientifiques sur l’impact du réchauffement climatique sur la nature.</p><p>Vous êtes les héros, qui participeront à sauvegarder <strong>notre cher patrimoine naturel !</strong></p>",
        src:'cover-bottom.png'
      },

      form: {
        text: 'Recevez par mail des idées de circuits extraordinaires, avec toutes les informations pour planifier votre périple !',
        src: 'FormImg.png'
      },
    }
  }
}
</script>

<style>

</style>


