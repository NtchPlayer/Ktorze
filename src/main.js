import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { gtmInstance } from './gtm-config'
import { metaManager, vueMetaPlugin } from './vue-meta-config'

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(router)
app.use(metaManager)
app.use(vueMetaPlugin)
app.use(gtmInstance)
app.use(VueAxios, axios)

router.isReady().then(() => app.mount('#app'))
