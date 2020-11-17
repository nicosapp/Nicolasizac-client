import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  const getGDPR = localStorage.getItem('GDPR:accepted')

  // process.env.NODE_ENV !== 'production'
  if (app.context.isDev) return

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
