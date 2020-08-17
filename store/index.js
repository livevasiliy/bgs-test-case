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
  login({commit}) {
    commit('setToken', 'bgs_test_case')
    commit('clearError')
  },
  logout({commit}) {
    commit('clearToken')
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
