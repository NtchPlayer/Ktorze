<template>
  <section class="section-recommendation">
    <h1 class="section-title">Les randonneurs la recommande</h1>
    <div class="container-comments">
      <CardComment
        v-for="(comment, i) of comments"
        :key="i"
        :name="comment.name"
        :work="comment.work"
        :comment="comment.comment"
        :img="comment.img"
      />
    </div>
  </section>
</template>

<script>
import CardComment from '@/components/card/CardComment'

export default {
  name: 'SectionRecommendation',
  components: {
    CardComment
  },
  data () {
    return {
      comments: [{
        name: 'Alain Duchamps',
        work: 'Accompagnateur en moyenne montagne et raquette',
        comment: 'Les randonnées sont adaptées à tous les niveaux. Sur les pas de votre Accompagnateur en Montagne, diplômé d’état, connaissant très bien son massif et les habitudes de cette faune, vous parcourrez chemins et sentiers, que vous abandonnerez aussi pour du hors-piste.',
        img: {
          src: 'alain',
          alt: "Photo d'Alain Duchan"
        }
      }, {
        name: 'Bruno Espinache',
        work: 'Accompagnateur à la vallée de l’Osseau',
        comment: 'Toute l’année, nous vous emmenons à la découverte de la montagne, en individuels, en groupes, en classes… Et quand la neige recouvre nos montagnes, c’est l’occasion d’entrer dans la magie de l’hiver.',
        img: {
          src: 'bruno',
          alt: "Photo de Bruno Espinache"
        }
      }]
    }
  }
}
</script>

<style>
.section-recommendation{
  margin: 100px auto;
  max-width: 1220px;
}

.container-comments{
  display: flex;
  margin: 100px 0;
  justify-content: space-between;
  padding: 0 10px;
}
</style>
