<template>
  <div class="card-travel">
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
        <img class="card-travel-content-bottom--img" src="@/assets/icons/heart-empty-white.svg" alt="">
      </div>
    </div>
    <div class="card-travel-header">
      <CardTravelSlider :data-slider="data.img" />
      <p class="card-travel-header--level">
        Niveau {{ data.level }}
      </p>
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
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      &-header{
        position: relative;
        z-index: 1;
        border-radius: 15px;
        &--level{
          max-width: max-content;
          position: absolute;
          bottom: 40px;
          left: 12px;
          z-index: 5;
          padding: 14px 27px;
          border-radius: 20px;
          background: var(--brown-color);
          color: var(--white-color);
        }
        .swiper-container{
          border-radius: 15px;
        }
      }
      &-content{
        border-radius: 15px;
        padding: 20px;
        background: var(--brown-color);
        margin-top: -26px;
        font-family: 'Apfel';
        color: var(--white-color);
        z-index: 2;
        order: 2;
        &--name{
          font-size: 1.5rem;
          font-weight: bold;
          line-height: 25px;
          margin-bottom: 5px;
          font-family: 'Gotham';
        }
        &--location{
          font-size: 1rem;
          line-height: 22px;
        }
        &--checked{
          font-size: 0.75rem;
          line-height: 22px;
          margin-top: 10px;
        }
        &-bottom{
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          img{
            width: 40px;
            stroke: red;
          }
        }
      }
      .swiper{
        .slide{
          img{
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 15px;
          }
        }
      }
      .swiper-pagination{
        bottom: 50px;
        &-bullet{
          width: 12px;
          height: 12px;
          margin: 0 8px !important;
          background: var(--white-color);
          opacity: 1;
          &-active{
            background: var(--brown-color);
          }
        }
      }
    }
  }
</style>
