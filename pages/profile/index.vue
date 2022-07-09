<template>
  <main>
    <ProfilAccount :data="account" />
    <div class="profile-links">
      <ProfilLink
        v-for="(link, i) of links"
        :key="i"
        :data="link"
      />
    </div>
  </main>
</template>

<script>
import ProfilAccount from '@/components/profile/ProfilAccount.vue'
import ProfilLink from '@/components/profile/ProfilLink.vue'

export default {
  name: 'Profile',
  layout: 'app',
  // middleware: 'auth'
  components: {
    ProfilAccount,
    ProfilLink
  },
  data () {
    return {
      account: {
        src: 'test.png',
        fullname: 'John Doe',
        location: 'Paris, France'
      },
      links: [
        {
          baseUrl: 'profile',
          src: 'coordonnee.svg',
          text: 'Mes coordonnées',
          redirect: 'coordonnee'
        },
        {
          baseUrl: 'profile',
          src: 'parameters.svg',
          text: 'Paramètres',
          redirect: 'parameters'
        },
        {
          baseUrl: 'profile',
          src: 'stats.svg',
          text: 'Mes statistiques',
          redirect: 'stats'
        },
        {
          baseUrl: 'profile',
          src: 'history.svg',
          text: 'Historique',
          redirect: 'history'
        },
        {
          baseUrl: 'profile',
          src: 'heart-empty.svg',
          text: 'Favoris',
          redirect: 'favoris'
        }
      ]
    }
  }
}
</script>
