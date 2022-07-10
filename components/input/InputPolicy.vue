<template>
  <div class="container-policy">
    <input
      v-model="policy"
      type="checkbox"
    >
    <div class="infos-content">
      <p>J’aimerais recevoir par e-mail des newsletters et des informations à propos des produits. Des services et des événements adaptées à mes intérêts et à mes préférences, conformément à la politque de confidentialité</p>
      <p>En créant un compte, je confirme avoir lu et compris la <a href="#">politique de confidentialité</a> applicable et j’accepte les <a href="#">conditions d’utilisation</a> de Balise360</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputPolicy',
  data () {
    return {
      policy: true
    }
  }
}
</script>

<style lang="scss">
.container-policy{
  display: flex;
  margin: 20px 0;
  font-size: .75rem;
  color: var(--black-color-70);
  a{
    text-decoration: underline;
  }
  input{
    align-self: flex-start;
  }
  .infos-content{
    margin-left: 10px;
    p{
      margin-bottom: 10px;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
}
</style>
