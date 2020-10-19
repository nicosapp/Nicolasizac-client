export default ({ app, store }, inject) => {
  inject('alert', {
    show(payload) {
      store.dispatch('alert/showAlert', payload)
    },
    error(payload) {
      const config = { type: 'error' }
      payload = { ...payload, ...config }
      store.dispatch('alert/showAlert', payload)
    },
    success(payload) {
      const config = { type: 'success' }
      payload = { ...payload, ...config }
      store.dispatch('alert/showAlert', payload)
    },
    warn(payload) {
      const config = { type: 'warning' }
      payload = { ...payload, ...config }
      store.dispatch('alert/showAlert', payload)
    },
    info(payload) {
      const config = { type: 'info' }
      payload = { ...payload, ...config }
      store.dispatch('alert/showAlert', payload)
    },
  })
}
