<template>
  <div>
    <HeaderLogo />
    <Fotorama :datacomponent="fotorama" />
    <SectionHome :slides="slides" />
    <Citation />
    <SectionBottom :datacomponent="sectionbottom" />
    <FormNewsletter :datacomponent="form" />
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
    Citation,
    FormNewsletter
  },
  data () {
    return {
      fotorama: {
        text: '<span>Rejoignez la plateforme qui regroupe les endroits les  </span><span>plus spectaculaires du patrimoine naturel français.</span>',
        src: 'coverfotorama-3.png'
      },
      slides: [{
        image: require('@/assets/icons/map.svg'),
        title: 'Des parcours personnalisés',
        content: 'Trouvez des parcours de randonnée à faire en famille. Indiquez vos différents critères sur votre profil comme le niveau, la durée et le type de parcours que vous aimez faire. Balise 360 se charge du reste !'
      }, {
        image: require('@/assets/icons/leaf.svg'),
        title: 'Protégez l’environnement',
        content: 'Ressourcez vous dans la nature mais ressourcez la également au travers de vos parcours. Randonnez tout en apprenant à vos enfants à observer, analyser et préserver la nature.'
      }, {
        image: require('@/assets/icons/heart.svg'),
        title: 'Rejoignez la communauté',
        content: 'Ressourcez vous dans la nature mais ressourcez la également au travers de vos parcours. Randonnez tout en apprenant à vos enfants à observer, analyser et préserver la nature.'
      }],
      sectionbottom: {
        text: '<p>Vous pouvez avec notre application vous renseignez sur tous les parcours de randonnée, <strong>redécouvrir la France</strong> et sa biodiversité sous un autre angle mais aussi préserver notre patrimoine !</p><p>Une solution qui va permettre d’accompagner nos aventuriers à s’organiser et de bien s’orienter durant leur randonnée. En utilisant <strong>balise 360</strong> les randonneurs vont participer selon leur localisation à récolter des données scientifiques sur l’impact du réchauffement climatique sur la nature.</p><p>Vous êtes les héros, qui participeront à sauvegarder <strong>notre cher patrimoine naturel !</strong></p>',
        src: 'cover-bottom-3.png'
      },
      form: {
        text: 'Recevez par mail des idées de sorties qui feront plaisir à toute la famille !',
        src: 'FormImg-3.png'
      }
    }
  },
  head () {
    return {
      title: ', la solution de tous les randonneurs engagés',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Balise 360, la solution qui permet à tous les randonneurs passionnés et engagés de préparer ses itinéraires de randonnées, de se repérer avec ses cartes numériques et son GPS intégré.'
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: 'Balise 360, la solution de tous les randonneurs engagés'
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: 'Balise 360, la solution qui permet à tous les randonneurs passionnés et engagés de préparer ses itinéraires de randonnées, de se repérer avec ses cartes numériques et son GPS intégré.'
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Balise 360, la solution de tous les randonneurs engagés'
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Balise 360, la solution qui permet à tous les randonneurs passionnés et engagés de préparer ses itinéraires de randonnées, de se repérer avec ses cartes numériques et son GPS intégré.'
      }]
    }
  }
}
</script>
