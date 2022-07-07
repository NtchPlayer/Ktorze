<template>
  <nuxt-link class="profile-links-link" :to="{name: `${data.baseUrl}-${data.redirect}` }">
    <div class="profile-links-link-left">
      <figure>
        <img class="profile-links-link--icon" :alt="data.text" :src="require(`@/assets/icons/${data.src}`)">
      </figure>
      <p v-text="data.text" />
    </div>
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
    font-family: 'Apfel';
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    border: 2px solid var(--green-color);
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 8px;
    &-left{
      display: flex;
      align-items: center;
      img{
        margin-right: 10px;
        width: 25px;
        height: 25px;
      }
    }
    &--click{
      transform: rotate(180deg);
      height: 30px;
    }
  }
</style>
