<template>
  <div class="sectionBottom">
    <div class="bottomMiddle">
      <h2>L’âme de la randonnée,</h2>
      <h3>ce n’est pas que pour les</h3>
      <ul>
        <li>Faire des jeux de pistes</li>
        <li>Suivre le parcours</li>
        <li>Gagner des points avec niveaux</li>
        <li>Ces niveaux leur permettront de débloquer des items !</li>
      </ul>
      <router-link class="btn-primary" :to="{name: 'home'}">Découvrir l’application</router-link>
    </div>
    <div class="bottomMiddle">
      <figure>  
        <img src="@/assets/cover-bottom.png" alt="">
      </figure>
      <p>grands !</p>
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

      z-index:-1;
  }
  h2{
    font-size: 3.2rem;
    font-weight: 600;
    color: var(--green-color);
  }
  h3{
    font-size: 3.2rem;
    font-weight: 200;
    color: var(--green-color);
  }
  .bottomMiddle{
    width: 50%;
    ul{
      margin: 15px 0;
      li{
        line-height: 50px;
        font-size: 1.3rem;
        &::before{
          content: url("data:image/svg+xml,%3Csvg width='24' height='18' viewBox='0 0 24 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 9L9.5 16.5L22 1.5' stroke='%2300704E' stroke-width='2.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
          margin-right:10px;
        }
      }
    }
    &:first-child{
      padding-left: 15%;
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

</style>