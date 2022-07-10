<template>
  <section>
    <div class="profile-router-view-header">
      <h1>
        <strong>Mes coordonnées</strong>
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
