<template>
<div>
  <div class="form-intro">
    <h2>Prépare ton sac à dos !</h2>
    <p>Inscris toi à notre carnet de voyage et reçois un mois d'abonnement gratuit à Balise 360 et aussi de nombreux itinairaires de randonnées uniques à découvrir !</p>
  </div>

  <form @submit.prevent='sendingEmail' class="form-home">
    <div class="container-input">
      <label for="firstname">Prénom</label>
      <input
        id="firstname"
        class="input"
        v-model="firstname"
        type="text"
        name="firstname"
        required
        placeholder="PRENOM"
      >
    </div>

    <div class="container-input">
      <label for="firstname">Nom</label>
      <input
        id="lastname"
        class="input"
        v-model="lastname"
        type="text"
        name="lastname"
        required
        placeholder="NOM"
      >
    </div>

    <div class="container-input">
      <label for="email">Email</label>
      <input
        id="email"
        class="input"
        :class="{ 'input-invalid': !isEmailValid }"
        v-model="email"
        type="email"
        pattern=".+@.+."
        name="email"
        required
        placeholder="EMAIL"
      >
      <p class="input-error" v-show="!isEmailValid">
        Votre adresse mail n'est pas valide.
      </p>
    </div>

    <div class="container-input">
        <label for="phone">Portable</label>
        <div class="phone-container">
          <select
            name="phonePrefix"
            class="select"
            v-model="prefixNumber"
          >
            <option
              v-for="prefix of phonePrefix"
              :key="prefix.id"
              :value="prefix.code"
              v-text="prefix.id"
            />
          </select>
          <div :class="{ 'input-invalid': !isPhoneValid }">
            <span class="prefix-number" v-text="prefixNumber" />
            <input
              id="phone"
              class="input"
              v-model="phone"
              type="tel"
              name="phone"
              required
              placeholder="6 82 54 87 98"
            >
          </div>
        </div>
        <p class="input-error" v-show="!isPhoneValid">
          Votre numéro de téléphone n'est pas valide.
        </p>
      </div>

    <div class="container-input">
        <label for="date">Date de naissance</label>
        <input
          id="date"
          class="input"
          :class="{ 'input-invalid': !isDateValid }"
          v-model="date"
          type="date"
          name="date"
          required
        >
        <p v-show="!isDateValid">
          Votre numéro de naissance n'est pas dans un format valide !
        </p>
      </div>

    <p class="input-error" v-show="error">
      Nous n'avons pas pu confirmer votre inscription.
    </p>

    <input
      type="submit"
      value="C'est parti !"
      class="btn-primary"
      :disabled="!isFormValid"
    >
  </form>

  <div v-show='openModal' class="form-modal">
      <button @click.self="closeModal">Votre inscription aux carnets de voyages de Balise 360 est confirmée !</button>
  </div>
</div>

</template>

<script>


export default {
  name: 'FormHome',
  data: function () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      date: '',
      prefixNumber: '+33',
      openModal: false,
      error: false,
      phonePrefix: [
        {
          id: 'FR',
          code: '+33',
          regex: /^(\+33)[1-9](\d{2}){4}$/g
        }, {
          id: 'USA',
          code: '+1'
        }, {
          id: 'UK',
          code: '+44'
        }, {
          id: 'CH',
          code: '+41'
        }, {
          id: 'NL',
          code: '+39'
        }, {
          id: 'ES',
          code: '+34'
        }, {
          id: 'DE',
          code: '+49'
        }, {
          id: 'BE',
          code: '+32'
      }]
    }
  },
  computed: {
    phoneNumber() {
      const tempPhone = this.phone[0] === '0' ? this.phone.substring(1) : this.phone
      return `${this.prefixNumber}${tempPhone}`
    },
    isEmailValid () {
      return this.email === '' || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
    },
    isPhoneValid () {
      // const regexChoose = this.phonePrefix.find(prefix => prefix.code === this.prefixNumber)
      // const regex = regexChoose.regex || /^[0-9]+$/
      return this.phone === '' || /^(\+33)[1-9](\d{2}){4}$/g.test(this.phoneNumber)
    },
    isDateValid () {
      return this.date === '' || /^\d{4}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/.test(this.date)
    },
    isFormValid () {
      // const regexChoose = this.phonePrefix.find(prefix => prefix.code === this.prefixNumber)
      // const regex = regexChoose.regex || /^[0-9]+$/
      return this.firstname !== ''
        && this.lastname !== ''
        && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
        && /^(\+33)[1-9](\d{2}){4}$/g.test(this.phoneNumber)
        && /^\d{4}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/.test(this.date)
    }
  },
  methods: {
    closeModal(){
      this.openModal=false
    },

    sendingEmail() {
      if (this.isEmailValid) {
        this.error = false
        const body = {
          email: this.email,
          listIds: [7],
          attributes: {
            PRENOM: this.firstname,
            NOM: this.lastname,
            DATE_DE_NAISSANCE: this.date,
            SMS: this.phoneNumber
          }
        }
        const headers = {
          'api-key': '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'
        }
        this.axios.post("https://api.sendinblue.com/v3/contacts", body, { headers })
            .then(() => {
              this.$gtm.dataLayer().push({event: 'InscriptionNewsletter'})
              this.axios.post(
                  'https://api.sendinblue.com/v3/smtp/email',
                  {
                    to: [{
                      email: this.email,
                      name: this.firstname
                    }],
                    templateId: 3
                  },
                  { headers }
              )
              .catch((e) => {
                console.log(e)
              })
              this.openModal=true
            })
            .catch((e) => {
              this.e = e.response.data.message
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
  &-intro{
    text-align: center;
    p{
      font-size: 1.5rem;
      margin: 25px auto;
      max-width: 600px;
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
      align-items: center;
      margin: 0 auto 50px auto;
      max-width: 780px;
      padding: 0 30px;
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
      outline-color: var(--orange-color);
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


</style>
