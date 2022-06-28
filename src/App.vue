<template>
  <metainfo>
    <template
      v-slot:title="{ content }"
      v-slot:meta="{ content }"
      v-slot:og="{ content }"
      v-slot:twitter="{ content }"
      v-slot:link="{ content }"
    />
  </metainfo>
  <router-view />
  <NotificationsCookie />
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue'
import NotificationsCookie from '@/components/notifications/NotificationsCookie'

export default {
  name: 'App',
  components: {
    Footer,
    NotificationsCookie
  },
  methods: {
    getList() {
      this.axios.get(api).then((response) => {
        console.log(response.data)
      })
    }
  },
  metaInfo () {
    return {
      title: 'Balise 360, la solution de tous les randonneurs engagés',
      description: 'Balise 360, la solution qui permet à tous les randonneurs passionnés et engagés de préparer ses itinéraires de randonnées, de se repérer avec ses cartes numériques et son GPS intégré.',
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        {
          name: 'keywords',
          content: 'Randonnée, rando pédestre, itinéraires randonnées pédestres, site randonnée, circuit de randonnée, carte randonnée, GPS randonnée'
        }, {
          name: 'author',
          content: 'K-Torze DevTeam'
        }, {
          name: 'theme-color',
          content: '#658672'
        }, {
          name: 'mobile-web-app-capable"',
          content: 'yes'
        }, {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent'
        }, {
          name: 'apple-mobile-web-app-title',
          content: 'Balise360'
        }
      ],
      og: {
        title: 'Balise 360, la solution de tous les randonneurs engagés',
        description: 'Balise 360, la solution qui permet à tous les randonneurs passionnés et engagés de préparer ses itinéraires de randonnées, de se repérer avec ses cartes numériques et son GPS intégré.',
        url: process.env.VUE_APP_BASE_SITE,
        type: 'website',
        site_name: 'Balise360',
        local: 'fr_FR',
        image: `${process.env.VUE_APP_BASE_SITE}/open_graph.jpg`,
        'image:secure_url': '',
        'image:type': 'image/jpg',
        'image:width': '1200',
        'image:height': '630',
        'image:alt': 'Logo Balise 360'
      },
      twitter: {
        title: 'Balise 360, la solution de tous les randonneurs engagés',
        description: 'Balise 360, la solution qui permet à tous les randonneurs passionnés et engagés de préparer ses itinéraires de randonnées, de se repérer avec ses cartes numériques et son GPS intégré.',
        url: process.env.VUE_APP_BASE_SITE,
        site: '@balise360.fr',
        creator: '@Balise360 DevTeam',
        image: `${process.env.VUE_APP_BASE_SITE}/twitter_card.png`,
        card: 'summary_large_image'
      },
      link: [
        { rel: 'favicon', href: './favicon.ico' },
        { rel: 'icon', type: 'image/png', href: './icons/icon.png' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '152x152', href: './icons/touch-icon-ipad.png' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: './icons/touch-icon-iphone-retina.png' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '167x167', href: './icons/touch-icon-ipad-retina.png' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '512x512', href: './icons/apple-touch-icon.png' }
      ]
    }
  }
}
</script>

<style src="./style/reset.css"></style>
<style lang="scss" src="./style/main.scss"></style>
