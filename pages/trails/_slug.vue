<template>
  <div>
    <main class="trail-card">
      <button class="btn-back">
        <img class="mobile" src="@/assets/icons/arrow-left-white.svg" alt="Fleche retour" @click.prevent="back">
        <img class="desktop" src="@/assets/icons/arrow-left.svg" alt="Fleche retour" @click.prevent="back">
      </button>
      <CardTravelDetail
        :data="data"
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
  async asyncData ({ $axios, params }) {
    const { data } = await $axios.get(`/trails/${params.slug}`)
    return {
      data
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">
  .trail-card{
    margin-bottom: 30px;
    position: relative;
    .btn-back{
      position: absolute;
      z-index: 5;
      top: 45px;
      left: 10px;
    }
  }
  @media screen and (min-width: 769px) {
    .trail-card{
      .btn-back{
        top: 155px;
        left: -70px;
      }
    }
  }
</style>
