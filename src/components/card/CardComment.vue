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
  &-img{
    margin-right: 20px;
  }
  &-name{
    font-size: 1.5rem;
    color: var(--orange-color);
 }
  &-work{
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: var(--green-color);
    margin: 20px 0;
  }
}
</style>
