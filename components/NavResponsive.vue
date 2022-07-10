<template>
  <aside class="menu-responsive max-width">
    <p class="menu-responsive-container-close-button">
      <button type="button" @click.prevent="$emit('closeMenu')">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 3.02143L26.9786 0L15 11.9786L3.02143 0L0 3.02143L11.9786 15L0 26.9786L3.02143 30L15 18.0214L26.9786 30L30 26.9786L18.0214 15L30 3.02143Z" fill="white" />
        </svg>
      </button>
    </p>
    <h4 class="second-title upper-case">
      Navigation
    </h4>
    <nav class="menu-responsive-nav">
      <ul>
        <li class="menu-responsive-nav-item">
          <nuxt-link :to="{ hash: 'fonctionnalites', query: $route.query }">
            Nos fonctionnalités
          </nuxt-link>
        </li>
        <li class="menu-responsive-nav-item">
          <nuxt-link :to="{ hash: 'nous-choisir', query: $route.query }">
            Nous choisir
          </nuxt-link>
        </li>
        <li class="menu-responsive-nav-item">
          <nuxt-link :to="{ hash: 'newsletter', query: $route.query }">
            Notre newsletter
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'NavResponsive'
}
</script>

<style lang="scss">
.menu-responsive{
  padding-top: 19.5px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 15;
  background-color: var(--green-color);
  color: var(--white-color);
  &-container-close-button{
    margin-bottom: 50px;
  }
  .second-title{
    margin-bottom: 20px;
  }
  &-nav{
    &-item{
      margin: 20px;
    }
  }
}
</style>
