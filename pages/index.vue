<template>
  <div class="auth-container">
    <div class="auth-container--left">
      <div class="auth-container--left-content ">
        <h1 class="main-title">
          Connexion
        </h1>
        <form @submit.prevent="login">
          <InputEmail ref="input-email" v-model="email" />
          <InputPassword ref="input-password" v-model="password" placeholder="Mot de passe" />
          <input class="btn-primary" type="submit" value="Connexion">
        </form>
        <p class="links-container">
          <nuxt-link class="btn-secondary" :to="{ name: 'auth-sign-up' }">
            Inscription
          </nuxt-link>
        </p>
        <p class="links-container">
          <nuxt-link :to="{ name: 'auth-sign-up' }">
            Mot de passe oublié ?
          </nuxt-link>
        </p>
      </div>
    </div>
    <figure class="auth-container--img desktop">
      <img src="@/assets/section/coverlogin.png" alt="cover login">
    </figure>
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
    }
  }
}
</script>
