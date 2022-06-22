<template>
  <div class="sectionBottom">
    <div class="bottomMiddle">
      <p class="bottomMiddle--center">
        <h2>L’âme de la randonnée,</h2>
        <h3>ce n’est pas que pour les grands !</h3>
        <ul>
          <li>Faire des jeux de pistes</li>
          <li>Suivre le parcours</li>
          <li>Gagner des points avec niveaux...</li>
          <li>...leur permettant de débloquer des items !</li>
        </ul>
        <router-link class="btn-primary" :to="{name: 'home'}">Découvrir l’application</router-link>
      </p>

    </div>
    <div class="bottomMiddle">
      <figure>
        <img src="@/assets/cover-bottom.png" alt="">
      </figure>
    </div>

  </div>
</template>

<script>
export default {
    name: 'SectionBottom'
}
</script>

<style lang="scss">

.sectionBottom{
  margin-bottom: 50px;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
      height: 800px;
      width: 100%;
      object-fit: cover;
      z-index:-1;
  }
  h2{
    font-size: 3rem;
    font-weight: 600;
    color: var(--blue-color);
    line-height: 4rem;
  }
  h3{
    font-size: 2.1875rem;
    font-weight: 200;
    color: var(--blue-color);
  }
  .bottomMiddle{
    width: 50%;
    &--center{
      float: right;
      margin-right: 30px;
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
    &:last-child{
      position: relative;
      p{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 14rem;
        color: #152c5b;
        white-space: nowrap;
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
