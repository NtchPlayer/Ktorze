<template>
  <section class="section-recommendation">
    <h1 class="main-title">Les randonneurs la recommande</h1>
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
        comment: 'Avec l’application Balise 360, j’ai appris à être plus alerte sur des légers changements sur des chardons bleus au bord des routes durant mes parcours. Si je vois un souci, il suffit de mettre un avis sur l’application. C’est très facile à prendre en main et je suis heureux d’aider ma patrie !',
        img: {
          src: 'alain',
          alt: "Photo d'Alain Duchan"
        }
      // }, {
      //   name: 'Bruno Espinache',
      //   work: 'Accompagnateur à la vallée de l’Osseau',
      //   comment: 'Toute l’année, nous vous emmenons à la découverte de la montagne, en individuels, en groupes, en classes… Et quand la neige recouvre nos montagnes, c’est l’occasion d’entrer dans la magie de l’hiver.',
      //   img: {
      //     src: 'bruno',
      //     alt: "Photo de Bruno Espinache"
      //   }
      }]
    }
  }
}
</script>

<style lang="scss">
.section-recommendation{
  margin: 100px auto;
  max-width: 1220px;
}

.container-comments{
  display: flex;
  margin: 100px 0;
  justify-content: center;
  padding: 0 50px;
}
.card-comment{
  &-content{
        max-width: 530px;
      }
}

 @media (min-width: 0px) and (max-width: 768px) {
  .container-comments{
    flex-direction: column;
    align-items: center;
    .card-comment{
      flex-direction: column;
      align-items: center;
      text-align: center;
      &-img{
        margin: 0 0 15px 0;
      }
      &-work{
        min-height: unset;
      }
    }
  }
 }
</style>
