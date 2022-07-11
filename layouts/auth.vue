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
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .btn-back{
    position: absolute;
  }
  form{
    margin: 25px 0;
    .input, .select{
      min-width: 295px;
      border-radius: 5px;
      color: var(--black-color-80);
      border: 1px solid var(--green-color);
      padding: 0 18px;
      &:not(.btn-primary){
        height: 40px;
      }
    }
    .container-input{
      label{
        color: var(--green-color-50);
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
    margin-bottom: 15px;
    span{
      color: var(--green-color);
    }
  }
  .auth-modale{
    color: var(--green-color);
    padding: 20px;
    border-radius: var(--border-radius);
    position: relative;
    .text-body{
      line-height: 19px;
      color: var(--black-color-80);
    }
    .links-container{
      font-family: 'Apfel';
      text-align: center;
      color: var(--orange-color);
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      color: var(--black-color-90);

      a{
        color: var(--green-color);
      }
    }
    .btn-primary{
      border-radius: 25px;
      color: var(--white-color);
      padding: 13.5px 35px;
      background: var(--green-color);
      width: 100%;
      &:hover{
        background: var(--green-hover);
      }
    }
  }
}
@media screen and (min-width: 769px) {
  .auth-container{
    .auth-modale{
      padding: 0;
    }
    &--img{
      height: 100vh;
      width: 50%;
      img{
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    &--left{
      display: block;
      margin: auto;
      width: 50%;
      padding: 0 50px;
      &-content{
        max-width: 360px;
        margin: auto;
      }
    }
  }
}

</style>
