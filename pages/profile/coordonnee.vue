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
      <InputFirstname v-model="firstname" />
      <InputLastname v-model="lastname" />
      <InputEmail v-model="email" />
      <InputGender v-model="gender" :default-value="false" />
      <InputBirthday v-model="birthday" />
      <input class="btn-primary" type="submit" value="Modifier" />
    </form>
    <transition name="fade">
      <p class="validation" v-show="isValid">Modification enregistré !</p>
    </transition>
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
  data () {
    return {
      firstname: this.$auth.user.firstname,
      lastname: this.$auth.user.lastname,
      email: this.$auth.user.email,
      gender: this.$auth.user.gender,
      birthday: this.$auth.user.birthday,
      isValid: false
    }
  },
  methods: {
    async __updateUserInfos () {
      await this.$axios.post('/users/update', {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        gender: this.gender,
        birthday: this.birthday
      }).then(() => {
        this.isValid = true
        setTimeout(() => { this.isValid = false }, 3000)
      })
    }
  }
}
</script>

<style lang="scss">
  .validation{
    transition: 0.3s;
    line-height: 1rem;
    padding: 15px 15px 10px 15px;
    margin-top: -15px;
    height: max-content;
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  line-height: 1rem;
  transition: 0.6s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    padding: 0 15px;
    transition: 0.6s;
  }
</style>
