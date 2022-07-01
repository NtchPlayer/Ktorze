<template>
  <section class="fotorama">
    <figure>
      <img alt="Vue logo" :src="require(`@/assets/${datacomponent.src}`)">
    </figure>
    <div class="fotorama-content">
      <h1>La rando c’est le pied&nbsp;!</h1>
      <p v-html="datacomponent.text" />
      <router-link class="btn-primary desktop" :to="{name: 'home'}">Commencez l'aventure&nbsp;!</router-link>
      <router-link class="btn-primary mobile" :to="{name: 'home'}">Allons y !</router-link>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Fotorama',
  props: {
    datacomponent: { type: Object, required: true},
  }
}
</script>

<style lang="scss">
 .fotorama{
   height: calc(100vh - 80px);
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
    max-width: 1440px;
    margin: 0 auto;
    text-align: left;
    padding: 10% 10%;
  }
  h1{
    display: flex;
    flex-direction: column;
    font-size: 3.3125rem;
    font-weight: 600;
    color:var(--orange-color);
    margin-bottom: 30px;
    font-family: 'Gotham-bold';

    &~p{
      text-align: left;
      color:var(--pale-color);
      display: flex;
      flex-direction: column;
      margin-bottom: 25px;
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
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
  .btn-primary-fotorama{
    position: absolute;
    top: 20px;
    right: 20px;
  }
 }

 @media (min-width: 0px) and (max-width: 768px) {
  .fotorama{
    height: 100vh;
    align-items: center;
    padding: 0 25px;
    h1{
      position: unset;
      display: flex;
      flex-direction: column;
      max-width: 320px;
      line-height: 35px;
      margin-bottom: 15px;
      font-size: 2rem;
      span{
        font-size: 1.375rem;
        &~span {
          text-align: right;
          font-size: 1.875rem;
        }
      }
      &~p{
        position: unset;
        display: block;
        max-width: 320px;
        font-size: 1rem;
        margin-bottom: 25px;
        line-height: 1.2rem;
      }
    }
      .btn-primary-fotorama-center{
        position: unset;
        transform: translate(0);
      }
  }
 }
</style>
