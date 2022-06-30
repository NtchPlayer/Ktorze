<template>
  <div>
    <HeaderLogo/>
    <Fotorama :datacomponent="fotorama"/>
    <SectionHome :slides="slides"/>

    <!-- <SectionRecommendation />
    <SectionBar /> -->
    <Citation/>
    <SectionBottom :datacomponent="sectionbottom"/>
    <FormNewsletter :datacomponent="form"/>
  </div>
</template>

<script>
import HeaderLogo from '@/components/HeaderLogo.vue'
import Fotorama from '@/components/Fotorama.vue'
import SectionHome from '@/components/SectionHome.vue'
import SectionBottom from '@/components/SectionBottom.vue'
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
        src: 'coverfotorama-3.png'
      },

      slides: [
        {
          image: require('@/assets/icons/map.svg'),
          title: 'Des parcours personnalisés',
          content: "Trouvez des parcours de randonnée à faire en famille. Indiquez vos différents critères sur votre profil comme le niveau, la durée et le type de parcours que vous aimez faire. Balise 360 se charge du reste !",
        }, {
          image: require('@/assets/icons/leaf.svg'),
          title: 'Protégez l’environnement',
          content: "Ressourcez vous dans la nature mais ressourcez la également au travers de vos parcours. Randonnez tout en apprenant à vos enfants à observer, analyser et préserver la nature.",
        }, {
          image: require('@/assets/icons/heart.svg'),
          title: 'Rejoignez la communauté',
          content: "Ressourcez vous dans la nature mais ressourcez la également au travers de vos parcours. Randonnez tout en apprenant à vos enfants à observer, analyser et préserver la nature.",
        }
      ],

      sectionbottom: {
        text:"<p>Vous recherchez une randonnée facile à faire en famille ? Balise 360 vous propose différents parcours de randonnées adaptés à vos envies  et toutes les informations dont vous avez besoin pour préparer facilement votre sortie !</p><p>Si vos enfants aiment les courses d'orientation et les chasses aux trésors, utilisez nos cartes interactives et son GPS embarqué pour partir à l'aventure ! Comme on pense à la planète et à l'avenir de nos enfants, en utilisant balise 360 les randonneurs vont participer selon leur localisation à récolter des données scientifiques sur l’impact du réchauffement climatique sur la nature.</p><p>Vous êtes les héros, qui participeront à sauvegarder notre cher patrimoine naturel !</p>",
        src:'cover-bottom-3.png'
      },

      form: {
        text: 'Recevez par mail des idées de sorties qui feront plaisir à toute la famille !',
        src: 'FormImg-3.png'
      },
    }
  }
}
</script>
