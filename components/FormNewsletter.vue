<template>
  <section class="section-form container-section">
    <div class="container-section-content">
      <div class="form-intro">
        <h1 class="main-title desktop">
          <!-- <img class="section-title-img" alt="deco citation" src="@/assets/decos/orange-loop.svg">-->
          Traçons notre chemin
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
              placeholder="MikeHorn@mail.com"
            >
          </div>
        </div>
        <div class="container-input">
          <label>Adresse mail</label>
          <input
            id="email"
            v-model.trim.lazy="email"
            class="input"
            :class="{ 'input-invalid': !emailIsValid && email !== '' }"
            type="email"
            pattern=".+@.+."
            name="email"
            required
            placeholder="Votre address mail"
          >
          <p v-show="!emailIsValid && email !== ''" class="input-error">
            Votre adresse mail n'est pas valide.
          </p>
        </div>

        <input
          type="submit"
          value="S’inscrire à la newsletter"
          class="btn-primary desktop"
          :disabled="!formIsValid"
        >
        <input
          type="submit"
          value="Recevoir les circuits"
          class="btn-primary mobile"
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
        <img class="form-img" :alt="dataComponent.img.alt" :src="require(`@/assets/form/${dataComponent.img.src}`)">
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FormNewsletter',
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
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
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
        return this.$axios.post('/newsletter/add', {
          email: this.email,
          listIds: [7],
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

  .main-title{
    text-align: left;
    margin-bottom: 60px;
  }

  .container-section-content{
    max-width: 483px;
  }

  .section-form .container-section-content{
    max-width: unset;
  }

  &-intro{
    h3{
      color: var(--green-color);
      font-size: 1.5rem;
      font-weight: 500;
    }
    .section-title-img{
      position: absolute;
      top: -35px;
      left: -65px;
    }
    p{
      font-size: 1rem;
      margin: 5px 0 25px auto;
      max-width: 600px;
      color: var(--green-color);
    }
    h2{
      color: var(--green-color);
      font-size: 2.5rem;
      font-weight: 500;
    }
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

@media screen and (max-width: 768px) {
 .section-form {
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
