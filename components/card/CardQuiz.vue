<template>
  <main>
    <section class="container-question">
      <h1 class="main-title" v-text="title" />
      <p v-show="description" class="text-body" v-text="description" />
      <div class="container-button-quizz">
        <button
          v-for="(answer, i) of answers"
          :key="i"
          class="button-quizz"
          @click.prevent="emitChoose(answer)"
          @keydown.enter="emitChoose(answer)"
          v-text="answer.label"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'CardQuiz',
  props: {
    title: { type: String, required: true },
    description: { type: String, default: '' },
    answers: { type: Array, required: true }
  },
  methods: {
    emitChoose (val) {
      this.$emit('choose', val)
    }
  }
}
</script>

<style lang="scss">
.container-question{
  margin: 20px 0;
  .main-title{
    font-size: 2rem;
  }
  .text-body{
    text-align: center;
    margin: 10px 0;
  }
}

.button-quizz{
  display: block;
  width: 100%;
  text-align: left;
  border-radius: var(--border-radius);
  border: 1px solid var(--green-color);
  padding: 16px 20px;
  margin: 8px 0;
  transition-duration: var(--transition-duration);
  &:hover{
    background-color: var(--green-hover);
    color: #fff;
  }
}
</style>
