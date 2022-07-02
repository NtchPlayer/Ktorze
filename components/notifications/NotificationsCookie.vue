<template>
  <div v-if="active" class="container-notifications">
    <div class="max-width container-cookie">
      <p>Acceptez-vous les cookies google tags managers ?</p>
      <div class="container-cookie-button flex">
        <button
          type="button"
          class="btn-primary"
          @click.prevent="gtmGestion(true)"
        >
          Oui
        </button>
        <button
          type="button"
          class="btn-secondary"
          @click.prevent="gtmGestion(false)"
        >
          Non
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationsCookie',
  data () {
    return {
      active: false
    }
  },
  methods: {
    gtmGestion (val) {
      localStorage.setItem('gtmState', val)
      this.active = false
      this.$gtm.enable(val)
    }
  },
  mounted () {
    const gtmState = localStorage.getItem('gtmState')
    if (gtmState === null) {
      this.active = true
    }
  }
}
</script>

<style lang="scss">
.container-notifications{
  position: fixed;
  z-index: 5;
  bottom: 0;
  width: 100%;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 0 11px rgba(0, 0, 0, 0.3);
  padding: 15px 0;
}

.container-cookie{
  display: flex;
  border-radius: var(--border-radius);
  p {
    align-self: center;
  }
  &-button{
    margin-left: 30px;
  }
  button{
    margin: 0 5px;
  }
}

@media screen and (max-width: 600px) {
  .container-cookie{
    text-align: center;
    display: block;
    &-button{
      margin-top: 20px;
      margin-left: 0;
      button{
        width: 100%;
      }
    }
  }
}
</style>
