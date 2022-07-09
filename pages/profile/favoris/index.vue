<template>
  <div>
      <div class="profile-nav">
        <button>
          <figure>
            <img @click.self="back" src="@/assets/icons/arrow-left.svg" alt="">
          </figure>
        </button>
        <h1 class="profile-title">Détail</h1>
        <div></div>
      </div>
    <main class="profile">
      <CardTravel
        v-for="(favori, i) of favoris"
        :key="i"
        :data="favori"
      />
    </main>
  </div>
</template>

<script>
import CardTravel from '@/components/card/CardTravel.vue'

export default {
  name: 'Favoris',
  components: {
    CardTravel
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
          name: 'Patrimoine architectural',
          level: 3,
          location: 'Hautes-Alpes, France',
          checked: '24/01/2022',
          content: 'Jetez un coup d’oeil à cet itinéraire en boucle de 13,0 km près de Ceillac, Hautes-Alpes. Généralement considéré comme un parcours difficile, il faut en moyenne 5h12mins pour le parcourir. Cet itinéraire est idéal pour la randonnée. La meilleure période de visite est de juin à octobre. Les chiens sont les bienvenus et peuvent être lâchés à certains endroits.',
          isWishlist: true
        },
        {
          img: [
            {
              src: 'coverfotorama-3.png',
              alt: 'dsbghlibl'
            },
            {
              src: 'coverfotorama-2.png',
              alt: 'regeyyqe'
            },
            {
              src: 'coverfotorama.png',
              alt: 'oyiutre'
            }
          ],
          name: 'Patrimoine cancer',
          level: 2,
          location: '',
          checked: '',
          content: 'Jetez un coup d’oeil à cet itinéraire en boucle de 13,0 km près de Ceillac, Hautes-Alpes. Généralement considéré comme un parcours difficile, il faut en moyenne 5h12mins pour le parcourir. Cet itinéraire est idéal pour la randonnée. La meilleure période de visite est de juin à octobre. Les chiens sont les bienvenus et peuvent être lâchés à certains endroits.',
          isWishlist: true
        },
        {
          img: [
            {
              src: 'coverfotorama-2.png',
              alt: 'dsbghlibl'
            },
            {
              src: 'coverfotorama.png',
              alt: 'regeyyqe'
            },
            {
              src: 'coverfotorama-3.png',
              alt: 'oyiutre'
            }
          ],
          name: 'Patrimoine test 3',
          level: 1,
          location: 'Sud, France',
          checked: '24/01/2022',
          content: 'Jetez un coup d’oeil à cet itinéraire en boucle de 13,0 km près de Ceillac, Hautes-Alpes. Généralement considéré comme un parcours difficile, il faut en moyenne 5h12mins pour le parcourir. Cet itinéraire est idéal pour la randonnée. La meilleure période de visite est de juin à octobre. Les chiens sont les bienvenus et peuvent être lâchés à certains endroits.',
          isWishlist: false
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
