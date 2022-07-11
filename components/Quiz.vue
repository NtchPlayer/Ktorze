<template>
  <div class="quiz-section-content">
    <h1 class="main-title" v-text="quizDatas.title" />
    <div class="quiz-section-content-grid">
      <button
        v-for="(answer, i) of quizDatas.answers"
        :key="i"
        class="quiz-card"
        :class="{ active: quizDatasResult.includes(answer.id) }"
        @click.prevent="selectAnswer(answer.id)"
      >
        <p v-text="answer.label" />
        <img v-if="answer.image" :src="require(`@/assets/survey/${answer.image.file}`)" :alt=" answer.image.alt">
      </button>
    </div>
    <button class="btn-primary" type="button" @click.prevent="postValue">
      Suivant
    </button>
  </div>
</template>

<script>
export default {
  name: 'Quiz',
  layout: 'app',
  props: {
    quizDatas: { type: Object, required: true }
  },
  data () {
    return {
      quizDatasResult: []
    }
  },
  methods: {
    selectAnswer (id) {
      if (this.quizDatasResult.includes(id)) {
        const index = this.quizDatasResult.indexOf(id)
        return this.quizDatasResult.splice(index, 1)
      }
      return this.quizDatasResult.push(id)
    },
    postValue () {
      this.$axios.post('/trails/survey', {
        answers: this.quizDatasResult,
        trailId: this.$route.params.slug
      }).then(() => {
        this.quizDatasResult = []
        this.$emit('increment')
      })
    }
  }
}
</script>

<style lang="scss">
.quiz-section-content{
  font-family: 'Apfel', sans-serif;
  &-grid{
    margin: auto;
    display: flex;
    justify-content: space-between;
    max-width: 780px;
    flex-wrap: wrap;
    gap: 13px;
    margin-bottom: 70px;
  }
  .main-title{
    margin: auto auto 70px auto;
    font-family: 'Gotham', sans-serif;
    max-width: 540px;
  }
  .btn-primary{
    display: block;
    margin: auto;
    min-width: 295px;
  }
}
.quiz-card{
  display: flex;
  flex-direction: column;
  figure{
    height: 175px;
    width: 200px;
    order: 1;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 15px;
    }
  }
  p{
    color: var(--white-color);
    padding: 12px;
    border-radius: 15px;
    background: var(--brown-color);
    text-align: center;
    margin-top: -27px;
    order: 2;
  }
  &.active{
    border: 2px solid var(--green-color);
  }
}
</style>
