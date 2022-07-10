<template>
  <main>
    <CardQuiz
      :title="currentQuestionData.title"
      :description="currentQuestionData.description"
      :answers="currentQuestionData.answers"
      @choose="addQuizData"
    />
    <ul class="container-quiz-stepper">
      <li
        v-for="(question, i) of questions"
        :key="question.id"
        class="quiz-stepper"
        :class="{ 'quiz-stepper-active': i === currentQuestion }"
      >
        <div class="quiz-stepper-circle" />
      </li>
    </ul>
  </main>
</template>

<script>
import CardQuiz from '@/components/card/CardQuiz'
export default {
  name: 'Quiz',
  components: { CardQuiz },
  layout: 'auth',
  // middleware: 'auth',
  async asyncData ({ $axios }) {
    const { data } = await $axios.get('/quiz/questions', {
      trail_question: true
    })
    return {
      questions: data
    }
  },
  data () {
    return {
      currentQuestion: 0,
      score: 0,
      quizDatas: []
    }
  },
  computed: {
    currentQuestionData () {
      return this.questions[this.currentQuestion]
    }
  },
  methods: {
    addQuizData (val) {
      this.score += parseInt(val.value)
      this.quizDatas.push(val.id)
      if (this.currentQuestion + 1 === this.questions.length) {
        return this.$axios.post('/users/quiz', {
          score: this.score,
          quizDatas: this.quizDatas
        })
          .then(() => {
            this.$router.push({ name: 'profile' })
          })
          .catch((e) => {
            throw e
          })
      }
      this.currentQuestion++
    }
  }
}
</script>
