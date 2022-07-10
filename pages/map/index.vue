<template>
  <main>
    <div id="my-app" ref="myMap" />
  </main>
</template>

<script>
import gmapsInit from '../../plugins/gmaps.client.js'

export default {
  name: 'Map',
  layout: 'app',
  data () {
    return {
      google: null,
      geocoder: null,
      map: null,
      infoWindow: null,
      kmlLayer: null
    }
  },
  async asyncData ({ $axios }) {
    const { data } = await $axios.get('/trails/87')
    return {
      geoJsonData: data.geojson
    }
  },
  async mounted () {
    // console.log(this.geoJsonData)
    // Define var
    this.google = await gmapsInit()
    this.geocoder = new this.google.maps.Geocoder()
    this.kmlLayer = new this.google.maps.KmlLayer()
    this.infoWindow = new this.google.maps.InfoWindow()

    // Create the map
    this.map = new this.google.maps.Map(this.$refs.myMap, {
      center: new this.google.maps.LatLng(-19.257753, 146.823688),
      zoom: 8,
      mapId: '634725ddae417643'
    })

    // const ctaLayer = new this.google.maps.KmlLayer(this.geoJsonData, {
    //   map: this.map
    // })

    // this.map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/google.json')
    this.map.data.addGeoJson(JSON.parse(this.geoJsonData))

    // const test = new this.google.maps.KmlLayer(this.geoJsonData, {
    //   suppressInfoWindows: true,
    //   preserveViewport: true
    // })
    // test.setMap
    // eslint-disable-next-line no-unused-vars
    // const src = 'http://localhost:3000/trails/kml/89'
    // eslint-disable-next-line no-unused-vars
    const src = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml'
    // eslint-disable-next-line no-unused-vars
    const kmlLayer = new this.google.maps.KmlLayer(src, {
      suppressInfoWindows: true,
      preserveViewport: false,
      map: this.map
    })
    this.geoLocalisation()
  },
  methods: {
    handleLocationError (browserHasGeolocation, infoWindow, pos) {
      this.infoWindow.setPosition(pos)
      this.infoWindow.setContent(
        browserHasGeolocation
          ? 'Error: The Geolocation service failed.'
          : "Error: Your browser doesn't support geolocation."
      )
      this.infoWindow.open(this.map)
    },
    geoLocalisation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }

            this.infoWindow.setPosition(pos)
            this.infoWindow.setContent('Location found.')
            this.infoWindow.open(this.map)
            return this.map.setCenter(pos)
          },
          () => {
            this.handleLocationError(true, this.infoWindow, this.map.getCenter())
          }
        )
      } else {
        // Browser doesn't support Geolocation
        this.handleLocationError(false, this.infoWindow, this.map.getCenter())
      }
    }
    // loadGpxFile () {
    //   const points = []
    //   const bounds = new this.google.maps.LatLngBounds()
    //   $(xml).find("trkpt").each(function() {
    //     var lat = $(this).attr("lat");
    //     var lon = $(this).attr("lon");
    //     var p = new google.maps.LatLng(lat, lon);
    //     points.push(p);
    //     bounds.extend(p);
    //   });
    //
    //   var poly = new google.maps.Polyline({
    //     // use your own style here
    //     path: points,
    //     strokeColor: "#FF00AA",
    //     strokeOpacity: .7,
    //     strokeWeight: 4
    //   });
    //
    //   poly.setMap(map);
    //
    //   // fit bounds to track
    //   map.fitBounds(bounds);
    // }
  }
}
</script>

<style>
#my-app {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
