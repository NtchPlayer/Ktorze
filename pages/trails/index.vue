<template>
  <main>
    <div class="profile-router-view-header profile-router-view-header-favoris">
      <h1 class="profile-router-view-header-title">
        <strong>
          Nos 12 randonnées <span class="color-orange">engagées</span>
        </strong>
      </h1>
    </div>
    <section class="container-card-travel">
      <CardTravel
        v-for="trail of data"
        :key="trail.id"
        :data="trail"
        :large-card="true"
      />
    </section>
  </main>
</template>

<script>
import CardTravel from '@/components/card/CardTravel'
export default {
  name: 'Trails',
  components: { CardTravel },
  layout: 'app',
  async asyncData ({ $axios }) {
    const { data } = await $axios.get('/trails').catch((e) => {
      throw e
    })
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
.container-card-travel{
  margin-top: 45px;
  article {
    margin-bottom: 24px;
  }
}

@media screen and (min-width: 769px) {
  display: flex;
}
</style>
