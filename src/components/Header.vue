<template>
  <nav>
    <ol>
      <li><router-link to="/">Nav 1</router-link></li>
      <li><router-link to="/">Nav 2</router-link></li>
      <li><router-link to="/">Nav 3</router-link></li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
  nav ol{
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
    height: 100%;
  }
  nav ol li{
    list-style: none;
  }
  nav{
    background: grey;
    height: 80px;
  }
</style>
