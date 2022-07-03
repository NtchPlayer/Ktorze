<template>
  <div>
    <figure class="main-logo">
      <img alt="Icon balise 360" src="@/assets/balise360.svg">
    </figure>
    <p class="main-title">
      Bienvenue.
    </p>
    <h1 class="main-title">
      Connectez-vous
    </h1>
    <form @submit.prevent="login">
      <InputEmail ref="input-email" v-model="email" />
      <InputPassword ref="input-password" v-model="password" />
      <input class="input btn-primary" type="submit" value="Connexion">
    </form>
    <p class="links-container">
      <nuxt-link :to="{ name: 'auth-sign-up' }">
        Se créer un compte
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import InputEmail from '@/components/input/InputEmail'
import InputPassword from '@/components/input/InputPassword'

export default {
  name: 'Home',
  components: {
    InputPassword,
    InputEmail
  },
  layout: 'auth',
  data () {
    return {
      email: 'test@exemple.com',
      password: 'couette1'
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
    emailIsValid () {
      return this.$refs['input-email']?.emailIsValid
    },
    passwordIsValid () {
      return this.$refs['input-password']?.passwordIsValid
    }
    // formIsValid () {
    //   return this.emailIsValid && this.passwordIsValid
    // }
  },
  methods: {
    login () {
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(() => {
          console.log('test')
        })
    }
  }
}
</script>

<style>

</style>
