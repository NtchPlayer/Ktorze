<template>
  <div class="container-input">
    <label for="birthday">Date de naissance</label>
    <input
      id="birthday"
      class="input"
      :class="{ 'input-invalid': !birthdayIsValid && value !== '' }"
      type="date"
      name="birthday"
      required
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'InputBirthday',
  props: {
    value: { type: String, required: true }
  },
  computed: {
    birthdayIsValid () {
      return true
    }
  }
}
</script>
