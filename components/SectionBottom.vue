<template>
  <section class="section-bottom">
    <h1 class="main-title desktop">
      Pourquoi utiliser Balise 360 ?
    </h1>
    <div class="container-section">
      <div class="container-section-image">
        <figure class="image-section">
          <img :src="require(`@/assets/section/${dataComponent.img1.src}`)" :alt="dataComponent.img1.alt">
        </figure>
      </div>
      <div>
        <div class="container-section-content">
          <h2 class="second-title">
            Une <span class="color-orange">expérience personnalisée</span> pour chaque utilisateur
          </h2>
          <p class="text-body" v-html="dataComponent.block1" />
        </div>
        <div class="mobile">
          <figure class="image-section">
            <img class="form-img" :alt="dataComponent.img2.alt" :src="require(`@/assets/form/${dataComponent.img2.src}`)">
          </figure>
        </div>
        <div class="container-section-content">
          <h2 class="second-title">
            Une action <span class="color-orange">engagée</span> pour l’environnement
          </h2>
          <p class="text-body" v-html="dataComponent.block2" />
        </div>
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
  margin-bottom: 150px;
  .main-title{
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

//@media screen and (max-width: 768px) {
//  .section-bottom{
//    .container-section-content{
//      padding: 0;
//      div:not(.mobile) {
//        pad
//      }
//    }
//  }
//}
</style>
