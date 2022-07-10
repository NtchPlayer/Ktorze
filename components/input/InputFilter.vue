<template>
  <section class="filter-section">
    <h1 class="main-title" v-text="option.title" />
    <div class="filter-container-buttons">
      <button
        v-for="choice of option.choices"
        :key="choice.value"
        type="button"
        class="filter-button"
        @click="$emit('choice', { option: option.field, choice: choice.value })"
        v-text="choice.label"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    option: { type: Object, required: true }
  }
}
</script>

<style>
.filter-section{
  margin: 24px 0;
}

.filter-container-buttons{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-button{
  background-color: var(--blue-color-30);
  font-weight: bold;
  border-radius: 50px;
  padding: 10px 30px;
  font-size: .75rem;
  margin: 6px;
  color: var(--black-color-80);
}
</style>
