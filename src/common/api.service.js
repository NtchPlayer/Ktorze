import { app } from '@/main.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

const ApiService = {
  init () {
    app.use(VueAxios, axios)
    app.provide('axios', app.config.globalProperties.axios)
    app.axios.defaults.baseURL = process.env.VUE_APP_API_URL
    // app.axios.interceptors.request.use((config) => {
    //   if (store.state.auth.isAuthenticated) {
    //     config.headers.common.Authorization = `Bearer ${store.state.auth.session.accessToken.jwtToken}`
    //   }
    //   return config
    // })
  },

  query (resource, params) {
    return app.axios.get(resource, params).catch(error => {
      if (Boolean(process.env.IS_DEV)) {
        throw new Error(`[RWV] ApiService ${error}`)
      }
    })
  },

  get (resource, slug = undefined) {
    return app.axios.get(`${resource}/${slug}`, {}).catch(error => {
      if (Boolean(process.env.IS_DEV)) {
        throw new Error(`[RWV] ApiService ${error}`)
      }
    })
  },

  post (resource, payload) {
    return app.axios.post(`${resource}`, payload).catch(error => {
      if (Boolean(process.env.IS_DEV)) {
        throw new Error(`[RWV] ApiService ${error}`)
      }
    })
  },

  update (resource, payload, element = 'element') {
    return app.axios.put(`${resource}`, payload)
      .catch(error => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },

  put (resource, params) {
    return app.axios.put(`${resource}`, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },

  delete (resource, slug) {
    return app.axios.delete(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  }
}

export default ApiService

export const VersionsService = {
  query (params) {
    return ApiService.query('versions', { params })
  },
  get (slug, lang) {
    return ApiService.get('versions', slug, lang)
  },
  create (payload) {
    return ApiService.post('versions', payload)
  },
  update (payload) {
    return ApiService.update('versions', payload)
  },
  order (newOrder) {
    return ApiService.put('versions/order', newOrder)
  },
  destroyVersion (payload) {
    return ApiService.destroyQuery(`versions/${payload.slug}`, payload.lang)
  },
  destroyRoom (slug) {
    return ApiService.delete('versions/room', slug)
  },
  numbers () {
    return ApiService.query('versions/numbers')
  }
}

export const NewsletterService = {
  createContact (payload) {
    return ApiService.post('/newsletter/add', payload)
  }
}

export const UsersService = {
  query (params) {
    return ApiService.query('users', { params })
  },
  addGrade (payload) {
    return ApiService.post('users', payload)
  },
  removeGrade (payload) {
    return ApiService.put('users', payload)
  },
  destroy (username) {
    return ApiService.delete('users', username)
  },
  numbers () {
    return ApiService.query('users/numbers')
  },
  grade (params) {
    return ApiService.query('users/role', { params })
  }
}
