<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>{{info}}</p>
    <vue-instagram token="IGQVJXalBCcnlVNC1Dc1hCYm1fMEVzTkVMcDNPTlRNTk1UdWo1OGIwSFVXcTdSdmRwZAWdaSkF3MFBKZAUFaTGVFeGhXWVhCUHlqX2hfQXVYOEh5ZA0JvRmZAZAcWhEMGhOLTRyZAmc1Q1NEYUVzNE9PaGU4QwZDZD" username="balise360" :count="3">
        <template slot="feeds" scope="props">
            <li class="instagram-media fancy-list"> {{ props.feed.link }} </li>
            <img :src=" props.feed.images.standard_resolution.url " alt="">
        </template>
        <template slot="error" scope="props">
            <div class="fancy-alert"> {{ props.error.error_message }} </div>
        </template>
    </vue-instagram>
  </div>
</template>

<script>
import axios from 'axios'
import VueInstagram from 'vue-instagram'

export default {
    name: 'Dashboard',
    components: {
        VueInstagram
    },
    data () {
        return{
            info: null
        }
    },
    mounted() {
        console.log('test')
        const headers = {
            authorisation: process.env.VUE_APP_API_KEY
        }
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json', { headers })
            .then((response) => {
                this.info = response.data
            })
    }
}
</script>

<style>

</style>