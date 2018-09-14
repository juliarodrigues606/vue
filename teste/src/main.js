// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import theme from 'muse-ui/lib/theme'
import * as colors from 'muse-ui/lib/theme/colors'

theme.add('teal', {
  primary: colors.teal,
  secondary: colors.teal50,
  success: '#4caf50',
  warning: '#ffeb3b'
}, 'light')

theme.use('teal')
Vue.use(MuseUI)
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
