<template>
<div class="form">
  <div>
    <div class="form-intro">
      <h2 class="desktop"><img class="section-title-img" alt="deco citation" src="@/assets/orange-loop.svg">Traçons notre chemin</h2>
      <h2 class="mobile"><span>Traçons</span> notre chemin !</h2>
      <h3 class="desktop">Notre superbe newsletter</h3>
      <p v-text="datacomponent.text" />
    </div>

    <form @submit.prevent='sendingEmail' class="form-home">
      <div class="container-input">
        <input
          id="email"
          class="input"
          :class="{ 'input-invalid': !isEmailValid }"
          v-model="email"
          type="email"
          pattern=".+@.+."
          name="email"
          required
          placeholder="Votre adresse mail"
        >
        <p class="input-error" v-show="!isEmailValid">
          Votre adresse mail n'est pas valide.
        </p>
      </div>

      <input
        type="submit"
        value="S’inscrire à la newsletter"
        class="btn-primary desktop"
        :disabled="!isFormValid"
      >
      <input
        type="submit"
        value="S’inscrire"
        class="btn-primary mobile"
        :disabled="!isFormValid"
      >
    </form>

    <div v-show='openModal' class="form-modal">
        <button @click.self="closeModal">Votre inscription aux carnets de voyages de Balise 360 est confirmée !</button>
    </div>
  </div>
  
  <div class="desktop">
    <figure>
      <img class="form-img" alt="deco citation" :src="require(`@/assets/${datacomponent.src}`)">
    </figure>
  </div>
  <img class="form-deco desktop" alt="deco citation" src="@/assets/DecoForm.svg">
</div>

</template>

<script>
import { NewsletterService } from '@/common/api.service';


export default {
  name: 'FormNewsletter',
  data () {
    return {
      email: '',
      openModal: false,
      error: false
    }
  },
  props: {
    datacomponent: { type: Object, required: true},
},
  computed: {
    isEmailValid () {
      return this.email === '' || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
    },
    isFormValid () {
      // const regexChoose = this.phonePrefix.find(prefix => prefix.code === this.prefixNumber)
      // const regex = regexChoose.regex || /^[0-9]+$/
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
    }
  },
  methods: {
    closeModal(){
      this.openModal=false
    },
    sendingEmail() {
      if (this.isEmailValid) {
        this.error = false
        return NewsletterService.createContact({
          email: this.email,
          listIds: [7],
        })
          .then(({ data }) => {
            this.$gtm.dataLayer().push({event: 'InscriptionNewsletter'})
            this.openModal = true
          })
          .catch(() => {
            this.error = true
            setTimeout(() => {
              this.error = true;
            }, 5000)
          })
      }
    }
  }
}
</script>

<style lang="scss">
.form{
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
  position: relative;
  max-width: 1440px;
  margin: auto auto 250px auto;
  padding: 75px 15px 0 15px;
  font-family: 'Apfel';

  figure{
    width: 100%;
    img{
      width: 100%;
    }
  }
  &-intro{
    position: relative;
    h2{
      margin-bottom: 90px;
      font-family: 'Apfel-bold';

    }
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
      margin: 5px 0px 25px auto;
      max-width: 600px;
      color: var(--green-color);
    }
    h2{
      color: var(--green-color);
      font-size: 2.5rem;
      font-weight: 500;
    }
  }

  &-home{
      display: flex;
      flex-direction: column;
      margin: 0 auto 50px auto;
      max-width: 780px;
      .container-input{
        input{
          min-width: 280px;
        }
        display: block;
      }
      .btn-primary{
        max-width: max-content;
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
  &-deco{
    position: absolute;
    bottom: -150px;
  }
}

.phone-container{
  display: flex;
  .select{
    margin-right: 20px;
  }
  > div{
    transition-duration: var(--transition-duration);
    outline: 2px solid transparent;
    width: 100%;
    display: grid;
    grid-template-columns: 70px 1fr;
    &:focus-within{
      outline-color: var(--green-color);
      border-radius: var(--border-radius);
    }
  }
  .prefix-number{
    text-align: center;
    display: inline-block;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    background: var(--input);
    border: 1px solid var(--input-border);
    padding: 10.5px 0;
    border-right: none;
  }
  .input{
    outline: none;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
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


 @media (min-width: 0px) and (max-width: 768px) {
  .form{
    padding: 0 50px;
    margin: auto auto 150px auto;
    &-intro{
      h2{
        margin-bottom: 20px;
        font-size: 1.5rem;
        span{
          color: var(--orange-color);
        }
      }
      p{
        line-height: 1.25rem;
      }
    }
  }
 }


</style>
