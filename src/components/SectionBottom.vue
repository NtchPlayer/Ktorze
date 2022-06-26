<template>
<section>
    <h2 class="main-title">Pourquoi utiliser Balise 360 ?</h2>
    <div class="sectionBottom">

      <div class="bottomMiddle">
        <figure>
          <img src="@/assets/cover-bottom.png" alt="">
        </figure>
      </div>

      <div class="bottomMiddle">
        <div class="bottomMiddle--center">
          <h2>Une expérience personnalisée pour chaque utilisateur</h2>
          <p>
            Vous pouvez avec  notre application vous renseignez sur tous les parcours de randonnée, redécouvrir la France et sa biodiversité sous un autre angle mais aussi préserver notre patrimoine !
          </p>
          <p>
            Une solution qui va permettre d’accompagner nos aventuriers à s’organiser et de bien s’orienter durant leur randonnée. En utilisant balise 360 les randonneurs vont participer selon leur localisation à récolter des données scientifiques sur l’impact du réchauffement climatique sur la nature.
          </p>
          <p>
            Vous êtes les héros, qui participeront à sauvegarder notre cher patrimoine naturel !
          </p>
          <!-- <router-link class="btn-primary" :to="{name: 'home'}">Découvrir l’application</router-link> -->
        </div>
      </div>
    </div>

</section>
</template>

<script>
export default {
    name: 'SectionBottom'
}
</script>

<style lang="scss">
.main-title{
  width: 100%;
  padding: 0 50px 0 100px;
  max-width: 1440px;
  margin: auto auto 50px auto;
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--green-color);
  position: relative;
  &::before{
    content: url("@/assets/Sprinkle.svg");
    position: absolute;
    width: 35px;
    height: 39px;
    left: 50px;
    top: 5px;
  }
}
.sectionBottom{
  width: 100%;
  max-height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  max-width: 1440px;
  margin: auto auto 130px auto;
  gap: 50px;
  img{
      height: 420px;
      width: 100%;
      object-fit: cover;
      z-index:-1;
  }
  h2{
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--green-color);
    line-height: 1.5rem;
    margin-bottom: 20px;
  }
  h3{
    font-size: 2.1875rem;
    font-weight: 200;
    color: var(--green-color);
  }
  .bottomMiddle{
    width: 50%;
    &--center{
      margin-right: 30px;
      font-size: 1rem;
      max-width: 440px;
    }
    p{
      margin-bottom: 20px;
      
    }
    ul{
      margin: 40px 0;
      li{
        line-height: 50px;
        font-size: 1.375rem;
        &::before{
          content: url("data:image/svg+xml,%3Csvg width='24' height='18' viewBox='0 0 24 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 9L9.5 16.5L22 1.5' stroke='%23FE7433' stroke-width='2.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
          margin-right:20px;
        }
      }
    }
  }
}

 @media (min-width: 0px) and (max-width: 768px) {
  .sectionBottom{
    height: unset;
    flex-direction: column-reverse;
    h2{
      margin-bottom: 10px;
    }
    h2, h3{
      text-align: center;
      line-height: unset;
    }
    img{
      height: 300px;
    }
    .bottomMiddle{
      width: 100%;
      &:last-child{
        margin-bottom: 30px;
      }
      &:first-child{
        width: unset;
        margin: auto;
        padding: 0 25px;
      }
      &--center{
        float: unset;
        margin-right: 0;
        a{
          margin: auto;
          display: block;
          width: max-content;
        }
      }
    }
  }
 }


</style>
