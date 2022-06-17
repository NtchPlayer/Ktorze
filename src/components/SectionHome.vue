<template>
<section class="section-home">
  <h2>Lorem ipsum</h2>
  <div class="card">
    <article><img src="" alt=""></article>
    <article><img src="" alt=""></article>
    <article><img src="" alt=""></article>
  </div>
</section>

</template>

<script>
export default {
    name: 'SectionHome'
}
</script>

<style lang="scss">
    .section-home{
        h2{
            margin: 70px 0 40px 0;
        }
        .card{
            display: flex;
            justify-content: center;
            gap: 50px;
            article{
                img{
                    height: 450px;
                    width: 340px;
    
                }
            }
        }
        &~&{
            margin-bottom: 80px;
        }
    }
</style>