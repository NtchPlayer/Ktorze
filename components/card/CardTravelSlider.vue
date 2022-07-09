<template>
  <swiper class="swiper" :options="swiperOptions">
    <swiper-slide v-for="(data, i) of dataSlider" :key="i" class="slide">
      <figure>
        <img :src="require(`@/assets/fotorama/${data.src}`)" :alt="data.alt">
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
  .profile{
    margin-bottom: 80px;
    &-nav{
      display: flex;
      height: 105px;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 30px;
    }
    &-title{
      font-size: 1.5rem;
      font-weight: bold;
    }
    .card-travel{
      max-width: 600px;
      margin: auto auto 15px auto;
      padding: 15px 15px 30px 15px;
      background: #99B2A5;
      border-radius: 5px;
      &-header{
        position: relative;
        &--level{
          max-width: max-content;
          position: absolute;
          bottom: 14px;
          left: 12px;
          z-index: 5;
          padding: 14px 27px;
          border-radius: 5px;
          background: var(--orange-color);
          color: var(--background-color);
        }
      }
      &-content{
        color: #4a4a4a;
        font-family: 'Apfel';
        margin-left: 10px;
        &--name{
          font-size: 1.5rem;
          padding: 15px 0 5px 0;
          font-weight: bold;
          color: var(--background-color);
        }
        &--location{
          font-size: 1rem;
          line-height: 22px;
        }
        &--checked{
          font-size: 0.75rem;
          line-height: 22px;
        }
        &-bottom{
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          img{
            width: 40px;
            fill: var(--green-color);
          }
        }
      }
      .swiper{
        .slide{
          img{
            width: 100%;
            height: 300px;
            object-fit: cover;
          }
        }
      }
      .swiper-pagination{
        &-bullet{
          width: 12px;
          height: 12px;
          margin: 0 8px !important;
          background: var(--green-color);
          opacity: 1;
          &-active{
            background: var(--orange-color);
          }
        }
      }
    }
  }
</style>
