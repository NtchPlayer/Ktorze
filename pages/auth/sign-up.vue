<template>
  <div>
    <h1 class="main-title">
      Créez votre compte
    </h1>
    <p class="text-body t-center">
      Aidez-nous à vous proposer des équipements, des sentiers et des services sur mesure en saisissant vos données
    </p>
    <form>
      <InputEmail ref="input-email" v-model="email" />
      <InputPassword ref="input-password" v-model="password" />
      <InputFirstname ref="input-firstname" v-model="firstname" />
      <InputLastname ref="input-lastname" v-model="lastname" />
      <InputBirthday ref="input-birthday" v-model="birthday" />
      <InputGender ref="input-gender" v-model="gender" />
      <InputPolicy ref="input-policy" />
      <input class="input btn-primary" type="submit" value="Terminer">
    </form>
    <p class="text-body t-center">
      Vous avez déjà un compte Balise360 ?
    </p>
    <p class="links-container">
      <nuxt-link to="/">
        <b>Se connecter</b>
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import InputEmail from '@/components/input/InputEmail'
import InputPassword from '@/components/input/InputPassword'
import InputFirstname from '~/components/input/InputFirstname'
import InputLastname from '~/components/input/InputLastname'
import InputBirthday from '~/components/input/InputBirthday'
import InputGender from '~/components/input/InputGender'
import InputPolicy from '~/components/input/InputPolicy'

export default {
  name: 'Home',
  components: {
    InputPolicy,
    InputGender,
    InputBirthday,
    InputLastname,
    InputFirstname,
    InputPassword,
    InputEmail
  },
  layout: 'auth',
  data () {
    return {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      birthday: '',
      gender: ''
    }
  },
  head () {
    return {
      title: ' - Login',
      meta: [{
        hid: 'og:title',
        property: 'og:title',
        content: 'Balise360 - Login'
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Balise360 - Login'
      }]
    }
  },
  computed: {
    formIsValid () {
      return this.$refs['input-email']?.emailIsValid &&
        this.$refs['input-password']?.passwordIsValid &&
        this.$refs['input-firstname']?.firstnameIsValid &&
        this.$refs['input-lastname']?.lastnameIsValid &&
        this.$refs['input-birthday']?.birthdayIsValid &&
        this.$refs['input-gender']?.genderIsValid &&
        this.$refs['input-policy']?.policy
    }
  }
}
</script>

<style>

</style>
