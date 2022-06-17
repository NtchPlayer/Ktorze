<template>
<div id="fotorama">
  <h1>Lorem ipsum</h1>
  <img src="" alt="">
  <router-link :to="{name: 'home'}">CTA</router-link>
</div>

</template>

<script>
export default {
  name: 'Fotorama'
}
</script>

<style lang="scss">
 #fotorama{
  min-height: 600px;
  background-color: #D9D9D9;
  position: relative;
  img{
    position: absolute;
  }
 }
</style>
