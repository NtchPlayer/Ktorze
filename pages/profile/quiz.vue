<template>
  <main>
    <h1 class="main-title">
      Quizz
    </h1>
  </main>
</template>

<script>
export default {
  name: 'Quiz',
  layout: 'auth',
  middleware: 'auth',
  data () {
    return {
      questions: [{
        title: 'Combien de temps passez-vous en position assise par jour ?',
        description: '(loisirs, télé, ordinateur, travail...)',
        options: [{
          label: '+ de 5 h',
          options: '5+'
        }, {
          label: '4h à 5h',
          options: '4-5'
        }, {
          label: '3h à 4h',
          options: '3-4'
        }, {
          label: '2h à 3h',
          options: '2-3'
        }, {
          label: 'moins de 2h',
          options: '2-'
        }]
      }]
    }
  }
}
</script>
