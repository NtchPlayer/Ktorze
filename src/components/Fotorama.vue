<template>
  <section class="fotorama">
    <figure>
      <img alt="Vue logo" src="@/assets/coverfotorama.png">
    </figure>
    <h1><span>En avant la marche </span><span>avec Balise 360</span></h1>
    <p><span>Le couteau suisse de tous les randonneurs qui saura </span><span>combler votre coeur d’aventurier en toute sérénité !</span></p>
    <router-link class="btn-primary" :to="{name: 'home'}">Découvrir le site</router-link>
  </section>
</template>

<script>
export default {
  name: 'Fotorama'
}
</script>

<style lang="scss">
 .fotorama{
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  h1{
    display: flex;
    flex-direction: column;
    font-size: 2.2rem;
    font-weight: 600;
    color:var(--blue-color);
    margin-bottom: 30px;
    &~p{
      text-align: left;
      color:var(--blue-color);
      display: flex;
      flex-direction: column;
      margin-bottom: 25px;
      text-align: center;
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
    justify-content: center;
    padding: 0 25px;
    h1{
      position: unset;
      display: flex;
      flex-direction: column;
      width: 220px;
      line-height: 35px;
      margin-bottom: 15px;
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
        width: 220px;
        text-align: right;
        font-size: 0.8125rem;
        margin-bottom: 25px;
        line-height: 1rem;
      }
    }
      .btn-primary-fotorama-center{
        position: unset;
        transform: translate(0);
      }
  }
 }
</style>
