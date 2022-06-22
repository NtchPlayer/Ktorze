<template>
  <article class="card">
    <figure class="card-icon">
      <img :src="require(`@/assets/icons/${icon.src}.svg`)" :alt="icon.alt" />
    </figure>
    <h1 class="card-title" v-text="title" />
    <p class="card-description" v-text="description" />
    <p class="card-link">
      <router-link class="btn-primary" :to="{name: 'home'}">Lire la suite</router-link>
    </p>
  </article>
</template>

<script>
export default {
  name: 'CardHome',
  props: {
    icon: {type: Object, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true}
  }
}
</script>

<style lang="scss">
.card{
  width: 275px;
  &-icon{
    margin-bottom: 30px;
    min-height: 125px;
    img{
      margin-left: 10px;
    }
  }
  &-title{
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--green-color);
    margin-bottom: 20px;
    line-height: 1.3rem;
  }
  &-link{
    text-align: left;
  }
  &-description{
    margin-bottom: 15px;
    min-height: 122px;
    font-size: .875rem;
    line-height: 17px;
    white-space: break-spaces;
  }
}

 @media (min-width: 0px) and (max-width: 768px) {
  .card{
    margin-bottom: 125px;
    &:last-child{
      margin-bottom: 0px;
    }
    &-description{
      min-height: unset;
    }
    &-icon {
      img{
        margin: auto;
      }
    }
    &-link{
      text-align: center;
      a{
        width: 100%;
      }
    }
    &-title{
      text-align: center;
    }
  }
 }

</style>
