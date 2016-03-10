import Vue          from 'vue'
import VueSidebar   from '../src/vue-sidebar.js'
import App          from './app.vue'

Vue.config.debug = true;

Vue.use(VueSidebar, {
  sprites : './sprites.svg',
  prefix  : 'icon-',
  class   : 'icon'
})

new Vue({
  el: 'body',
  components: { App }
})
