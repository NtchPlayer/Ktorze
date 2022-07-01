<template>
  <section class="citation desktop">
    <div class="citation-content">
      <!-- <img class="citation-content-deco--first" alt="deco citation" src="@/assets/DecoCitation.svg"> -->
      <p>Tous les héros ne portent pas de cape…</p>
      <p>mais certains portent des chaussures de randonnée !</p>
      <!-- <img class="citation-content-deco--second" alt="deco citation" src="@/assets/DecoCitation2.png"> -->
    </div>

  </section>
</template>

<script>
export default {
    name: 'Citation'
}
</script>

<style lang="scss">
    .citation{
        width: 100%;
        &-content{
            width: max-content;
            display: block;
            margin: auto;
            position: relative;
            margin-bottom: 130px;
            text-align: center;
            p{
                color: var(--orange-color);
                font-size: 1.5rem;
                font-weight: 600;
            }
            &-deco{
                &--first{
                    position: absolute;
                    top: -50px;
                    left: -45px;
                }
                &--second{
                    position: absolute;
                    bottom: -30px;
                    right: -55px;
                }
            }
        }
    }
</style>
