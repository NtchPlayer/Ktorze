<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>{{info}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Dashboard',
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