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
    const { data } = await $axios.get('/quiz/questions')
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
  head () {
    return {
      title: ' - Profile',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Balise 360, la solution qui permet à tous les randonneurs passionnés et engagés de préparer ses itinéraires de randonnées, de se repérer avec ses cartes numériques et son GPS intégré.'
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: 'Balise 360, la solution de tous les randonneurs engagés'
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: 'Balise 360, la solution qui permet à tous les randonneurs passionnés et engagés de préparer ses itinéraires de randonnées, de se repérer avec ses cartes numériques et son GPS intégré.'
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Balise 360, la solution de tous les randonneurs engagés'
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Balise 360, la solution qui permet à tous les randonneurs passionnés et engagés de préparer ses itinéraires de randonnées, de se repérer avec ses cartes numériques et son GPS intégré.'
      }]
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

<style lang="scss">
.container-quiz-stepper{
  display: flex;
  justify-content: center;
  align-items: center;
}

.quiz-stepper{
  margin: 0 5px;
  &-active{
    .quiz-stepper-circle{
      transform: scale(1.3);
      background-color: var(--green-hover);
    }
  }
  &-circle{
    transition-duration: var(--transition-duration);
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: var(--grey-color);
  }
}
</style>
