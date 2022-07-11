<template>
  <div>
    <div>
      <div class="card-travel-top">
        <div class="card-travel-top--left">
          <h1 class="card-travel-content--name desktop main-title" v-text="data.name" />
          <p class="card-travel-header--level desktop" v-text="data.difficulty.level" />
        </div>
        <nuxt-link v-if="$auth.loggedIn" :to="{name: 'survey-slug', params: { slug: data.id }}" class="card-travel-header--level desktop">
          Répondre au questionnaire
        </nuxt-link>
      </div>
    </div>
    <div class="card-travel">
      <div class="card-travel-content">
        <p class="card-travel-content--name mobile" v-text="data.name" />
        <div class="card-travel-content-main">
          <div class="card-travel-content-main-bottom">
            <div class="card-travel-content-main-bottom--left">
              <h2 class="card-travel-content--location" v-text="data.location" />
              <p v-if="data.checked !== ''" class="card-travel-content--checked">
                Sentier vérifié le : {{ data.checked }}
              </p>
              <p v-else class="card-travel-content--checked">
                Sentier non vérifié
              </p>
            </div>
          </div>
          <div class="card-travel-content-main-description" v-html="data.content"></div>
          <figure class="card-travel-content-main-map">
            <div id="my-app" ref="myMap" />
          </figure>
          <h2 class="card-travel-content-main-title">Caractéristiques</h2>
          <div class="card-travel-content-main-stats">
            <div class="card-travel-content-main-stats-wrapper">
              <div class="card-travel-content-main-stats-wrapper--infos">
                <p>Distance</p>
                <p v-text="`${data.length}Km`" />
              </div>
              <div class="card-travel-content-main-stats--infos">
                <p>Dénivelé</p>
                <p v-text="data.elevation" />
              </div>
              <div class="card-travel-content-main-stats--infos">
                <p>Durée</p>
                <p v-text="`${Math.round(data.length/4.8)} h`" />
              </div>
              <div class="card-travel-content-main-stats--infos">
                <p>Niveau</p>
                <p v-text="data.difficulty.id" />
              </div>
            </div>
            <ul class="card-travel-content-main-stats-description">
              <li>{{ data.difficulty.durationMin }} à {{ data.difficulty.durationMax }} heures de marche par jour environ</li>
              <li>Dénivelé positif de {{ data.difficulty.elevationMin }} à {{ data.difficulty.elevationMax }} mètres</li>
              <li>Altitude comprise {{ data.difficulty.altitudeMin }} entre {{ data.difficulty.altitudeMax }} mètre</li>
              <li v-text="data.difficulty.physique" />
            </ul>
          </div>

          <div class="card-travel-content-main-traffic">
            <h2 class="card-travel-content-main-title">Fréquentation</h2>
            <p class="card-travel-content-main-traffic--checked">
              Bientôt disponible
            </p>
          </div>

          <div class="card-travel-content-main-gears">
            <h2 class="card-travel-content-main-title">Équipement</h2>
            <div class="card-travel-content-main-gears-slider">
              <div
                v-for="(gear, i) of data.gears"
                :key="i"
              >
                <figure>
                  <img src="@/assets/fotorama/coverfotorama.png" alt="">
                </figure>
                {{ gear.name }}
              </div>
            </div>
            <p class="card-travel-content-main-gears-description" v-text="data.gearCategoryDescription" />
          </div>

        </div>

      </div>
      <div class="card-travel-header mobile">
        <CardTravelSlider :data-slider="data.images" :folder="data.name" />
        <p class="card-travel-header--level mobile" v-text="data.difficulty.level" />
      </div>
      <div>
        <div :data-slider="data.img" v-for="(image, i) of data.images" :key="i" class="card-travel-header slide desktop">
          <figure>
            <img :src="require(`@/assets/trails/${data.name}/${image.file}`)" :alt="image.alt">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardTravelSlider from '@/components/card/CardTravelSlider.vue'
import gmapsInit from '@/plugins/gmaps.client'

export default {
  name: 'CardTravelDetail',
  components: {
    CardTravelSlider
  },
  props: {
    data: { type: Object, required: true }
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
      center: {
        lat: 46.52863469527167,
        lng: 2.43896484375
      },
      zoom: 5,
      mapId: '634725ddae417643'
    })

    // this.map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/google.json')
    this.map.data.addGeoJson(JSON.parse(this.data.geojson))
  }
}
</script>

<style lang="scss" scoped>
  .trail-card{
    margin-bottom: 80px;
    padding-top: 150px;
    position: relative;
    &-nav{
      display: flex;
      height: 105px;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 30px;
    }
    &-title{
      font-size: 1.5rem;
      font-weight: bold;
    }
    .card-travel{
      max-width: 600px;
      display: flex;
      flex-direction: column;
      &-header{
        position: relative;
        z-index: 1;
        &--level{
          max-width: max-content;
          position: absolute;
          bottom: 24px;
          left: 12px;
          z-index: 5;
          padding: 14px 27px;
          border-radius: 20px;
          background: var(--green-color);
          color: var(--white-color);
        }
      }
      &-content{
        padding: 20px;
        font-family: 'Apfel', sans-serif;
        color: var(--black-color-80);
        z-index: 2;
        order: 2;
        background: none;
        margin-top: 0;
        &--name{
          font-size: 1.5rem;
          font-weight: bold;
          line-height: 25px;
          margin-bottom: 5px;
          font-family: 'Gotham', sans-serif;;
          color: var(--green-color);
        }
        &--location{
          font-size: 1rem;
          line-height: 22px;
          font-weight: bold;
        }
        &--checked{
          font-size: 0.75rem;
          line-height: 22px;
          &::before{
            content: '•';
            margin: 0 5px;
          }
        }
        &-second{
          &-title{
            font-family: 'Gotham', sans-serif;;
            font-weight: bold;
            margin: 25px 0 20px 0;
          }
        }
        &-main{
          &-bottom{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            img{
              width: 40px;
            }
            div{
              display: flex;
              align-items: center;
            }
          }
          &-map{
            width: 100%;
            height: 235px;
            margin: 30px 0 30px 0;
            & img{
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 15px;
            }
          }
          &-title{
            font-size: 1.5rem;
            font-weight: bold;
            line-height: 25px;
            margin-bottom: 25px;
            font-family: 'Gotham', sans-serif;
            color: var(--green-color);
            border-top: 1px solid var(--green-color-30);
            padding-top: 20px;
            margin-top: 25px;
          }
          &-stats{
            &-wrapper{
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              gap: 25px;
              margin-bottom: 15px;
              p{
                color: var(--green-color);
                &:last-child{
                  color: var(--cyan-color);
                  font-weight: bold;
                  font-size: 1.125rem;
                }
              }
            }
            &-description{
              margin-bottom: 15px;
              list-style-type: disc;
              margin-left: 13px;
              li {
                margin: 10px 0;
              }
            }
          }
          &-traffic{
            &--checked{
              min-height: 100px;
              min-height: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--black-color-30);
              font-size: 1.125rem;
              font-weight: bold;
            }
          }
          &-gears{
            &-slider{
              display: flex;
              justify-content: space-between;
              text-align: center;
              figure{
                height: 70px;
                width: 70px;
                margin-bottom: 5px;
                img{
                  height: 100%;
                  width: 100%;
                  object-fit: cover;
                  border-radius: 50%;
                }
              }
            }
            &-description{
              margin: 15px 0 15px 0;
              border-bottom: 1px solid var(--green-color-30);
              padding-bottom: 15px;
            }
          }
        }
      }
      .swiper{
        .slide{
          img{
            width: 100%;
            height: 300px;
            object-fit: cover;
          }
        }
      }
      .swiper-pagination{
        bottom: 24px;
        &-bullet{
          width: 12px;
          height: 12px;
          margin: 0 8px !important;
          background: var(--white-color);
          opacity: 1;
          &-active{
            background: var(--green-color);
          }
        }
      }
    }
    .btn-back{
      position: absolute;
      top: 35px;
      left: 30px;
      color: var(--white-color);
      z-index: 5;
    }
  }

  @media screen and (min-width: 769px) {
    .trail-card{
      .card-travel{
        max-width: unset;
        flex-direction: row;
          &-top{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          h1{
            text-align: left;
            font-size: 3.375rem;
            color: var(--black-color);
            line-height: 3rem;
          }
          &--left{
            display: flex;
            align-items: center;
          }
        }
        &-header{
          &.desktop{
            figure{
              max-width: 560px;
              max-height: 370px;
              margin-bottom: 25px;
              img{
                width: 100%;
                max-height: 370px;
                object-fit: cover;
              }
            }
          }
          &--level{
              &.desktop{
              position: unset;
              background: var(--brown-color);
              white-space: nowrap;
              margin-left: 15px;
              font-size: 0.75rem;
              height: max-content;
            }
          }
        }
        &-content{
          padding: 0 0 0 50px;
          width: 60%;
          &-main{
            display: flex;
            flex-direction: column;
            &-map{
              order: 1;
              margin: 0 0 30px 0;
              img{
                border-radius: 0;
              }
            }
            &-bottom{
              order: 2;
              margin-bottom: 10px;
            }
            &-description{
              order: 3;
              margin-bottom: 10px;
            }
            &-title{
              order: 4;
            }
            &-stats{
              order: 5;
            }
            &-traffic{
              order: 6;
            }
            &-gears{
              order: 7;
              &-description{
                border: none;
              }
            }
          }
        }
      }
    }
  }
  #my-app{
    height: 100%;
  }
</style>
