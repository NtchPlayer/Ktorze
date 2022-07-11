<template>
  <article class="card-travel" :class="{ largeCard }">
    <router-link
      class="card-travel-content"
      :to="{name: 'trails-slug', params: { slug: data.id }}"
    >
      <h1 class="card-travel-title" v-text="data.name" />
      <div class="card-travel-content-footer">
        <div>
          <p class="card-travel-location" v-text="locationText" />
          <p class="desktop card-travel-description" v-text="data.description" />
          <p class="card-travel-content--checked" v-text="`Sentier vérifié le ${dateUpdate}`" />
        </div>
<!--        <svg-->
<!--          v-if="$auth.loggedIn"-->
<!--          width="32"-->
<!--          height="32"-->
<!--          viewBox="0 0 32 32"-->
<!--          fill="none"-->
<!--          xmlns="http://www.w3.org/2000/svg"-->
<!--        >-->
<!--          <path d="M9.58333 4C5.94802 4 3 7.14793 3 11.0317C3 14.1668 4.15208 21.6077 15.4925 29.1295C15.6957 29.2628 15.9289 29.3333 16.1667 29.3333C16.4045 29.3333 16.6377 29.2628 16.8408 29.1295C28.1813 21.6077 29.3333 14.1668 29.3333 11.0317C29.3333 7.14793 26.3853 4 22.75 4C19.1147 4 16.1667 8.26164 16.1667 8.26164C16.1667 8.26164 13.2187 4 9.58333 4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />-->
<!--        </svg>-->
      </div>
    </router-link>
    <div class="card-travel-header">
      <CardTravelSlider :data-slider="data.images" :folder="data.name" />
      <p class="card-travel-header--level" v-text="data.difficulty.level" />
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
    data: { type: Object, required: true },
    largeCard: { type: Boolean, default: false }
  },
  computed: {
    locationText () {
      return this.data.location === '' ? '-' : this.data.location
    },
    dateUpdate () {
      const today = new Date(this.data.updatedAt)
      const yyyy = today.getFullYear()
      let mm = today.getMonth() + 1
      let dd = today.getDate()
      if (dd < 10) {
        dd = '0' + dd
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      const formattedToday = dd + '/' + mm + '/' + yyyy
      return formattedToday
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

@media (min-width: 768px) {
  .card-travel.largeCard{
    background-color: var(--brown-color);
    flex-direction: row-reverse;
    padding: 20px;
    align-items: center;
    max-width: 680px;
    .swiper-pagination{
      display: none;
    }
    .card-travel-content{
      max-width: 400px;
      margin-top: 0;
      border-radius: 0;
      padding: 0 0 0 13px;
    }
    .card-travel-title{
      font-size: 1.5rem;
    }
    .card-travel-location{
      margin: 16px 0;
      font-size: 1rem;
    }
    .card-travel-header--level{
      bottom: 22px;
    }
    .card-travel-description{
      line-height: 1.2rem;
      margin-bottom: 10px;
    }
  }
}
</style>
