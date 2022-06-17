<template>
  <section class="fotorama">
    <figure>
      <img alt="Vue logo" src="@/assets/logo.png">
    </figure>
    <h1>Lorem ipsum</h1>
    <router-link :to="{name: 'home'}">CTA</router-link>
  </section>
</template>

<script>
export default {
  name: 'Fotorama'
}
</script>

<style lang="scss">
 .fotorama{
  min-height: 600px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img{
    position: absolute;
    min-height: 600px;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
 }
</style>
