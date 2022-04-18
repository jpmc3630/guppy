
import { boot } from 'quasar/wrappers'
import Plugin from '@quasar/quasar-ui-qcalendar/src/index.js'
import '@quasar/quasar-ui-qcalendar/src/index.sass'

export default boot(({ app }) => {
  app.use(Plugin)
})