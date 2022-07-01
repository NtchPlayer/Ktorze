<template>
  <section class="citation desktop">
    <h1 class="citation-content">
      Tous les héros ne portent pas de cape…
      <br>
      mais certains portent des chaussures de randonnée !
    </h1>
  </section>
</template>

<script>
export default {
  name: 'Citation'
}
</script>

<style lang="scss">
.citation{
  margin-bottom: 158px;
  &-content{
    text-align: center;
    color: var(--orange-color);
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 2.7rem;
  }
}
</style>
