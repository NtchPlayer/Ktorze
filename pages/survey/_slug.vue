<template>
  <section class="quiz-section">
    <Quiz
      :quiz-datas="currentQuestion"
      @increment="incrementQuestion"
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
  middleware: 'auth',
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
      currentQuestionId: 0,
      currentQuestion: {}
    }
  },
  mounted () {
    this.currentQuestion = this.questions[this.currentQuestionId]
  },
  methods: {
    incrementQuestion () {
      this.currentQuestionId++
      if (this.currentQuestionId === this.questions.length) {
        return this.$router.push('/trails')
      }
      this.currentQuestion = this.questions[this.currentQuestionId]
    }
  },
  head () {
    return {
      title: ' - Questionnaire',
      meta: [{
        hid: 'og:title',
        property: 'og:title',
        content: 'Balise360 - Questionnaire'
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Balise360 - Questionnaire'
      }]
    }
  }
}
</script>

<style lang="scss">
  .quiz-section{
    padding-top: 180px;
  }
</style>
