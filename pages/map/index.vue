<template>
  <main>
    <h1>Map</h1>
    <div id="map-wrap" style="height: 572px">
      <client-only>
        <l-map :zoom="zoom" :center="center">
          <l-tile-layer :url="url" />
          <l-geo-json
            v-for="(data, i) of geoJsonDatas"
            :key="i"
            :geojson="data"
          />
        </l-map>
      </client-only>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Map',
  layout: 'app',
  async asyncData ({ $axios }) {
    const datas = []
    const test = await $axios.$get('https://umap.openstreetmap.fr/fr/datalayer/114912/')
    datas.push(test)
    const test2 = await $axios.$get('https://umap.openstreetmap.fr/fr/datalayer/114911/')
    datas.push(test2)
    return {
      geoJsonDatas: datas
    }
  },
  data () {
    return {
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      center: [49.1193089, 6.1757156],
      zoom: 10
    }
  }
}
</script>
