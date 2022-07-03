<template>
  <div class="container-input">
    <label for="firstname">Prénom</label>
    <input
      id="firstname"
      class="input"
      :class="{ 'input-invalid': !firstnameIsValid && value !== '' }"
      type="text"
      name="firstname"
      required
      minlength="2"
      placeholder="Par ex: Théo ou Jules"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'InputFirstname',
  props: {
    value: { type: String, required: true }
  },
  computed: {
    firstnameIsValid () {
      return this.value.length > 1
    }
  }
}
</script>
