<template>
  <nav class="app-nav">
    <ul class="app-nav-list">
      <li class="app-nav-item">
        <nuxt-link :to="{ name: 'map' }">
          Carte
        </nuxt-link>
      </li>
      <li v-if="$auth.loggedIn" class="app-nav-item">
        <nuxt-link :to="{ name: 'profile' }">
          Profile
        </nuxt-link>
      </li>
      <li v-else class="app-nav-item">
        <nuxt-link to="/">
          Connexion
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss">
.app-nav{
  background-color: var(--green-color);
  width: 100%;
  color: #fff;
  position: fixed;
  bottom: 0;
  padding: 20px;
  &-list{
    display: flex;
    justify-content: space-around;
  }
  &-item{
    &:hover{
      text-decoration: underline;
    }
  }
}
</style>
