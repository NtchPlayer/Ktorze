<template>
  <div class="card-travel">
    <div class="card-travel-header">
      <CardTravelSlider :data-slider="data.img" />
      <p class="card-travel-header--level">
        Niveau {{ data.level }}
      </p>
    </div>
    <div class="card-travel-content">
      <p class="card-travel-content--name" v-text="data.name" />
      <div class="card-travel-content-bottom">
        <div>
          <p class="card-travel-content--location" v-text="data.location" />
          <p v-if="data.checked !== ''" class="card-travel-content--checked">
            Sentier vérifié le : {{ data.checked }}
          </p>
          <p v-else class="card-travel-content--checked">
            Sentier non vérifié
          </p>
        </div>
        <img class="card-travel-content-bottom--img" src="@/assets/icons/heart.svg" alt="">
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
    data: { type: Object, required: true }
  }
}
</script>

<style lang="scss">
</style>
