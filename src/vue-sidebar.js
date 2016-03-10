import sidebar from './v-sidebar.vue'
import items   from './v-sidebar-items.vue'
import item    from './v-sidebar-item.vue'
import svg     from 'vue-svg-directive'

export default {
  install (Vue, opts) {
    Vue.use(svg, {
      sprites : opts.sprites,
      prefix  : opts.prefix,
      class   : opts.class
    })

    Vue.component('v-sidebar', sidebar)
    Vue.component('v-sidebar-items', items)
    Vue.component('v-sidebar-item', item)
  }
}
