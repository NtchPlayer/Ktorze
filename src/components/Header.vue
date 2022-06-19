<template>
  <nav class="main-nav">
    <ul class="nav-list">
      <li class="nav-list-item">
        <span class="nav-list-item-decoration" />
        <router-link :to="{name: 'home'}">L'équipe</router-link>
      </li>
      <li class="nav-list-item">
        <span class="nav-list-item-decoration" />
        <router-link :to="{name: 'home'}">Notre projet</router-link>
      </li>
      <li class="nav-list-item">
        <span class="nav-list-item-decoration" />
        <router-link :to="{name: 'home'}">Les fonctionnalités</router-link>
      </li>
    </ul>
    <div class="container-buttons">
      <button
          type="button"
          @click.prevent="paramsModal = true"
      >
        <span aria-label="Paramètre du site" class="fas fa-cog"></span>
      </button>
      <Teleport to="body">
        <ModalParams v-if="paramsModal" @close-modal="paramsModal = false" />
      </Teleport>
      <router-link class="btn-primary btn-primary-fotorama" :to="{name: 'home'}">Télécharger l'application</router-link>
    </div>
  </nav>
</template>

<script>
import ModalParams from '@/components/modal/ModalParams'

export default {
  name: 'Header',
  components: {
    ModalParams
  },
  data () {
    return {
      paramsModal: false
    }
  }
}
</script>

<style lang="scss">
.main-nav{
  height: 80px;
  position: absolute;
  width: 100%;
  z-index: 1;
}

.nav-list{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  &-item{
    margin-left: 20px;
    position: relative;
    a{
      font-size: 1.8rem;
      color:var(--green-color);
      font-weight: 600;
    }
    &-decoration{
      display: inline-block;
      position: relative;
      width: 50px;
      height: 20px;
      margin-right: 10px;
      &::before,
      &::after{
        content: '';
        display: inline-block;
        background-color: var(--green-color);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before{
        right: 0;
        width: 100%;
        height: 1px;
      }
      &::after{
        right: 0;
        width: 10px;
        height: 10px;
        border-radius: 50px;
      }
    }
    &:first-child::before{
      content: '';
      position: absolute;
      display: inline-block;
      width: 1px;
      height: 40px;
      background-color: var(--green-color);
      left: 0;
      bottom: 50%;
    }
  }
}

.container-buttons{
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
