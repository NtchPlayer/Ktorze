<template>
  <main>
    <section>
      <h1 class="main-title" v-text="title" />
      <p v-show="description" class="text-body" v-text="description" />
      <div class="container-quizz">
        <button
          v-for="(option, i) of options"
          :key="i"
          class="button-quizz"
          @click.prevent="emitChoose(option.value)"
          v-text="option.label"
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
    description: { type: String },
    options: { type: Object, required: true }
  },
  methods: {
    emitChoose (val) {
      this.$emit('choose', val)
    }
  }
}
</script>
