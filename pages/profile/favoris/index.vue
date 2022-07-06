<template>
  <main>
    <button @click.self="back">
      &lt;
    </button>
    <CardTravel
      v-for="(favori, i) of favoris"
      :key="i"
      :data="favori"
    />
  </main>
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
          isWishlist: true
        },
        {
          img: [
            {
              src: 'coverfotorama-2.png',
              alt: 'dsbghlibl'
            },
            {
              src: 'coverfotorama-1.png',
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
