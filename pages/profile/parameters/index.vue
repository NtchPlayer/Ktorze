<template>
  <div>
    <div class="profile-nav">
      <button>
        <img src="@/assets/icons/arrow-left.svg" alt="Retour arrière" @click.prevent="back">
      </button>
      <h1 class="profile-title">
        Paramètres
      </h1>
      <div>'Filter'</div>
    </div>
    <main class="profile">
      <div class="profile-links">
        <ProfilLink
          v-for="(link, i) of links"
          :key="i"
          :data="link"
        />
      </div>
    </main>
  </div>
</template>

<script>
import ProfilLink from '@/components/profile/ProfilLink.vue'

export default {
  name: 'Profile',
  components: {
    ProfilLink
  },
  layout: 'app',
  data () {
    return {
      links: [
        {
          baseUrl: 'profile-parameters',
          src: 'person.svg',
          text: 'Compte',
          redirect: 'account'
        },
        {
          baseUrl: 'profile-parameters',
          src: 'bell.svg',
          text: 'Notifications',
          redirect: 'notification'
        },
        {
          baseUrl: 'profile-parameters',
          src: 'smiley.svg',
          text: 'Accessibilité',
          redirect: 'accessibility'
        },
        {
          baseUrl: 'profile-parameters',
          src: 'lock.svg',
          text: 'Sécurité',
          redirect: 'security'
        },
        {
          baseUrl: 'profile-parameters',
          src: 'chat.svg',
          text: 'Centre d\'aide',
          redirect: 'help-center'
        },
        {
          baseUrl: 'profile-parameters',
          src: 'out.svg',
          text: 'Me déconnecter',
          redirect: ''
        }
      ]
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
