<template>
  <section class="quiz-section">
    <Quiz
      :quiz-datas="currentQuestion"
      @increment="currentQuestionId++"
    />
  </section>
</template>

<script>
import Quiz from '@/components/Quiz.vue'

export default {
  name: 'QuizHome',
  components: {
    Quiz
  },
  layout: 'app',
  async asyncData ({ $axios }) {
    const { data } = await $axios.get('/quiz/questions', {
      params: {
        trail_question: true
      }
    })
    return {
      questions: data
    }
  },
  data () {
    return {
      currentQuestionId: 0
    }
  },
  computed: {
    currentQuestion () {
      return this.questions[this.currentQuestionId]
    }
  }
}
</script>

<style lang="scss">
  .quiz-section{
    padding-top: 180px;
  }
</style>
