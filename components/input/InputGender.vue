<template>
  <div class="container-input">
    <label for="gender">
      Équipement et services sur mesure pour
    </label>
    <select
      id="gender"
      class="select"
      name="gender"
      required
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
      <option value="">
        Sélectionnez votre sexe
      </option>
      <option value="female">
        Femme
      </option>
      <option value="male">
        Homme
      </option>
      <option value="other">
        Autre
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'InputGender',
  props: {
    value: { type: String, required: true }
  },
  computed: {
    genderIsValid () {
      return this.value !== ''
    }
  }
}
</script>
