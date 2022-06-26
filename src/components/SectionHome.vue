<template>
<section class="section-home">
  <h2 class="section-title"><img class="section-title-img" alt="deco citation" src="@/assets/green-loop.svg">La nature vous appelle !</h2>
  <div class="container-card">
    <CardHome
      v-for="(card, i) of cards"
      :key="i"
      :title="card.title"
      :description="card.description"
      :icon="card.icon"
    />
  </div>
  <router-link class="btn-primary" :to="{name: 'home'}">Télécharger l'application</router-link>
  <img class="section-home-img" alt="deco citation" src="@/assets/topo-left.png">
  <img class="section-home-img-second" alt="deco citation" src="@/assets/topo-right.png">
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
          title: 'Des parcours personnalisés',
          description: 'Trouvez des parcours de randonnée adaptés à vos envies. Indiquez différents critères sur votre profil comme le niveau, la durée et le type de parcours.',
          icon: {
            src: 'map',
            alt: 'Carte'
          }
        }, {
          title: 'Protégez l’environnement',
          description: 'Ressourcez vous dans la nature mais ressourcez la également au travers de vos parcours. Randonnez tout en apprenant à observer, analyser et préserver la nature.',
          icon: {
            src: 'leaf',
            alt: 'Feuille'
          }
        }, {
          title: 'Rejoignez la communauté',
          description: 'Parcourez les sentiers mais aussi les avis de tous les randonneurs sur notre plateforme. Partagez vos expériences et encouragez celles des autres !',
          icon: {
            src: 'heart',
            alt: 'Coeur'
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
  position: relative;
  &-img{
    position: absolute;
    top: -245px;
    left: -460px;
    z-index: -1;
    &-second{
      position: absolute;
      bottom: -225px;
      right: -460px;
      z-index: -1;
    }
  }
  .btn-primary{
    text-align: center;
    margin: auto;
    max-width: max-content;
    display: block;  
  }
  .section-title{
    position: relative;
    &-img{
      position: absolute;
      top: -35px;
      left: -55px;
    }
  }
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
