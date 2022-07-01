<template>
  <header>
    <nav class="main-nav">
      <h1>
        <nuxt-link :to="{name: 'home'}">
          <figure>
            <img class="main-nav--logo" alt="Balise360 logo" src="@/assets/balise360-mobile.svg">
          </figure>
        </nuxt-link>
      </h1>
      <ul>
        <li>
          <nuxt-link :to="{ hash: 'fonctionnalites', query: $route.query }">
            Nos fonctionnalités
          </nuxt-link>
        </li>

        <li>
          <nuxt-link :to="{ hash: 'nous-choisir', query: $route.query }">
            Nous choisir
          </nuxt-link>
        </li>

        <li>
          <nuxt-link :to="{ hash: 'newsletter', query: $route.query }">
            Notre newsletter
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
header{
  background: var(--green-color);
  position: fixed;
  z-index: 5;
  width: 100vw;
}

.main-nav{
  width: 100%;
  max-width: 1440px;
  padding: 0 50px;
  margin: auto;
  height: 70px;
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
      font-weight: bold;
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
