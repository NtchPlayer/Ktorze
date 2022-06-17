<template>
  <div class="sectionBottom">
    <figure>  
      <img src="@/assets/jacob.png" alt="">
    </figure>

    <h2>Section Bottom</h2>
    <router-link :to="{name: 'home'}">CTA</router-link>
  </div>
</template>

<script>
export default {
    name: 'SectionBottom'
}
</script>

<style lang="scss">

.sectionBottom{
    height: 400px;
    position:relative;
    overflow: hidden;
    display: flex;
    flex-direction:column;
    justify-content: center;
    img{
        position:absolute;
        min-height: 600px;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index:-1;
    }
}

</style>