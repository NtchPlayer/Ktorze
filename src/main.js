import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { gtmInstance } from './gtm-config'

const app = createApp(App)

app.use(router)
app.use(gtmInstance)

router.isReady().then(() => app.mount('#app'))
