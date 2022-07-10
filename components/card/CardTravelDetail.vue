<template>
  <div class="card-travel">
    <div class="card-travel-content">
      <p class="card-travel-content--name" v-text="data.name" />
      <div class="card-travel-content-bottom">
        <div>
          <h2 class="card-travel-content--location" v-text="data.location" />
          <p v-if="data.checked !== ''" class="card-travel-content--checked">
            Sentier vérifié le : {{ data.checked }}
          </p>
          <p v-else class="card-travel-content--checked">
            Sentier non vérifié
          </p>
        </div>
      </div>

      <div class="card-travel-content-main">
        <div class="card-travel-content-main-description" v-html="data.content"></div>
        <figure>
          <img src="" alt="">
        </figure>
        <h2 class="card-travel-content-main-title">Caractéristiques</h2>

        <div class="card-travel-content-main-stats">
          <div class="card-travel-content-main-stats">
            <p>Distance</p>
            <p v-text="data.length" />
          </div>
          <div class="card-travel-content-main-stats">
            <p>Dénivelé</p>
            <p v-text="data.elevation" />
          </div>
          <div class="card-travel-content-main-stats">
            <p>Durée</p>
            <p v-text="data.duration" />
          </div>
          <div class="card-travel-content-main-stats">
            <p>Niveau</p>
            <p v-text="data.level" />
          </div>
          <p v-html="data.levelDescription" />
        </div>

        <div class="card-travel-content-main-traffic">
          <h2>Fréquentation</h2>
          <p v-if="data.levelDescription !== ''" class="card-travel-content--checked">
          </p>
          <p v-else class="card-travel-content--checked">
            {{ data.levelDescription }}
          </p>
        </div>

        <div class="card-travel-content-main-gears">
          <h2>Les vêtements à emmener</h2>
          <div class="card-travel-content-main-gears-slider">
            <div>
              <figure>
                <img src="" alt="">
              </figure>
              Chapeau
            </div>
            <div>
              <figure>
                <img src="" alt="">
              </figure>
              Chapeau
            </div>
            <div>
              <figure>
                <img src="" alt="">
              </figure>
              Chapeau
            </div>
            <div>
              <figure>
                <img src="" alt="">
              </figure>
              Chapeau
            </div>
          </div>
          <h2>Les accessoires à emmener</h2>
          <div class="card-travel-content-main-gears-slider">
            <div>
              <figure>
                <img src="" alt="">
              </figure>
              Chapeau
            </div>
            <div>
              <figure>
                <img src="" alt="">
              </figure>
              Chapeau
            </div>
            <div>
              <figure>
                <img src="" alt="">
              </figure>
              Chapeau
            </div>
            <div>
              <figure>
                <img src="" alt="">
              </figure>
              Chapeau
            </div>
          </div>
          <p v-text="data.gearCategoryDescription" />
        </div>

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
  name: 'CardTravelDetail',
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
      display: flex;
      flex-direction: column;
      &-header{
        position: relative;
        z-index: 1;
        &--level{
          max-width: max-content;
          position: absolute;
          bottom: 24px;
          left: 12px;
          z-index: 5;
          padding: 14px 27px;
          border-radius: 20px;
          background: var(--green-color);
          color: var(--white-color);
        }
      }
      &-content{
        padding: 20px;
        font-family: 'Apfel';
        color: var(--black-color-80);
        z-index: 2;
        order: 2;
        &--name{
          font-size: 1.5rem;
          font-weight: bold;
          line-height: 25px;
          margin-bottom: 5px;
          font-family: 'Gotham';
          color: var(--green-color);
        }
        &--location{
          font-size: 1rem;
          line-height: 22px;
          font-weight: bold;
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
            stroke: red;
          }
          div{
            display: flex;
            align-items: center;
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
        bottom: 24px;
        &-bullet{
          width: 12px;
          height: 12px;
          margin: 0 8px !important;
          background: var(--white-color);
          opacity: 1;
          &-active{
            background: var(--green-color);
          }
        }
      }
    }
    .btn-back{
      position: absolute;
      top: 35px;
      left: 30px;
      color: var(--white-color);
      z-index: 5;
    }
  }
</style>
