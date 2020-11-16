import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  const getGDPR = localStorage.getItem('GDPR:accepted')

  // if (process.env.NODE_ENV !== 'production') return

  Vue.use(
    VueGtag,
    {
      config: { id: 'G-ZTPLWGT7HF' },
      bootstrap: getGDPR === 'true',
      appName: 'APP_NAME',
      enabled: getGDPR === 'true',
      pageTrackerScreenviewEnabled: true,
    },
    app.router
  )
}
