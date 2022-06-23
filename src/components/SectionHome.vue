<template>
<section class="section-home">
  <h2 class="section-title">Balise 360, c’est</h2>
  <div class="container-card">
    <CardHome
      v-for="(card, i) of cards"
      :key="i"
      :title="card.title"
      :description="card.description"
      :icon="card.icon"
    />
  </div>
</section>

</template>

<script>
import CardHome from './card/CardHome'

export default {
  name: 'SectionHome',
  components: {
    CardHome
  },
  data () {
    return {
      cards: [
        {
          title: 'Une carte et son itinéraire',
          description: 'Redécouvrez les joies du parcours au grand air sans risque de vous perdre ou de dévier de votre parcours car vous aurez toujours votre carte disponible sur votre téléphone.',
          icon: {
            src: 'map',
            alt: 'Carte'
          }
        }, {
          title: 'S\'engager pour préserver',
          description: 'Devenez un acteur du changement en contribuant à la conservation du patrimoine français. Rien de plus simple, il suffira de nous partager vos observations sur votre environnement.',
          icon: {
            src: 'bee',
            alt: 'Abeille'
          }
        }, {
          title: 'Une communauté active et passionnée',
          description: 'Perdu sur quelques points ou juste débutant ? Laissez-vous guider par les retours de la communauté. Plus vous utilisez Balise 360, plus notre précision vous concernant augmente !',
          icon: {
            src: 'community',
            alt: 'Ampoule'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.section-home{
  margin: 100px auto;
  max-width: 1124px;
}

.container-card{
  margin-top: 100px;
  gap: 25px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
}
 @media (min-width: 0px) and (max-width: 768px) {
  .section-home{
    margin-bottom: 100px;
    padding: 0 25px;
  }
  .container-card{
    flex-direction: column;
    align-items: center;
  }
 }

</style>
