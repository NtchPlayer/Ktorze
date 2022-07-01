<template>
  <article class="card">
    <figure class="card-icon">
      <img :src="require(`@/assets/icons/${icon.src}.svg`)" :alt="icon.alt">
    </figure>
    <h1 class="card-title" v-text="title" />
    <p class="card-description" v-text="description" />
  </article>
</template>

<script>
export default {
  name: 'CardHome',
  props: {
    icon: { type: Object, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  }
}
</script>

<style lang="scss">
.card{
  max-width: 325px;
  font-family: 'Apfel',serif;
  &-icon{
    margin-bottom: 30px;
    min-height: 55px;
    img{
      margin-left: 10px;
      height: 54px;
    }
  }
  &-title{
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--green-color);
    margin-bottom: 20px;
    line-height: 1.3rem;
    min-height: 42px;
    font-weight: bold;
  }
  &-link{
    text-align: left;
  }
  &-description{
    margin-bottom: 15px;
    min-height: 122px;
    font-size: 1rem;
    line-height: 17px;
    white-space: break-spaces;
    color: var(--green-color);
  }
}

 @media (min-width: 0px) and (max-width: 768px) {
  .card{
    margin-bottom: 125px;
    &:last-child{
      margin-bottom: 0;
    }
    &-description{
      min-height: unset;
    }
    &-link{
      text-align: center;
      a{
        width: 100%;
      }
    }
  }
 }

</style>
