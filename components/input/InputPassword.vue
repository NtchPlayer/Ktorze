<template>
  <div class="container-input">
    <label for="password">Mot de passe</label>
    <input
      id="password"
      class="input"
      :class="{ 'input-invalid': !passwordIsValid && value !== '' }"
      type="password"
      minlength="8"
      name="password"
      required
      placeholder="Au moins 8 caractères"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <p v-show="!passwordIsValid && value !== ''" class="input-error">
      Votre mot de passe doit contenir au moins 8 caractère !
    </p>
  </div>
</template>

<script>
export default {
  name: 'InputPassword',
  props: {
    value: { type: String }
  },
  computed: {
    passwordIsValid () {
      return this.value.length > 7
    }
  }
}
</script>
