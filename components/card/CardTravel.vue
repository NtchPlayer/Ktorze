<template>
  <div class="card-travel">
    <div class="card-travel-header">
      <CardTravelSlider :dataSlider="data.img" />
      <p class="card-travel-header--level">Niveau {{ data.level }}</p>
      <img class="card-travel-header--img" src="@/assets/icons/heart.svg" alt="">
    </div>
    <div class="card-travel-content">
      <p class="card-travel-content--name">{{ data.name }}</p>
      <div class="card-travel-content-bottom">
        <div>
          <p class="card-travel-content--location">{{ data.location }}</p>
          <p v-if="data.checked != ''" class="card-travel-content--checked">Sentier vérifié le : {{ data.checked }}</p>
          <p v-else class="card-travel-content--checked">Sentier non vérifié</p>
        </div>
        <a href="#">
          <figure>
            <img src="@/assets/icons/download.svg" alt="">
          </figure>
        </a>
      </div>

    </div>

  </div>
</template>

<script>
import CardTravelSlider from '@/components/card/CardTravelSlider.vue'

export default {
  name: 'CardTravel',
  components: {
    CardTravelSlider
  },
  props: {
    data: Object
  }
}
</script>

<style lang="scss">
</style>
