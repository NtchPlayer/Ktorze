<template>
  <nuxt-link class="profile-links-link" :to="{name: `${data.baseUrl}-${data.redirect}` }">
    <span class="profile-links-link-left">
      <figure>
        <img class="profile-links-link--icon" :alt="data.text" :src="require(`@/assets/icons/${data.src}`)">
      </figure>
      <p v-text="data.text" />
    </span>
    <figure>
      <img class="profile-links-link--click" src="@/assets/icons/arrow-left.svg" alt="arrow click">
    </figure>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProfilLink',
  props: {
    data: { type: Object, required: true }
  }
}
</script>

<style lang="scss">
  .profile-links-link{
    font-family: 'Apfel', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 0 20px;
    margin: 16px 0;
    &.nuxt-link-exact-active{
      background-color: var(--green-color);
      p {
        color: #fff;
      }
      img{
        filter: brightness(20)
      }
    }
    &-left{
      display: flex;
      align-items: center;
      p{
        color: var(--black-color-60);
      }
      img{
        margin-right: 20px;
        width: 23px;
        height: 23px;
      }
    }
    &--click{
      transform: rotate(180deg);
      height: 15px;
    }
  }
</style>
