<template>
  <article class="card-comment">
    <figure class="card-comment-img">
      <img :src="require(`@/assets/comments/${img.src}.png`)" :alt="img.src" />
    </figure>
    <div>
      <h1 class="card-comment-name" v-text="name" />
      <h2 class="card-comment-work" v-text="work" />
      <p class="card-comment-comment" v-text="comment" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'CardComment',
  props: {
    name: { type: String, required: true },
    img: { type: Object, required: true },
    work: { type: String, required: true },
    comment: { type: String, required: true }
  }
}
</script>

<style lang="scss">
.card-comment{
  display: flex;
  max-width: 560px;
  &-img{
    margin-right: 30px;
  }
  &-name{
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--orange-color);
 }
  &-work{
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: var(--green-color);
    margin: 10px 0 20px;
    font-weight: 500;
    min-height: 48px
  }
  &-comment{
    font-size: 0.875rem;
    line-height: 17px;
    font-weight: 400;
  }
}
</style>
