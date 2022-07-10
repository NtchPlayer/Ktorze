<template>
  <div>
    <main class="profile">
      <button class="btn-back">
        <figure>
          <img src="@/assets/icons/arrow-left.svg" alt="Retour Arrière" @click.prevent="back">
        </figure>
      </button>
      <CardTravelDetail
        v-for="(favori, i) of favoris"
        :key="i"
        :data="favori"
      />
    </main>
  </div>
</template>

<script>
import CardTravelDetail from '@/components/card/CardTravelDetail.vue'

export default {
  name: 'Favoris',
  components: {
    CardTravelDetail
  },
  layout: 'app',
  // middleware: 'auth'
  data () {
    return {
      favoris: [
        {
          img: [
            {
              src: 'coverfotorama.png',
              alt: 'dsbghlibl'
            },
            {
              src: 'coverfotorama-2.png',
              alt: 'regeyyqe'
            },
            {
              src: 'coverfotorama-3.png',
              alt: 'oyiutre'
            }
          ],
          name: 'Le Cirque de Gavarnie',
          level: 3,
          location: 'Les Pyrénnés',
          checked: '08/07/2021',
          isWishlist: true,
          content: 'Le Cirque de Gavarnie est un espace naturel préservé exceptionnel. Il est classé au Patrimoine Mondial de l\'Humanité par l’Unesco.<br>Le Cirque de Gavarnie, une randonnée engagée comme vous. En effectuant cet itinéraire vous jouez un rôle décisif pour la préservation de la nature. En effet, en répondant au questionnaire à la fin de la randonnée vous participez activement à la recherche des impacts du réchauffement climatique sur l’environnement.',
          geojson: [
            {
              img: '',
              alt: ''
            }
          ],
          length: '8,17',
          elevation: '212',
          duration: '2h55',
          levelDescription: '5  à 6 heures de marche par jour environ<br>Dénivelé positif de 500 à 800 mètres<br>Bonne condition physique requise<br>Prévoyez un entraînement avant votre départ',
          trafficDescription: '',
          gearCategoryId: '',
          gearCategoryDescription: 'Nous vous recommandons cependant de regarder la météo avant d’effectuer votre randonnée et d’adapter cette liste à vos besoins !',
          categoryDescription: [
            {
              title: 'Équipements',
              gears: [
                {
                  gear: 'Chapeau'
                },
                {
                  gear: 'Chapeau'
                },
                {
                  gear: 'Chapeau'
                },
                {
                  gear: 'Chapeau'
                },
                {
                  gear: 'Chapeau'
                },
                {
                  gear: 'Chapeau'
                }
              ],
              stuff: [
                {
                  gear: 'Chapeau'
                },
                {
                  gear: 'Chapeau'
                },
                {
                  gear: 'Chapeau'
                },
                {
                  gear: 'Chapeau'
                },
                {
                  gear: 'Chapeau'
                },
                {
                  gear: 'Chapeau'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
