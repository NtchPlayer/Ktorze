<template>
  <div>
    <HeaderLogo />
    <Fotorama :datacomponent="fotorama" />
    <SectionHome :slides="slides" />
    <Citation />
    <SectionBottom :datacomponent="sectionBottom" />
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
  asyncData ({ query }) {
    let userId = 0
    switch (query.template) {
      case 'pour-tous':
        userId = 1
        break
      case 'en-famille':
        userId = 2
        break
      default:
        userId = 0
        break
    }
    const fotorama = [{
      text: '<span>Rejoignez la plateforme qui regroupe les endroits les  </span><span>plus spectaculaires du patrimoine naturel français.</span>',
      src: 'coverfotorama.png'
    }, {
      text: '<span>La plateforme qui propose des randonnées adaptées </span><span>à tous aventuriers engagés !</span>',
      src: 'coverfotorama-2.png'
    }, {
      text: '<span>Rejoignez la plateforme qui regroupe les endroits les  </span><span>plus spectaculaires du patrimoine naturel français.</span>',
      src: 'coverfotorama-3.png'
    }]

    const slides = [[{
      image: require('@/assets/icons/map.svg'),
      title: 'Des parcours personnalisés',
      content: 'Trouvez des parcours de randonnée adaptés à vos envies. Indiquez différents critères sur votre profil comme le niveau, la durée et le type de parcours.'
    }, {
      image: require('@/assets/icons/leaf.svg'),
      title: 'Protégez l’environnement',
      content: 'Ressourcez vous dans la nature mais ressourcez la également au travers de vos parcours. Randonnez tout en apprenant à observer, analyser et préserver la nature. '
    }, {
      image: require('@/assets/icons/heart.svg'),
      title: 'Rejoignez la communauté',
      content: 'Parcourez les sentiers mais aussi les avis de tous les randonneurs sur notre plateforme. Partagez vos expériences et encouragez celles des autres !'
    }], [{
      image: require('@/assets/icons/map.svg'),
      title: 'Des parcours personnalisés',
      content: "Trouvez des parcours de randonnée adaptés à vos envies. Même si vous randonnez de manière occasionnelle, l'application vous proposera une rando qui vous correspond."
    }, {
      image: require('@/assets/icons/leaf.svg'),
      title: 'Protégez l’environnement',
      content: 'Ressourcez vous dans la nature mais ressourcez la également au travers de vos parcours. Randonnez tout en apprenant à observer, analyser et préserver la nature.'
    }, {
      image: require('@/assets/icons/heart.svg'),
      title: 'Rejoignez la communauté',
      content: 'Parcourez les sentiers mais aussi les avis de tous les randonneurs. Vous y retrouverez des personnes qui comme vous, ne sont pas forcément des experts, et dont les conseils seront précieux et adaptés à votre profil !'
    }], [{
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
    }]]

    const sectionBottom = [{
      text: '<p>Vous pouvez avec notre application vous renseignez sur tous les parcours de randonnée, <strong>redécouvrir la France</strong> et sa biodiversité sous un autre angle mais aussi préserver notre patrimoine !</p><p>Une solution qui va permettre d’accompagner nos aventuriers à s’organiser et de bien s’orienter durant leur randonnée. En utilisant <strong>balise 360</strong> les randonneurs vont participer selon leur localisation à récolter des données scientifiques sur l’impact du réchauffement climatique sur la nature.</p><p>Vous êtes les héros, qui participeront à sauvegarder <strong>notre cher patrimoine naturel !</strong></p>',
      src: 'cover-bottom.png'
    }, {
      text: "<p>Si vous n'avez pas l'habitude de partir en randonnée, pas de panique ! Vous pouvez avec  notre application vous <strong>renseigner</strong> sur tous les parcours de randonnée et trouver <strong>facilement</strong> toutes les informations dont vous avez besoin pour préparer facilement votre sortie !</p><p>Si vous n'utilisez pas une boussole tous les quatre matin, devenez un expert et impressionnez vos amis en utilisant nos cartes interactives détaillées avec notre GPS embarqué ! En plus, en utilisant <strong>balise 360</strong> les randonneurs vont participer selon leur localisation à récolter des données scientifiques sur l’impact du réchauffement climatique sur la nature.</p><p>Vous êtes les héros, qui participeront à sauvegarder <strong>notre cher patrimoine naturel !</strong></p>",
      src: 'cover-bottom-2.png'
    }, {
      text: '<p>Vous pouvez avec notre application vous renseignez sur tous les parcours de randonnée, <strong>redécouvrir la France</strong> et sa biodiversité sous un autre angle mais aussi préserver notre patrimoine !</p><p>Une solution qui va permettre d’accompagner nos aventuriers à s’organiser et de bien s’orienter durant leur randonnée. En utilisant <strong>balise 360</strong> les randonneurs vont participer selon leur localisation à récolter des données scientifiques sur l’impact du réchauffement climatique sur la nature.</p><p>Vous êtes les héros, qui participeront à sauvegarder <strong>notre cher patrimoine naturel !</strong></p>',
      src: 'cover-bottom-3.png'
    }]

    const form = [{
      text: 'Recevez par mail des idées de circuits extraordinaires, avec toutes les informations pour planifier votre périple !',
      src: 'FormImg.png'
    }, {
      text: 'Organiser de temps en temps des balades incroyables et accessibles de tous en recevant les idées par mail !',
      src: 'FormImg-2.png'
    }, {
      text: 'Recevez par mail des idées de sorties qui feront plaisir à toute la famille !',
      src: 'FormImg-3.png'
    }]

    return {
      slides: slides[userId],
      fotorama: fotorama[userId],
      form: form[userId],
      sectionBottom: sectionBottom[userId]
    }
  },
  watchQuery: true,
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
