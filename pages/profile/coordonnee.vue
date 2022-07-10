<template>
  <section>
    <div class="profile-router-view-header">
      <nuxt-link class="mobile" type="button" :to="{name: 'profile'}">
        <img src="@/assets/icons/arrow-left.svg" alt="Fleche de retour">
      </nuxt-link>
      <h1 class="profile-router-view-header-title">
        <strong>
          Mes Paramètres
        </strong>
      </h1>
    </div>
    <form class="profile-router-view-content" @submit.prevent="__updateUserInfos">
      <InputFirstname value="Nom" />
      <InputLastname value="Prénom" />
      <InputEmail value="test@exemle.com" />
      <InputGender value="female" />
      <InputBirthday value="01-01-2000" />
      <input class="btn-primary" type="submit" value="Modifier" />
    </form>
  </section>
</template>

<script>
import InputFirstname from '@/components/input/InputFirstname'
import InputLastname from '@/components/input/InputLastname'
import InputEmail from '@/components/input/InputEmail'
import InputGender from '@/components/input/InputGender'
import InputBirthday from '@/components/input/InputBirthday'

export default {
  components: {
    InputBirthday,
    InputGender,
    InputEmail,
    InputLastname,
    InputFirstname
  },
  layout: 'app',
  methods: {
    __updateUserInfos () {
      console.log('test')
    }
  }
}
</script>

<style>

</style>
