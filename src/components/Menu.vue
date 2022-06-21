<template>
  <Slide width="430" @openMenu="isOpen = true" @closeMenu="isOpen = false" noOverlay :crossIcon="false" class="burger-menu">
    <p>
      <router-link class="btn-primary" :to="{name: 'home'}">Télécharger l’application</router-link>
    </p>
    <div class="bm-border"></div>
      <a id="home" href="#">
        <div>
          <span>L'équipe</span>
          <div class="nav-list-item-decoration decoration--revert"></div>
        </div>

        <div>
          <span>Notre projet</span>
            <div class="nav-list-item-decoration decoration--revert"></div>
        </div>

        <div>
          <span>Les fonctionnalités</span>
            <div class="nav-list-item-decoration decoration--revert"></div>
        </div>

      </a>
    </Slide>
</template>

<script>
import { Slide } from 'vue3-burger-menu'

export default {
  components: {
    Slide
  },
  data() {
    return{
      isOpen: false
    }
  }
}
</script>

<style lang="scss">
.bm{
  &-burger{
    &-button {
      z-index: 5;
      left: 24px;
    }
    &-bars{
      background-color: var(--background-color);
      border-radius: 5px;
      height: 4px;
      width: 12px;
      &:first-child{
        width: 30px;
      }
      &:last-child{
        width: 19px;
      }
    }
  }
  &-menu{
    background: linear-gradient( 90deg, #000000d1 0px, #000000d1 80px, #ffffffd1 80px, #ffffffd1 100%);
    z-index: 4;
    transition: 0.7s;
    max-width: 100%;
    padding-top: 35px;
    .btn-primary{
      margin-bottom: 80px;
    }
  }
  &-item-list>*{
    flex-direction: column;
    padding: 0;
    flex-wrap: nowrap;
    white-space: nowrap;
    align-items: flex-end;
    .decoration--revert{
      margin-right: 0;
      width: 38px;
      &::before{
        height: 2px;
      }
      &::after{
        right: 37px;
        height: 15px;
        width: 15px;
      }
    }
    &>div{
      margin-bottom: 80px;
      &>span{
        font-size: 1.875rem;
        color: var(--green-color);
        font-weight: 500;
        margin-right: 20px;
      }
    }
  }
}
</style>