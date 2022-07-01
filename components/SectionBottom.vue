<template>
  <section class="section-bottom">
    <h1 class="section-title desktop">
      Pourquoi utiliser Balise 360 ?
    </h1>
    <div class="container-section">
      <div class="desktop">
        <figure class="image-section">
          <img :src="require(`@/assets/section/${dataComponent.src}`)" alt="Couple s'embrassant sur une falaise">
        </figure>
      </div>
      <div>
        <h2 class="second-title">
          Une <span class="color-orange">expérience personnalisée</span> pour chaque utilisateur
        </h2>
        <p class="text-body" v-html="dataComponent.block1"/>
        <h2 class="second-title">
          Une action <span class="color-orange">engagée</span> pour l’environnement
        </h2>
        <p class="text-body" v-html="dataComponent.block2"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionBottom',
  props: {
    dataComponent: { type: Object, required: true }
  }
}
</script>

<style lang="scss">
.section-bottom{
  margin-bottom: 180px;
  .section-title{
    text-align: left;
    margin-bottom: 50px;
    &::before{
      content: url('@/assets/decos/Sprinkle.svg');
      position: relative;
      top: 10px;
    }
  }
}

.container-section{
  .bottomMiddle{

    font-family: 'Apfel', serif;
    .text-body{
      margin-bottom: 58px;
    }
  }
}

 @media (min-width: 0px) and (max-width: 768px) {
  .sectionBottom{
    height: unset;
    flex-direction: column-reverse;
    padding: 0;
    h2{
      margin-bottom: 10px;
    }
    h2, h3{
      text-align: left;
      line-height: 2.5rem;
      font-size: 1.5rem;
    }
    img{
      height: 300px;
    }
    .bottomMiddle{
      width: 100%;
      padding: 0 20px;
      &:last-child{
        margin-bottom: 30px;
      }
      &:first-child{
        width: unset;
        margin: auto;
        padding: 0 25px;
      }
      &--center{
        float: unset;
        a{
          margin: auto;
          display: block;
          width: max-content;
        }
      }
    }
  }
 }
</style>
