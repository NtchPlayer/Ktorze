<template>
  <div class="container-input">
    <label for="lastname">Nom</label>
    <input
      id="lastname"
      class="input"
      :class="{ 'input-invalid': !lastnameIsValid && value !== '' }"
      type="text"
      name="lastname"
      required
      minlength="2"
      placeholder="Par ex: Smith"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'InputLastname',
  props: {
    value: { type: String }
  },
  computed: {
    lastnameIsValid () {
      return this.value.length > 1
    }
  }
}
</script>
