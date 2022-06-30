<template>
  <nav class="main-nav">
    <figure>
      <router-link :to="{name: 'home'}">
        <img class="main-nav--logo desktop" alt="Balise360 logo" src="@/assets/balise360.svg">
        <img class="main-nav--logo mobile" alt="Balise360 logo" src="@/assets/balise360-mobile.svg">
</router-link>
    </figure>
  </nav>
</template>

<script>
export default {
  name: 'HeaderLogo'
}
</script>

<style lang="scss">
.main-nav{
  width: 100%;
  max-width: 1440px;
  padding: 0 50px;
  margin: auto;
  height: 92px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  &:before{
    content: '';
    height: 1px;
    width: 100%;
    background: #000;
  }
  &--logo{
    width: 138px;
    margin-left: 35px;

  }
}

@media (min-width: 0px) and (max-width: 768px) {
  .main-nav{
    position: absolute;
    z-index: 5;
    &::before{
      content: none;
    }
  }
}

</style>
