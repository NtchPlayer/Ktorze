<template>
  <swiper class="swiper" :options="swiperOptions">
    <swiper-slide v-for="(data, i) of dataSlider" :key="i" class="slide">
      <figure>
        <img :src="require(`@/assets/trails/${folder}/${data.file}`)" :alt="data.alt">
      </figure>
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination" />
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'CardTravelSlider',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    dataSlider: { type: Array, required: true },
    folder: { type: String, required: true }
  },
  data () {
    return {
      swiperOptions: {
        spaceBetween: 35,
        watchOverflow: false,
        width: '100%',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style>
</style>
