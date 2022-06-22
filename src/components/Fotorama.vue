<template>
  <section class="fotorama">
    <figure>
      <img alt="Vue logo" src="@/assets/coverfotorama.png">
    </figure>
    <h1><span>En avant la marche </span><span>avec Outdoor</span></h1>
    <p><span>La première application mobile pour les randonneurs </span><span>qui saura combler votre coeur d’aventurier en toute sérénité !</span></p>
    <router-link class="btn-primary btn-primary-fotorama-center" :to="{name: 'home'}">Découvrir l'application</router-link>
  </section>
</template>

<script>
export default {
  name: 'Fotorama'
}
</script>

<style lang="scss">
 .fotorama{
  height: 860px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 0;
  h1{
    font-size: 2.2rem;
    font-weight: 600;
    color:var(--blue-color);
    position: absolute;
    top: 30.25%;
    left: 30%;
    &~p{
      text-align: left;
      position: absolute;
      top: 37%;
      left: 30%;
      color:var(--blue-color);
      display: flex;
      flex-direction: column;
    }
  }
  figure{
      position: absolute;
      height: 860px;
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
    &-center{
      position: absolute;
      top: 53%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

  }
 }

 @media (min-width: 0px) and (max-width: 768px) {
  .fotorama{
    height: 580px;
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
