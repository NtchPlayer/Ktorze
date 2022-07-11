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
  },
  head () {
    return {
      title: ' - Toutes les randonnées',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Vous pouvez accéder à notre liste de randonnées engagées qui correspondent à votre niveau. En choisissant la durée ainsi que le lieu'
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: 'Balise 360 - Toutes les randonnées'
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: 'Vous pouvez accéder à notre liste de randonnées engagées qui correspondent à votre niveau. En choisissant la durée ainsi que le lieu'
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Balise 360 - Toutes les randonnées'
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Vous pouvez accéder à notre liste de randonnées engagées qui correspondent à votre niveau. En choisissant la durée ainsi que le lieu'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.max-width{
  margin-bottom: 120px;
}
.container-card-travel{
  margin-top: 45px;
  article {
    margin-bottom: 24px;
  }
}
</style>
