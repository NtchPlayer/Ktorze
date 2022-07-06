<template>
  <section class="section-form container-section">
    <div class="container-section-content">
      <div class="form-intro">
        <h1 class="main-title desktop">
          <span class="decoration-circle">Traçons</span> notre chemin
        </h1>
        <h2 class="second-title">
          Notre super <span class="color-orange">Carnet de Voyage</span>
        </h2>
        <p class="text-body" v-text="dataComponent.text" />
      </div>

      <form class="form-newsletter" @submit.prevent="sendingEmail">
        <div class="form-newsletter-identity">
          <div class="container-input">
            <label>Prénom</label>
            <input
              id="firstname"
              v-model.trim.lazy="firstname"
              class="input"
              :class="{ 'input-invalid': !firstnameIsValid && firstname !== '' }"
              type="text"
              name="firstname"
              minlength="2"
              required
              placeholder="Mike"
            >
          </div>
          <div class="container-input">
            <label>Nom</label>
            <input
              id="lastname"
              v-model.trim.lazy="lastname"
              class="input"
              :class="{ 'input-invalid': !lastnameIsValid && lastname !== '' }"
              type="text"
              minlength="2"
              name="lastname"
              required
              placeholder="Horn"
            >
          </div>
        </div>
        <InputEmail
          ref="email-input"
          v-model="email"
        />
        <input
          type="submit"
          value="Recevoir les circuits"
          class="btn-primary"
          :disabled="!formIsValid"
        >
      </form>

      <div v-show="openModal" class="form-modal">
        <button @click.self="closeModal">
          Votre inscription aux carnets de voyages de Balise 360 est confirmée !
        </button>
      </div>
    </div>
    <div class="desktop">
      <figure class="image-section">
        <img loading="lazy" class="form-img" :alt="dataComponent.img.alt" :src="require(`@/assets/form/${dataComponent.img.src}`)">
      </figure>
    </div>
  </section>
</template>

<script>
import InputEmail from '@/components/input/InputEmail'

export default {
  name: 'FormNewsletter',
  components: {
    InputEmail
  },
  props: {
    dataComponent: { type: Object, required: true }
  },
  data () {
    return {
      email: '',
      firstname: '',
      lastname: '',
      openModal: false,
      error: false
    }
  },
  computed: {
    firstnameIsValid () {
      return this.firstname.length > 1
    },
    lastnameIsValid () {
      return this.lastname.length > 1
    },
    emailIsValid () {
      return this.$refs['email-input'].emailIsValid
    },
    formIsValid () {
      return this.firstnameIsValid && this.lastnameIsValid && this.emailIsValid
    }
  },
  methods: {
    closeModal () {
      this.openModal = false
    },
    sendingEmail () {
      if (this.emailIsValid) {
        this.error = false
        let listIds = [7]
        switch (this.$route.query.template) {
          case 'pour-tous':
            listIds = [6]
            break
          case 'en-famille':
            listIds = [8]
            break
          default:
            listIds = [7]
        }
        return this.$axios.post('/newsletter/add', {
          email: this.email,
          listIds,
          attributes: {
            PRENOM: this.firstname,
            NOM: this.lastname
          }
        })
          .then(() => {
            this.$gtm.push({ event: 'InscriptionNewsletter' })
            this.openModal = true
          })
          .catch(() => {
            this.error = true
            setTimeout(() => {
              this.error = true
            }, 5000)
          })
      }
    }
  }
}
</script>

<style lang="scss">
.section-form{
  margin-top: 75px;
  font-family: 'Apfel', serif;
  padding-top: 35px;
  padding-bottom: 250px;
  position: relative;
  overflow-y: clip;
  &::before{
  content: url("@/assets/decos/deco-4.png");
    position: absolute;
    bottom: -190px;
    left: -380px;
    z-index: -1;
    height: 605px;
    width: 547px;
    transform: scale(0.3);
  }
  &::after{
    content: url("@/assets/decos/deco-3.png");
    position: absolute;
    bottom: 250px;
    right: 5px;
    z-index: -1;
    height: 605px;
    width: 547px;
    transform: scale(0.25);
  }
  .main-title{
    text-align: left;
    margin-bottom: 60px;
  }

  .decoration-circle::before{
    background-image: url(../assets/decos/orange-loop.svg);
    width: 189px;
    height: 126px;
    right: -8px;
    bottom: calc(50% - 13px);
  }

  .container-section-content{
    max-width: 483px;
  }

  .section-form .container-section-content{
    max-width: unset;
  }

  .btn-primary{
    max-width: max-content;
  }
  &-modal{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffffd1;
    transition: 1s;
    animation-duration: .5s;
    animation-name: form-modal;
    button{
      width: 100%;
      height: 100%;
      color: var(--green-color);
      font-size: 2.5rem;
      font-weight: 500;
    }
  }
}

.form-newsletter-identity{
  display: flex;
  justify-content: space-between;
  .container-input{
    width: calc(50% - 5px);
  }
}

@keyframes form-modal{
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 1000px){
  .section-form{
    background: none;
  }
}

@media screen and (max-width: 768px) {
 .section-form {
  &::before{
    content: none;
  }
  &::after{
    content: none;
  }
   .container-section-content {
     max-width: unset;
   }
   .form-newsletter-identity{
     display: block;
     .container-input{
       width: 100%;
     }
   }
 }
}
</style>
