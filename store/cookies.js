export const state = () => ({
  visible: false,
})

export const getters = {
  visible(state) {
    return state.visible
  },
}

export const mutations = {
  SET_VISIBLE(state, value) {
    state.visible = value
  },
}

export const actions = {
  setVisible({ commit }, value) {
    commit('SET_VISIBLE', value)
  },
}
