const cookieparser = process.server ? require('cookieparser') : undefined
const Cookie = process.client ? require('js-cookie') : undefined

export const state = () => ({
  token: null,
  error: ''
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  },
  setError(state, error) {
    state.error = error
  },
  clearError(state) {
    state.error = ''
  }
}

export const actions = {
  async nuxtServerInit ({commit}, { app, req }) {
    let token = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      token = parsed.token
      commit('setToken', token)
    }
  },
  login({commit}) {
    commit('setToken', 'bgs_test_case')
    Cookie.set('token', 'bgs_test_case', { expires: 7 })
    commit('clearError')
  },
  logout({commit}) {
    commit('clearToken')
    Cookie.remove('token', { path: '/', domain: 'localhost'})
  },
  setError({commit}, payload) {
    commit('setError', payload)
  },
  clearError({commit}) {
    commit('clearError')
  }
}

export const getters = {
  hasToken: s => !!s.token,
  error: s => s.error
}
