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
    margin: 25px 0;
    .input{
      width: 295px;
      border-radius: 5px;
      color: var(--green-color);
      border: 1px solid var(--green-color);
      &:not(.btn-primary){
        height: 40px;
      }
    }
    .container-input{
      label{
        color: var(--green-color);
        font-weight: 400;
      }
    }
  }
  .main-logo{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .main-title{
    font-size: 1.5rem;
  }
  h1.main-title{
    color: var(--orange-color);
  }
  .links-container{
    font-family: 'Apfel';
    text-align: center;
    color: var(--orange-color);
    margin: 20px 0;
    text-decoration: underline;
  }
  .auth-modale{
    background-color: #fff;
    color: var(--green-color);
    padding: 20px;
    border-radius: var(--border-radius);
    .btn-primary{
      border-radius: 5px;
      color: var(--background-color);
    }
  }
}

</style>
