<template>
  <main>
    <Fotorama :data-component="fotorama" />
    <SectionHome id="fonctionnalites" class="max-width" :data-component="slides" />
    <Citation class="max-width" />
    <SectionBottom id="nous-choisir" class="max-width" :data-component="sectionBottom" />
    <FormNewsletter id="newsletter" class="max-width" :data-component="form" />
  </main>
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
  asyncData ({ query }) {
    let templateId = 0
    switch (query.template) {
      case 'pour-tous':
        templateId = 1
        break
      case 'en-famille':
        templateId = 2
        break
      default:
        templateId = 0
        break
    }

    const imgsForm = [{
      src: 'FormImg.png',
      alt: 'Un homme fait de la randonnée dans la montagne'
    }, {
      src: 'FormImg-2.png',
      alt: "Un groupe d'ami observe un paysage"
    }, {
      src: 'FormImg-3.png',
      alt: 'Une mère et ses filles face à un lac de montagne'
    }]

    const fotorama = [{
      text: 'Rejoignez la plateforme qui regroupe les endroits les plus spectaculaires du patrimoine naturel français.',
      img: {
        alt: 'Homme campant sur un montagne',
        src: 'coverfotorama.png'
      }
    }, {
      text: 'La plateforme qui propose des randonnées adaptées à tous aventuriers engagés !',
      img: {
        alt: "Groupe d'ami se baladant dans une plaine",
        src: 'coverfotorama-2.png'
      }
    }, {
      text: 'La plateforme qui propose des randonnées adaptées à toutes les familles d\'aventuriers engagées !',
      img: {
        alt: "Un père et ses enfants autour d'un lac",
        src: 'coverfotorama-3.png'
      }
    }]

    const slides = [[
      'Trouvez des parcours de randonnée adaptés à vos envies. Indiquez différents critères sur votre profil comme le niveau, la durée et le type de parcours.',
      'Ressourcez vous dans la nature mais ressourcez la également au travers de vos parcours. Randonnez tout en apprenant à observer, analyser et préserver la nature.',
      'Parcourez les sentiers mais aussi les avis de tous les randonneurs sur notre plateforme. Partagez vos expériences et encouragez celles des autres !'
    ], [
      'Trouvez des parcours de randonnée adaptés à vos envies. Même si vous randonnez de manière occasionnelle, notre plateforme vous proposera une rando qui vous correspond.',
      'Ressourcez vous dans la nature mais ressourcez la également au travers de vos parcours. Randonnez tout en apprenant à observer, analyser et préserver la nature.',
      'Parcourez les sentiers mais aussi les avis de tous les randonneurs. Vous y retrouverez des personnes qui comme vous, ne sont pas forcément des experts, et dont les conseils seront précieux et adaptés à votre profil !'
    ], [
      'Trouvez des parcours de randonnée à faire en famille. Indiquez vos différents critères sur votre profil comme le niveau, la durée et le type de parcours que vous aimez faire. Balise 360 se charge du reste !',
      'Ressourcez vous dans la nature mais ressourcez la également au travers de vos parcours. Randonnez tout en apprenant à vos enfants à observer, analyser et préserver la nature.',
      'Parcourez les sentiers mais aussi les avis de familles de randonneurs qui racontent leurs expériences et dont les conseils seront précieux pour préparer votre randonnée !'
    ]]

    const sectionBottom = [{
      block1: 'Grâce à l’application, vous aurez à disposition de <strong>nombreux parcours de randonnée</strong>.<br><strong>Redécouvrez la France et sa biodiversité</strong> sous un autre angle et <strong>préservez notre patrimoine !</strong>',
      block2: 'Aidez-nous aussi à <strong>récolter des données scientifiques</strong> sur l’impact du réchauffement climatique sur la nature en fonction de votre localisation.<br>Vous êtes <strong>les héros qui aideront à sauvegarder notre cher patrimoine naturel !</strong>',
      img1: {
        alt: "Un couple s'ambrassent dans la montagne",
        src: 'cover-bottom.png'
      }
    }, {
      block1: "<strong>Si vous n'avez pas l'habitude de partir en randonnée, pas de panique !</strong><br>Vous pouvez avec notre application <strong>vous renseigner</strong> sur tous les parcours de randonnée et <strong>trouver facilement toutes les informations</strong> dont vous avez besoin pour préparer facilement votre sortie !",
      block2: 'En utilisant Balise 360, les randonneurs vont participer selon leur localisation à récolter des données scientifiques sur <strong>l’impact du réchauffement climatique</strong> sur la nature.<br>Vous êtes les héros, qui participeront à sauvegarder notre cher patrimoine naturel !',
      img1: {
        alt: "Groupe d'ami face à un paysage de montagne",
        src: 'cover-bottom-2.png'
      }
    }, {
      block1: 'Vous recherchez une randonnée facile à faire en famille ? <strong>Balise 360</strong> vous propose <strong>différents parcours de randonnées</strong> adaptés à vos envies et dispose de toutes les informations dont vous avez besoin pour préparer facilement votre sortie !',
      block2: "Comme on pense à la planète et à l'avenir de nos enfants, en utilisant Balise 360 les randonneurs vont participer selon leur localisation à récolter des données scientifiques sur <strong>l’impact du réchauffement climatique</strong> sur la nature.<br>Vous êtes les héros, qui participeront à sauvegarder notre cher patrimoine naturel !",
      img1: {
        alt: 'Un père et sa fille face à un lac de montagne',
        src: 'cover-bottom-3.png'
      }
    }]

    sectionBottom[templateId].img2 = imgsForm[templateId]

    const form = [{
      text: 'Recevez par mail des idées de circuits extraordinaires, avec toutes les informations pour planifier votre périple !'
    }, {
      text: 'Organiser de temps en temps des balades incroyables et accessibles de tous en recevant les idées par mail !'
    }, {
      text: 'Recevez par mail des idées de sorties qui feront plaisir à toute la famille !'
    }]

    form[templateId].img = imgsForm[templateId]

    return {
      slides: slides[templateId],
      fotorama: fotorama[templateId],
      form: form[templateId],
      sectionBottom: sectionBottom[templateId]
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
  },
  watchQuery: true
}
</script>
