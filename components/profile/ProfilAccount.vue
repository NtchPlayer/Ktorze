<template>
  <div class="profile-user">
    <img class="profile-user--img" :alt="data.text" :src="require(`@/assets/${data.src}`)">
    <div class="profile-user-informations">
      <p class="profile-user--name">{{ data.fullname }}</p>
      <p class="profile-user--location">{{ data.location }}</p>
    </div>
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
  margin-bottom: 48px;
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
    font-weight: bold;
  }
}

@media screen and (min-width: 768px) {
  .profile-user{
    padding: 25px;
    border: 1px solid var(--green-color);
    display: flex;
    align-items: center;
    &-informations{
      margin-left: 24px;
    }
    &--img{
      margin: 0;
    }
  }
}
</style>
