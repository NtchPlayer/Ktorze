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
  &-icon{
    margin-bottom: 30px;
    min-height: 125px;
  }
  &-title{
    font-size: 1.3rem;
    color: var(--green-color);
    margin-bottom: 30px;
    line-height: 1.3rem;
  }
  &-link{
    text-align: right;
  }
}
</style>
