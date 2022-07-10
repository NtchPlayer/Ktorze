<template>
  <div class="profile-user">
    <img class="profile-user--img" :alt="data.text" :src="require(`@/assets/${data.src}`)">
    <p class="profile-user--name">{{ data.fullname }}</p>
    <p class="profile-user--location">{{ data.location }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProfilAccount',
  props: {
    data: { type: Object, required: true }
  }
}
</script>

<style lang="scss">
  .profile-user{
    &--img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 15px;
    }
    &--name{
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 23px;
      margin-bottom: 10px;
    }
    &--location{
      font-size: 1rem;
      color: var(--green-color-60);
      line-height: 19px;
      margin-bottom: 25px;
      font-weight: bold;
    }
  }
</style>
