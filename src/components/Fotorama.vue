<template>
  <section class="fotorama">
    <figure>
      <img alt="Vue logo" src="@/assets/coverfotorama.png">
    </figure>
    <div class="fotorama-content">
      <h1>La rando c’est le pied !</h1>
      <p><span>Rejoignez la plateforme qui regroupe les endroits les  </span><span>plus spectaculaires du patrimoine naturel français.</span></p>
      <router-link class="btn-primary" :to="{name: 'home'}">Commencez l'aventure !</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Fotorama'
}
</script>

<style lang="scss">
 .fotorama{
  height: calc(100vh - 92px) ;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 0;
  &-content{
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    text-align: left;
    padding: 10% 10%;
  }
  h1{
    display: flex;
    flex-direction: column;
    font-size: 3.3125rem;
    font-weight: 600;
    color:var(--orange-color);
    margin-bottom: 30px;
    &~p{
      text-align: left;
      color:var(--pale-color);
      display: flex;
      flex-direction: column;
      margin-bottom: 25px;
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
  }
  figure{
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    z-index: -1;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .btn-primary-fotorama{
    position: absolute;
    top: 20px;
    right: 20px;
  }
 }

 @media (min-width: 0px) and (max-width: 768px) {
  .fotorama{
    height: 100vh;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
    h1{
      position: unset;
      display: flex;
      flex-direction: column;
      width: 220px;
      line-height: 35px;
      margin-bottom: 15px;
      span{
        font-size: 1.375rem;
        &~span {
          text-align: right;
          font-size: 1.875rem;
        }
      }
      &~p{
        position: unset;
        display: block;
        width: 220px;
        text-align: right;
        font-size: 0.8125rem;
        margin-bottom: 25px;
        line-height: 1rem;
      }
    }
      .btn-primary-fotorama-center{
        position: unset;
        transform: translate(0);
      }
  }
 }
</style>
