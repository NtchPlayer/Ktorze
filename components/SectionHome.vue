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
    <vueper-slides
      class="no-shadow"
      bullets-outside
      :arrows="false"
      :breakpoints="breakpoints"
      :slide-ratio="1/2"
      :gap="2"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content"
      />
    </vueper-slides>
    <p class="t-center desktop">
      <a class="btn-primary" href="https://linktr.ee/balise360" target="_blank">Découvrir Balise 360</a>
    </p>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'SectionHome',
  components: {
    VueperSlides,
    VueperSlide
  },
  props: {
    dataComponent: { type: Array, required: true }
  },
  data () {
    return {
      breakpoints: {
        769: {
          visibleSlides: 1,
          draggingDistance: 20,
          gap: 0
        },
        1024: {
          visibleSlides: 3,
          touchable: false
        },
        3200: {
          visibleSlides: 3,
          gap: 10,
          touchable: false
        }
      }
    }
  },
  computed: {
    slides () {
      const defaultDatas = [{
        image: require('@/assets/icons/map.svg'),
        title: 'Des parcours personnalisés'
      }, {
        image: require('@/assets/icons/leaf.svg'),
        title: 'Protégez l’environnement'
      }, {
        image: require('@/assets/icons/heart.svg'),
        title: 'Rejoignez la communauté'
      }]
      this.dataComponent.forEach((data, i) => {
        defaultDatas[i].content = data
      })
      return defaultDatas
    }
  },
  methods: {
    drawSvg (event) {
      const pathSvg = event.target.children[0]

      if (pathSvg === undefined || null) {
        return
      }
      this.$gsap.set(event.target, { visibility: 'visible' })
      const tl = this.$gsap.timeline({ repeat: 0, repeatDelay: 1 })
      tl.to(event.target, { strokeDashoffset: '=73', repeat: -1, ease: 'power1.out' })
    }
  }
}
</script>

<style lang="scss">
.section-home{
  padding-top: 100px;
  padding-bottom: 175px;
  position: relative;
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

// CAROUSEL
.vueperslides{
  z-index: 0 !important;
}
 .vueperslide{
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: 0 0;
  padding: 82px 0 0 0;
  background-size: unset;
  font-family: 'Apfel', serif;
  &__title{
    font-size: 1.5rem;
    margin-bottom: 15px;
    font-weight: bold;
  }
  &__content{
    font-size: 1rem;
    line-height: 1.6rem;
  }
  &__content-wrapper{
    &:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom){
      align-items: flex-start;
      text-align: left;
      justify-content: flex-start;
    }
  }
  &s{
    z-index: -1;
    max-height: 300px;
    padding: 0 20px;
    margin: 100px auto 50px auto;
  }
 }

 @media screen and (max-width: 768px) {
  .section-home{
    margin-bottom: 100px;
    background: none;
  }
 //CAROUSSEL
 .vueperslides{
    position: relative;
    padding: 0 0;
    z-index: 10;
    &__bullet{
      & .default{
       border: none;
       background-color: var(--orange-color);
     }
     &--active{
      & .default{
        background-color: var(--green-color);
      }
     }
    }
    &__parallax-wrapper{
      min-height: 220px;
    }
  }
}
</style>
