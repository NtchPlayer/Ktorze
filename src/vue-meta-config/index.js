import {
  createMetaManager,
  defaultConfig,
} from 'vue-meta';
import { plugin as vueMetaPlugin } from 'vue-meta'

const metaManager = createMetaManager(false, {
  ...defaultConfig,
  meta: {
    tag: 'meta', nameless: true
  }
})

export {
  metaManager,
  vueMetaPlugin
}
