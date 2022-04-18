
import { boot } from 'quasar/wrappers'
import mitt from 'mitt'

export default boot(({ app }) => {
  app.use({
    install: function (Vue, options) {
      const eventBus = mitt()
      app.config.globalProperties.$eventBus = eventBus
    }
  })
})