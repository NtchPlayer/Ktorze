<template>
  <div class="section-bar">
    <p>
      <strong>Rejoindre l'aventure</strong>  dès aujourd'hui
    </p>
    <router-link class="btn-secondary" :to="{name: 'home'}">
      Commencer
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.section-bar{
  display: flex;
  gap: 75px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--green-color);
  padding: 80px;
  margin-bottom: 80px;
  p{
    color: var(--background-color);
    font-size: 2rem;
    line-height: 2.4rem;
  }
}
 @media (min-width: 0px) and (max-width: 768px) {
  .section-bar{
    flex-direction: column;
    p{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 2rem;
      line-height: 2.4rem;
      font-weight: 200;
      text-align: center;
      span{
        font-size: 3.125rem;
        font-weight: 500;
        line-height: 3.5rem;
      }
    }
    a{
      margin-top: 30px;
      font-size: 1.8rem;
      padding: 15px 50px;
    }
  }
 }
</style>
