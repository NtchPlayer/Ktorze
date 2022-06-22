<template>
  <div class="form-intro">
    <h2>Nous contacter</h2>
    <p>Appelez-nous <a href="tel:(+1) 866-661-1331" class="link">(+1) 866-661-1331</a></p>
    <p>Ou remplissez le formulaire ci-dessous et nous vous donnerons des nouvelles rapidement.</p>
  </div>
    <form @submit.prevent='handleSubmit' class="form-home">
      <div>
        <label for="name">Votre nom</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
          required
          placeholder="John Doe...">
      </div>
    
      <div>
        <label for="mail">Votre Email</label>
        <input
          id="mail"
          v-model="mail"
          type="email"
          pattern=".+@.+."
          name="mail"
          required
          placeholder="monsupermail@mail.com">
      </div>

      <div>
        <label for="topic">Sujet du message</label>
        <input
          id="topic"
          v-model="topic"
          type="text"
          name="topic"
          required
          placeholder="Mon super sujet...">
      </div>

      <div>
        <label for="message">Votre message</label>
        <input
          id="message"
          v-model="message"
          type="text"
          name="message"
          required
          placeholder="Mon super message...">
      </div>
      
        <input
          type="submit"
          value="Envoyer"
          class="btn-primary">

  </form>

  <div v-show='openModal' class="form-modal">
      <button @click.self="closeModal">Votre mail a bien été envoyé !</button>
  </div>

</template>

<script>


export default {
    name: 'FormHome',
    data(){
        return{
            name: '',
            mail: '',
            topic: '',
            message: '',
            openModal: false
        }
    },
    methods: {
        handleSubmit(){
            this.openModal=true
        },
        closeModal(){
            this.openModal=false
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
        div{
          display: flex;
          flex-direction: column;
          width: 100%;
          label{
            margin: 15px 0px 5px 0px;
            font-size: 0.75rem;
          }
          input{
            background: var(--input);
            border: 1px solid var(--input-border);
            padding: 10px 14px;
          }
        }
        input.btn-primary{
          margin-top: 25px;
          border:none;
          cursor: pointer;
          font-weight: 600;
          width: 100%;
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