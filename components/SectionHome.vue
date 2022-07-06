<template>
  <section class="section-home">
    <h2 class="main-title desktop">
      <span class="decoration-circle">La nature</span> vous appelle !
    </h2>
    <h2 class="main-title mobile">
      <span class="color-orange">Balise 360</span>
      <br>
      vous appelle !
    </h2>
    <swiper class="swiper" :options="swiperOptions">
      <swiper-slide class="slide">
        <h2>Des parcours personnalisés</h2>
        <p>Trouvez des parcours de randonnée adaptés à vos envies. Indiquez différents critères sur votre profil comme le niveau, la durée et le type de parcours.</p>
      </swiper-slide>
      <swiper-slide class="slide">
        <h2>Protégez l’environnement</h2>
        <p>Ressourcez vous dans la nature mais ressourcez la également au travers de vos parcours. Randonnez tout en apprenant à observer, analyser et préserver la nature.</p>
      </swiper-slide>
      <swiper-slide class="slide">
        <h2>Rejoignez la communauté</h2>
        <p>Parcourez les sentiers mais aussi les avis de tous les randonneurs sur notre plateforme. Partagez vos expériences et encouragez celles des autres !</p>
      </swiper-slide>
      <div class="swiper-pagination mobile" slot="pagination"></div>
    </swiper>
    <p class="t-center desktop">
      <a class="btn-primary" href="https://linktr.ee/balise360" target="_blank">Découvrir Balise 360</a>
    </p>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'

export default {
  ssr: false,
  name: 'SectionHome',
  components: {
    Swiper,
    SwiperSlide
  },

  props: {
    dataComponent: { type: Array, required: true }
  },
  data () {
    return {
      swiperOptions: {
        spaceBetween: 35,
        watchOverflow: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          769: {
            slidesPerView: 3,
            allowTouchMove: false
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
.section-home{
  padding-top: 100px;
  padding-bottom: 175px;
  position: relative;
  .swiper-container{
    overflow-y: visible;
    overflow-x: clip;
    margin: 75px 0;
    .swiper-wrapper{
      .swiper-slide{
        padding-top: 75px;
        background: url("@/assets/icons/leaf.svg") no-repeat local 0% 0%;
        &:first-child{
          background: url("@/assets/icons/map.svg") no-repeat local 0% 0%;
        }
        &:last-child{
          background: url("@/assets/icons/heart.svg") no-repeat local 0% 0%;
        }
        h2{
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 20px;
        }
        p{
          line-height: 26px;
        }
      }
    }
  }
  .swiper-pagination{
    bottom: -40px;
    &-bullet{
      background: var(--orange-color);
      opacity: 1;
      &-active{
        background: var(--green-color);
      }
    }
  }
  &::before{
  content: url("@/assets/decos/deco-1.png");
    position: absolute;
    top: -405px;
    left: -600px;
    z-index: -1;
    height: 605px;
    width: 547px;
    transform: scale(0.1);
  }
  &::after{
    content: url("@/assets/decos/deco-2.png");
    position: absolute;
    bottom: 200px;
    right: -40px;
    z-index: -1;
    height: 605px;
    width: 547px;
    transform: scale(0.1);
  }
  .main-title.mobile{
    text-align: left;
  }

  .t-center{
    position: relative;
    z-index: 5;
  }

  .decoration-circle::before{
    background-image: url(../assets/decos/green-loop.svg);
    width: 233px;
    height: 126px;
    right: -11px;
    bottom: calc(50% - 8px);
  }
}

 @media screen and (max-width: 768px) {
  .section-home{
    padding-bottom: 30px;
    background: none;
    &::before, &::after{
      content: none;
    }
  }
}
</style>
