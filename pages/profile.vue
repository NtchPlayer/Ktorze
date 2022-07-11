<template>
  <main class="container-profile">
    <section class="profile-navbar" :class="{ isSubRoad }">
      <ProfilAccount :data="account" />
      <nav class="profile-links">
        <ProfilLink
          v-for="(link, i) of links"
          :key="i"
          :data="link"
        />
        <button type="button" class="profile-links-link">
          <span class="profile-links-link-left">
            <figure>
              <img class="profile-links-link--icon" alt="Déconnexion" :src="require(`@/assets/icons/out.svg`)">
            </figure>
            <p>Déconnexion</p>
          </span>
        </button>
      </nav>
    </section>
    <NuxtChild class="profile-router-view" :class="{ isSubRoad }" />
  </main>
</template>

<script>
import ProfilAccount from '@/components/profile/ProfilAccount.vue'
import ProfilLink from '@/components/profile/ProfilLink.vue'

export default {
  name: 'Profile',
  components: {
    ProfilAccount,
    ProfilLink
  },
  layout: 'app',
  // middleware: 'auth'
  data () {
    return {
      account: {
        src: 'test.png',
        fullname: `${this.$auth.user.firstname} ${this.$auth.user.lastname}`,
        location: 'Paris, France'
      },
      links: [{
        baseUrl: 'profile',
        src: 'coordonnee.svg',
        text: 'Mes coordonnées',
        redirect: 'coordonnee'
      }]
    }
  },
  computed: {
    isSubRoad () {
      return this.$route.name.split('-').length > 1
    }
  }
}
</script>

<style>
.profile-router-view{
  width: 100%;
}

.profile-router-view{
  display: none;
}

.profile-router-view.isSubRoad{
  display: block;
}

.profile-navbar.isSubRoad{
  display: none;
}

.profile-router-view-header-title{
  font-size: 1.5rem;
}

.profile-router-view-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (min-width: 768px) {
  .container-profile{
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(auto, 340px) auto;
  }

  .profile-navbar.isSubRoad{
    display: block;
  }

  .profile-router-view{
    display: block;
  }

  .profile-links{
    border: 1px solid var(--green-color);
  }
  .profile-router-view-header{
    border-bottom: 1px solid var(--green-color);
    padding: 15px 25px;
    font-size: 1.5rem;
  }

  .profile-router-view-content{
    padding: 10px 25px;
  }

  .profile-router-view{
    border: 1px solid var(--green-color);
  }
}
</style>
