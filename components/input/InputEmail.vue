<template>
  <div class="container-input">
    <label for="email">Adresse mail</label>
    <input
      id="email"
      class="input"
      :class="{ 'input-invalid': !emailIsValid && value !== '' }"
      type="email"
      pattern=".+@.+."
      name="email"
      required
      placeholder="Votre address mail"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <p v-show="!emailIsValid && value !== ''" class="input-error">
      Votre adresse mail n'est pas valide.
    </p>
  </div>
</template>

<script>
export default {
  name: 'InputEmail',
  props: {
    value: { type: String }
  },
  computed: {
    emailIsValid () {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.value)
    }
  }
}
</script>
