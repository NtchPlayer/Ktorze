<template>
  <nav>
    <div class="main-nav">
      <figure>
        <router-link :to="{name: 'home'}">
          <img class="main-nav--logo" alt="Balise360 logo" src="@/assets/balise360-mobile.svg">
        </router-link>
      </figure>
      <ul>
        <router-link :to="{name: 'home'}">
          <li>Nos fonctionnalités</li>
        </router-link>

        <router-link :to="{name: 'home'}">
          <li>Nous choisir</li>
        </router-link>

        <router-link :to="{name: 'home'}">
          <li>Notre newsletter</li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderLogo'
}
</script>

<style lang="scss">
nav{
  background: var(--green-color);
}
.main-nav{
  width: 100%;
  max-width: 1440px;
  padding: 0 50px;
  margin: auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &--logo{
    width: 138px;
    margin-left: 35px;

  }
  ul{
    display: flex;
    gap: 50px;
    li{
      color: var(--background-color);
      font-family: 'Apfel', sans-serif;
    }
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
