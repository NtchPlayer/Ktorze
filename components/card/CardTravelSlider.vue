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
  .profile{
    margin: 80px 0;
    &-nav{
      display: flex;
      height: 70px;
      justify-content: space-between;
      align-items: center;
      background: var(--green-color);
      width: 100vw;
      padding: 0 20px;
      position: fixed;
      top: 0;
      z-index: 100;
      color: var(--background-color);
    }
    &-title{
      font-size: 1.25rem;
    }
    .card-travel{
      max-width: 600px;
      margin: auto auto 30px auto;
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
          padding: 14px 27px;
          border-radius: 5px;
          background: var(--green-color);
          color: var(--background-color);
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
          color: var(--orange-color);
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
            height: 270px;
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
  }
</style>
