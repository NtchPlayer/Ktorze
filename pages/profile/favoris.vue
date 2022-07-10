<template>
  <div class="profile-favoris">
    <div class="profile-router-view-header profile-router-view-header-favoris">
      <nuxt-link class="mobile" type="button" :to="{name: 'profile'}">
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.6963 0.979824C10.2126 0.476452 9.43285 0.476452 8.94918 0.979824L0.746605 9.51661C0.361646 9.91725 0.361646 10.5644 0.746605 10.9651L8.94918 19.5019C9.43285 20.0052 10.2126 20.0052 10.6963 19.5019C11.18 18.9985 11.18 18.1869 10.6963 17.6836L3.54989 10.2357L10.7062 2.78786C11.18 2.29476 11.18 1.47292 10.6963 0.979824Z" fill="#5C8670"/>
        </svg>
      </nuxt-link>
      <h1 class="profile-router-view-header-title">
        <strong v-text="'Favoris'" />
      </h1>
      <button type="button" @click.prevent="filter = !filter">
        <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6667 18.3333C11.6667 19.2538 12.4129 20 13.3333 20H16.6667C17.5871 20 18.3333 19.2538 18.3333 18.3333V18.3333C18.3333 17.4129 17.5871 16.6667 16.6667 16.6667H13.3333C12.4129 16.6667 11.6667 17.4129 11.6667 18.3333V18.3333ZM1.66667 0C0.746193 0 0 0.746192 0 1.66667V1.66667C0 2.58714 0.746192 3.33333 1.66667 3.33333H28.3333C29.2538 3.33333 30 2.58714 30 1.66667V1.66667C30 0.746192 29.2538 0 28.3333 0H1.66667ZM5 10C5 10.9205 5.74619 11.6667 6.66667 11.6667H23.3333C24.2538 11.6667 25 10.9205 25 10V10C25 9.07953 24.2538 8.33333 23.3333 8.33333H6.66667C5.74619 8.33333 5 9.07953 5 10V10Z" fill="#5C8670" />
        </svg>
      </button>
    </div>
    <section class="container-favoris-card">
      <CardTravel
        v-for="(favori, i) of favoris"
        :key="i"
        :data="favori"
      />
    </section>
    <ModalFilter
      @closeFilter="filter = false"
      @choice="selectFilter"
      v-show="filter"
      :options="options"
    />
  </div>
</template>

<script>
import CardTravel from '@/components/card/CardTravel.vue'
import ModalFilter from '@/components/modal/ModalFilter'

export default {
  name: 'Favoris',
  components: {
    ModalFilter,
    CardTravel
  },
  layout: 'app',
  // middleware: 'auth'
  data () {
    return {
      filter: false,
      options: {},
      favoris: [{
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
      }, {
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
      }, {
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
      }]
    }
  },
  methods: {
    selectFilter (payload) {
      if (payload.option in this.options) {
        if (this.options[payload.option].includes(payload.choice)) {
          const index = this.options[payload.option].indexOf(payload.choice)
          return this.options[payload.option].splice(index, 1)
        }
        return this.options[payload.option].push(payload.choice)
      } else {
        this.options[payload.option] = [payload.choice]
      }
      console.log(payload)
      // this.options.
    }
  }
}
</script>

<style lang="scss">
.container-favoris-card{
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 20px;
}

@media screen and (min-width: 1200px) {
  .container-favoris-card{
    grid-template-columns: 1fr 1fr;
  }
}
</style>
