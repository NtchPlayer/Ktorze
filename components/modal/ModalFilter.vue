<template>
  <article class="modale-filter max-width">
    <div class="profile-router-view-header profile-router-view-header-favoris">
      <h1 class="profile-router-view-header-title">
        <strong v-text="'Filtre'" />
      </h1>
      <button type="button" @click.prevent="$emit('closeFilter')">
        <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6667 18.3333C11.6667 19.2538 12.4129 20 13.3333 20H16.6667C17.5871 20 18.3333 19.2538 18.3333 18.3333V18.3333C18.3333 17.4129 17.5871 16.6667 16.6667 16.6667H13.3333C12.4129 16.6667 11.6667 17.4129 11.6667 18.3333V18.3333ZM1.66667 0C0.746193 0 0 0.746192 0 1.66667V1.66667C0 2.58714 0.746192 3.33333 1.66667 3.33333H28.3333C29.2538 3.33333 30 2.58714 30 1.66667V1.66667C30 0.746192 29.2538 0 28.3333 0H1.66667ZM5 10C5 10.9205 5.74619 11.6667 6.66667 11.6667H23.3333C24.2538 11.6667 25 10.9205 25 10V10C25 9.07953 24.2538 8.33333 23.3333 8.33333H6.66667C5.74619 8.33333 5 9.07953 5 10V10Z" fill="#5C8670" />
        </svg>
      </button>
    </div>
    <InputFilter
      v-for="(option, i) of options"
      :key="i"
      :option="option"
      @choice="emitChoice"
    />
    <button type="button" class="btn-primary">
      <strong>
        Enregistrer
      </strong>
    </button>
  </article>
</template>

<script>
import InputFilter from '@/components/input/InputFilter'
export default {
  components: { InputFilter },
  data () {
    return {
      options: [{
        title: 'Niveau',
        field: 'difficulties',
        choices: [{
          label: 'Niveau 1',
          value: 1
        }, {
          label: 'Niveau 2',
          value: 2
        }, {
          label: 'Niveau 3',
          value: 3
        }, {
          label: 'Niveau 4',
          value: 4
        }]
      }, {
        title: 'Durée',
        field: 'length',
        choices: [{
          label: 'Courte',
          value: 1
        }, {
          label: 'Moyen',
          value: 2
        }, {
          label: 'Longue',
          value: 3
        }]
      }, {
        title: 'Lieux',
        field: 'location',
        choices: [{
          label: 'Corse',
          value: 'Corse'
        }, {
          label: 'Haute-Savoie',
          value: 'Haute-Savoie'
        }, {
          label: 'Meurthe-et-Moselle',
          value: 'Meurthe-et-Moselle'
        }, {
          label: 'Pyrénnées',
          value: 'Pyrénnées'
        }]
      }]
    }
  },
  methods: {
    emitChoice (payload) {
      this.$emit('choice', payload)
    }
  }
}
</script>

<style lang="scss">
.modale-filter{
  background-color: #fff;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  text-align: left;
  margin-top: 30px;
  .btn-primary{
    padding: 14px 20px;
  }
}
</style>
