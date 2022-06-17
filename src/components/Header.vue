<template>
  <nav>
    <ol>
      <li><router-link to="/">L'équipe</router-link></li>
      <li><router-link to="/">Notre projet</router-link></li>
      <li><router-link :to="{name: 'home'}">Les fonctionnalités</router-link></li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
#app{
  nav{
    height: 80px;
    position: absolute;
    width: 100%;
    z-index: 1;
    margin-top: 50px;
    ol{
      display: flex;
      justify-content: center;
      gap: 100px;
      align-items: center;
      height: 100%;
      li{
        list-style: none;
        a{
          font-size: 1.8rem;
          color:#00704e;
          font-weight: 600;
          
        }
      }
    }
  }
}
</style>
