<template>
  <div class="modal-container" @click.self="__close_modal">
    <div class="modal">
      <div class="modal-header">
        <p>
          <span class="fas fa-cog" aria-hidden="true" />
          Paramètre
        </p>
        <button type="button" @click.prevent="__close_modal">
          <span aria-label="Button de fermeture" class="fas fa-times" />
        </button>
      </div>
      <form class="modal-body">
        <p class="modal-body-title">Gestion des cookies</p>
        <div class="modal-body-controller">
          <label for="cookie-ga">Cookie Google Analytics</label>
          <input id="cookie-ga" name="cookie-ga" type="checkbox" v-model="cookieGa">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalParams',
  data () {
    return {
      cookieGa: true
    }
  },
  methods: {
    __close_modal () {
      this.$emit('close-modal')
    }
  },
  mounted () {
    const gtmState = localStorage.getItem('gtmState')
    this.cookieGa = gtmState
  },
  watch: {
    cookieGa (val) {
      this.$gtm.enable(val)
    }
  }
}
</script>
