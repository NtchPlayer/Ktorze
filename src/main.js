import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ApiService from './common/api.service'
import { gtmInstance } from './gtm-config'
import { createHead } from '@vueuse/head'
// import { metaManager, vueMetaPlugin } from './vue-meta-config'

export const app = createApp(App)

app.use(router)
// app.use(metaManager)
// app.use(vueMetaPlugin)
app.use(createHead())
app.use(gtmInstance)

router.isReady().then(() => {
  app.mount('#app')
})

ApiService.init()
