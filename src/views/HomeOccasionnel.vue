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
        text: '<span>La plateforme qui propose des randonnées adaptées </span><span>à tous aventuriers engagés !</span>',
        src: 'coverfotorama-2.png'
      },

      slides: [
        {
          image: require('@/assets/icons/map.svg'),
          title: 'Des parcours personnalisés',
          content: "Trouvez des parcours de randonnée adaptés à vos envies. Même si vous randonnez de manière occasionnelle, l'application vous proposera une rando qui vous correspond.",
        }, {
          image: require('@/assets/icons/leaf.svg'),
          title: 'Protégez l’environnement',
          content: "Ressourcez vous dans la nature mais ressourcez la également au travers de vos parcours. Randonnez tout en apprenant à observer, analyser et préserver la nature.",
        }, {
          image: require('@/assets/icons/heart.svg'),
          title: 'Rejoignez la communauté',
          content: "Parcourez les sentiers mais aussi les avis de tous les randonneurs. Vous y retrouverez des personnes qui comme vous, ne sont pas forcément des experts, et dont les conseils seront précieux et adaptés à votre profil !",
        }
      ],
      
      sectionbottom: {
        text:"<p>Si vous n'avez pas l'habitude de partir en randonnée, pas de panique ! Vous pouvez avec  notre application vous renseigner sur tous les parcours de randonnée et trouver facilement toutes les informations dont vous avez besoin pour préparer facilement votre sortie !</p><p>Si vous n'utilisez pas une boussole tous les quatre matin, devenez un expert et impressionnez vos amis en utilisant nos cartes interactives détaillées avec notre GPS embarqué ! En plus, en utilisant balise 360 les randonneurs vont participer selon leur localisation à récolter des données scientifiques sur l’impact du réchauffement climatique sur la nature.</p><p>Vous êtes les héros, qui participeront à sauvegarder notre cher patrimoine naturel !</p>",
        src:'cover-bottom-2.png'
      },

      form: {
        text: 'Organiser de temps en temps des balades incroyables et accessibles de tous en recevant les idées par mail !',
        src: 'FormImg-2.png'
      },
    }
  }
}
</script>

<style>

</style>


