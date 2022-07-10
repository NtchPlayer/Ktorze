<template>
  <article class="card-travel">
    <div class="card-travel-content">
      <h1 class="card-travel-title" v-text="data.name" />
      <div class="card-travel-content-footer">
        <div>
          <p class="card-travel-location" v-text="locationText" />
          <p class="card-travel-content--checked" v-text="checkedText" />
        </div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.58333 4C5.94802 4 3 7.14793 3 11.0317C3 14.1668 4.15208 21.6077 15.4925 29.1295C15.6957 29.2628 15.9289 29.3333 16.1667 29.3333C16.4045 29.3333 16.6377 29.2628 16.8408 29.1295C28.1813 21.6077 29.3333 14.1668 29.3333 11.0317C29.3333 7.14793 26.3853 4 22.75 4C19.1147 4 16.1667 8.26164 16.1667 8.26164C16.1667 8.26164 13.2187 4 9.58333 4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <div class="card-travel-header">
      <CardTravelSlider :data-slider="data.img" />
      <p class="card-travel-header--level">
        Niveau {{ data.level }}
      </p>
    </div>
  </article>
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
  },
  computed: {
    checkedText () {
      return this.data.checked === '' ? 'Sentier non vérifié ' : `Sentier vérifié le : ${this.data.checked}`
    },
    locationText () {
      return this.data.location === '' ? '-' : this.data.location
    }
  }
}
</script>

<style lang="scss">
.card-travel{
  border-radius: 15px;
  display: flex;
  flex-direction: column-reverse;
  align-self: self-start;
  &-content{
    border-radius: 15px;
    padding: 20px;
    background: var(--brown-color);
    margin-top: -26px;
    font-family: 'Apfel', sans-serif;
    color: var(--white-color);
    z-index: 2;
    &--checked{
      font-size: 0.75rem;
      line-height: 22px;
      margin-top: 10px;
    }
    &-footer{
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
}

.card-travel-header{
  position: relative;
  z-index: 1;
  border-radius: 15px;
  &--level{
    position: absolute;
    bottom: 40px;
    left: 12px;
    z-index: 5;
    padding: 7px 10px;
    font-size: .75rem;
    border-radius: 20px;
    background: var(--brown-color);
    color: var(--white-color);
  }
}

.card-travel-title{
  font-weight: bold;
  line-height: 25px;
  margin-bottom: 5px;
  font-family: 'Gotham', sans-serif;
}

.card-travel-location{
  font-size: .75rem;
  font-weight: bold;
}

.card-travel{
  .swiper-container{
    border-radius: 15px;
  }
  .swiper .slide img{
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 15px;
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
</style>
