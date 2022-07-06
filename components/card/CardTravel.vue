<template>
  <div class="card-travel">
    <div class="card-travel-header">
      <CardTravelSlider :data-slider="data.img" />
      <p class="card-travel-header--level">
        Niveau {{ data.level }}
      </p>
      <img class="card-travel-header--img" src="@/assets/icons/heart.svg" alt="">
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
    data: { type: Object, required: true }
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
