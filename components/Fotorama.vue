<template>
  <section class="fotorama">
    <figure>
      <img alt="Vue logo" :src="require(`@/assets/fotorama/${dataComponent.src}`)">
    </figure>
    <div class="max-width fotorama-content">
      <h1 class="fotorama-title">La rando c’est le pied&nbsp;!</h1>
      <p class="fotorama-description" v-text="dataComponent.text" />
      <router-link class="btn-primary" :to="{name: 'home'}">
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

@media (min-width: 0px) and (max-width: 768px) {
  .fotorama{
    height: 100vh;
    align-items: center;
    padding: 0 25px;
    &-title{
      position: unset;
      display: flex;
      flex-direction: column;
      max-width: 320px;
      line-height: 35px;
      margin-bottom: 15px;
      font-size: 2rem;
    }
    &-description{
      position: unset;
      display: block;
      max-width: 320px;
      font-size: 1rem;
      margin-bottom: 25px;
      line-height: 1.2rem;
    }
  }
}
</style>
