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
          src: 'coverfotorama-2.png'
        },

        form: {
          text: 'Organiser de temps en temps des balades incroyables et accessibles de tous en recevant les idées par mail !',
          src: 'FormImg-2.png'
        },
        sectionbottom: {
          text:"<p>Vous pouvez avec  notre application vous renseignez sur tous les parcours de randonnée, redécouvrir la France et sa biodiversité sous un autre angle mais aussi préserver notre patrimoine !</p><p>Une solution qui va permettre d’accompagner nos aventuriers à s’organiser et de bien s’orienter durant leur randonnée. En utilisant balise 360 les randonneurs vont participer selon leur localisation à récolter des données scientifiques sur l’impact du réchauffement climatique sur la nature.</p><p>Vous êtes les héros, qui participeront à sauvegarder notre cher patrimoine naturel !</p>",
          src:'cover-bottom-2.png'
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
    }
  }
}
</script>

<style>

</style>


