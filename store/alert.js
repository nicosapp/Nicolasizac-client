export const state = () => ({
  message: '',
  visible: false,
  type: null,
})

export const getters = {
  message(state) {
    return state.message
  },
  visible(state) {
    return state.visible
  },
  type(state) {
    return state.type
  },
}

export const mutations = {
  SET_VISIBLE(state, visible) {
    state.visible = visible
  },
  SHOW_ALERT(state, payload) {
    state.message = payload.message || ''
    state.type = payload.type || null
    state.visible = true
  },
}

export const actions = {
  setVisible({ commit }, visible) {
    commit('SET_VISIBLE', visible)
  },
  showAlert({ commit }, payload) {
    commit('SHOW_ALERT', payload)
  },
}
