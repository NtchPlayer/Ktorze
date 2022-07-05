<template>
  <section class="fotorama">
    <figure>
      <img loading="lazy" :alt="dataComponent.img.alt" :src="require(`@/assets/fotorama/${dataComponent.img.src}`)">
    </figure>
    <div class="max-width fotorama-content">
      <h1 class="fotorama-title">
        La rando c’est le pied&nbsp;!
      </h1>
      <p class="fotorama-description" v-text="dataComponent.text" />
      <router-link class="btn-primary" :to="{ hash: '#newsletter' }">
        <b>Rejoigner l’aventure</b>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Fotorama',
  props: {
    dataComponent: { type: Object, required: true }
  }
}
</script>

<style lang="scss">
.fotorama{
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 0;
  font-family: 'Gotham', sans-serif;

  &-content{
    width: 100%;
    padding-bottom: 10%;
  }
  &-title{
    font-size: 3.3125rem;
    color:var(--orange-color);
    margin-bottom: 30px;
    font-weight: bold;
  }
   &-description{
     text-align: left;
     color:var(--pale-color);
     display: flex;
     flex-direction: column;
     margin-bottom: 25px;
     font-size: 1.5rem;
     line-height: 1.8rem;
     max-width: 662px;
   }
  figure{
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    z-index: -1;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@media screen and (max-width: 768px) {
  .fotorama-content{
    margin-bottom: 25px;
  }
  .fotorama-title{
    font-size: 2.2rem;
    margin-bottom: 15px;
  }
  .fotorama-description{
    font-size: 1rem;
    margin-bottom: 15px;
  }

  .btn-primary{
    padding-top: 12px;
    padding-bottom: 12px;
  }
}
</style>
