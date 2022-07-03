<template>
  <div class="auth-container">
    <Nuxt class="auth-modale" />
  </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style lang="scss">
.auth-container{
  background-color: var(--green-color);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  form{
    margin: 25px 0
  }
  .main-logo{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .links-container{
    text-align: center;
    color: var(--green-color);
    margin: 20px 0;
    text-decoration: underline;
  }
}

.auth-modale{
  background-color: #fff;
  color: var(--green-color);
  padding: 20px;
  border-radius: var(--border-radius);
}
</style>
