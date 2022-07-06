<template>
  <swiper class="swiper" :options="swiperOptions">
    <swiper-slide v-for="(data, i) of dataSlider" :key="i" class="slide">
      <figure>
        <img :src="require(`@/assets/fotorama/${data.src}`)" alt="test">
      </figure>
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination" />
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'CardTravel',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    dataSlider: { type: Array, required: true }
  },
  data () {
    return {
      swiperOptions: {
        spaceBetween: 35,
        watchOverflow: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="scss">
  .card-travel{
    &-header{
      position: relative;
      &--img{
        position: absolute;
        width: 40px;
        height: 35px;
        top: 10px;
        right: 10px;
        z-index: 5;
      }
      &--level{
        max-width: max-content;
        position: absolute;
        bottom: 10px;
        left: 10px;
        z-index: 5;
        padding: 10px 20px;
        border-radius: 15px;
        border: 1px solid;
      }
    }
    &-content{
      &--name{
        font-size: 1.25rem;
        padding: 10px 0;
        font-weight: bold;
      }
      &--location{
        font-size: 1rem;
        line-height: 22px;
      }
      &--checked{
        font-size: 0.75rem;
        line-height: 18px;
      }
      &-bottom{
        display: flex;
        justify-content: space-between;
        font-family: 'Apfel';
        align-items: flex-end;
        img{
          width: 30px;
        }
      }
    }
    .swiper{
      .slide{
        img{
          width: 100%;
          height: 170px;
          object-fit: cover;
        }
      }
    }
    .swiper-pagination{
      &-bullet{
        width: 12px;
        height: 12px;
        margin: 0 8px !important;
        background: var(--orange-color);
        opacity: 1;
        &-active{
          background: var(--green-color);
        }
      }
    }
  }
</style>
