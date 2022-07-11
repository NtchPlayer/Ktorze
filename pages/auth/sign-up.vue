<template>
  <div class="auth-container">
    <div class="auth-container--left">
      <button class="btn-back">
        <img @click.self="back" src="@/assets/icons/arrow-left-orange.svg" alt="">
      </button>
      <h1 class="main-title">
        <span>Créez</span> votre compte
      </h1>
      <p class="text-body t-center">
        Pour un accompagnement sur mesure :<br> des équipements, des sentiers et des services selon vos envies et besoins.
      </p>
      <form @submit.prevent="signUp" class="signup">
        <InputEmail ref="input-email" v-model="email" />
        <InputPassword ref="input-password" v-model="password" />
        <div class="form-column">
          <InputFirstname ref="input-firstname" v-model="firstname" />
          <InputLastname ref="input-lastname" v-model="lastname" />
        </div>
        <div class="form-column">
          <InputBirthday ref="input-birthday" v-model="birthday" />
          <InputGender ref="input-gender" v-model="gender" />
        </div>
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
    <figure class="auth-container--img desktop">
      <img src="@/assets/section/coversign.png" alt="cover login">
    </figure>
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
      email: 'test@exemple.com',
      password: 'couette1',
      firstname: 'Test',
      lastname: 'Exemple',
      birthday: '2000-01-01',
      gender: 'male'
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
  },
  methods: {
    back () {
      this.$router.back()
    },
    signUp () {
      if (!this.formIsValid) {
        return
      }
      return this.$axios
        .post('/users/signup', {
          email: this.email,
          password: this.password,
          firstname: this.firstname,
          lastname: this.lastname,
          birthday: this.birthday,
          gender: this.gender
        })
        .then((e) => {
          this.$auth.setUser(e.data.user)
          this.$auth.setUserToken(e.data.payload.token, e.data.payload.refresh_token)
          this.$router.push({ name: 'profile-quiz' })
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>

<style lang="scss">
  .form-column{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    .container-input{
      width: 50%;
    }
  }
  .signup{
    input.btn-primary{
      margin-top: 0;
    }
  }
</style>
