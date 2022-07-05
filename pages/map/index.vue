<template>
  <main>
    <h1>Map</h1>
    <div id="map-wrap" style="height: 572px">
      <client-only>
        <l-map :zoom="zoom" :center="center">
          <l-tile-layer :url="url" />
          <l-marker
            v-for="marker of markers"
            :key="marker.id"
            :lat-lng="marker.coordinates"
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
  data () {
    return {
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      center: [49.1193089, 6.1757156],
      markers: [
        { id: 1, coordinates: [49.114910, 6.178810] },
        { id: 2, coordinates: [49.133290, 6.154370] },
        { id: 3, coordinates: [49.102160, 6.158850] },
        { id: 4, coordinates: [49.136010, 6.199630] },
        { id: 5, coordinates: [49.105563, 6.182234] }
      ]
    }
  }
}
</script>
