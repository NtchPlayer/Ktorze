<template>
<section class="section-home">
  <h2 class="section-title">Les fonctionnalités qui vous manquaient</h2>
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
          title: 'Des cartes hors ligne avec de la géolocalisation',
          description: 'Redécouvrez les joies du parcours au grand air sans risque de vous perdre ou de dévier de votre parcours car vous aurez toujours votre carte disponible sur votre téléphone.',
          icon: {
            src: 'map',
            alt: 'Carte'
          }
        }, {
          title: 'L’histoire de la faune et de la flore en direct',
          description: 'Il est important d’être un randonneur averti pour sa patrie et bien connaître l’histoire du lieu pour en profiter pleinement.',
          icon: {
            src: 'bee',
            alt: 'Abeille'
          }
        }, {
          title: 'Des conseils de rando spécifiques à vous',
          description: 'Perdu sur quelques points ou juste débutant ? Laissez-vous guider par nos astuces. Plus vous utilisez l’application, plus notre précision vous concernant augmente !',
          icon: {
            src: 'idea',
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
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
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
