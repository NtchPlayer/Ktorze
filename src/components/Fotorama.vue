<template>
  <section class="fotorama">
    <router-link class="btn-primary btn-primary-fotorama" :to="{name: 'home'}">Télécharger l'application</router-link>
    <figure>
      <img alt="Vue logo" src="@/assets/coverfotorama.png">
    </figure>
    <h1>En avant la marche avec Outdoor</h1>
    <p>La première application mobile pour les randonneurs<br>qui saura combler votre coeur d’aventurier en toute sérénité !</p>
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
    color:#00704e;
    position: absolute;
    top: 35%;
    left: 30%;
    &~p{
      text-align: left;
      position: absolute;
      top: 42%;
      left: 30%;
      color:#00704e;
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
      }
  }
  .btn-primary-fotorama{
    position: absolute;
    top: 20px;
    right: 20px;
    &-center{
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

  }
 }
</style>
