<template>
  <div>
    <Fotorama :datacomponent="fotorama" />
    <SectionHome :slides="slides" />
    <Citation />
    <SectionBottom :datacomponent="sectionbottom" />
    <FormNewsletter :datacomponent="form" />
  </div>
</template>

<script>
import Fotorama from '@/components/Fotorama.vue'
import SectionHome from '@/components/SectionHome.vue'
import SectionBottom from '@/components/SectionBottom.vue'
import Citation from '@/components/Citation.vue'
import FormNewsletter from '@/components/FormNewsletter.vue'

export default {
  name: 'Home',
  components: {
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
        src: 'coverfotorama.png'
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
        content: 'Parcourez les sentiers mais aussi les avis de tous les randonneurs sur notre plateforme. Partagez vos expériences et encouragez celles des autres !'
      }],
      sectionbottom: {
        text: '<p>Grâce à l’application, vous aurez à disposition de <strong>nombreux parcours de randonnée.</strong></p><p><strong>Redécouvrez la France et sa biodiversité sous un autre angle et préservez notre patrimoine !</p>',
        text2: '<p>Aidez-nous aussi à récolter des données scientifiques sur l’impact du réchauffement climatique sur la nature en fonction de votre localisation.</p><p>Vous êtes les héros qui aideront à sauvegarder notre cher patrimoine naturel !</p>',
        src: 'cover-bottom.png'
      },
      form: {
        text: 'Recevez par mail des idées de circuits extraordinaires, avec toutes les informations pour planifier votre périple !',
        src: 'FormImg.png'
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
