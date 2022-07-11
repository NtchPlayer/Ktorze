<template>
  <nav class="app-nav">
    <ul class="app-nav-list">
      <li class="app-nav-item">
        <nuxt-link :to="{ name: 'trails' }" class="app-nav-item-content">
          <img src="@/assets/icons/location.svg" alt="search">
          Randonnées
        </nuxt-link>
      </li>
      <li v-if="$auth.loggedIn" class="app-nav-item">
        <nuxt-link :to="{ name: 'profile' }" class="app-nav-item-content">
          <img src="@/assets/icons/account.svg" alt="search">
          Profil
        </nuxt-link>
      </li>
      <li v-else class="app-nav-item">
        <nuxt-link to="/" class="app-nav-item-content">
          <img src="@/assets/icons/account.svg" alt="search">
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
  color: var(--white-color);
  position: fixed;
  bottom: 0;
  height: 80px;
  z-index: 100;
  font-family: 'Apfel';
  display: flex;
  &-list{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  &-item{
    height: 100%;
    &:hover{
      text-decoration: underline;
    }
    &-content{
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      img{
        height: 24px;
      }
    }
  }
}
</style>
