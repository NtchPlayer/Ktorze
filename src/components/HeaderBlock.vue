<template>
  <nav>
    <ol>
      <li><a href="#">Nav 1</a></li>
      <li><a href="#">Nav 2</a></li>
      <li><a href="#">Nav 3</a></li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'HeaderBlock'
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
