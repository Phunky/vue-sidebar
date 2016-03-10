<style lang="sass" scoped>
  * {
    box-sizing: border-box;
  }

  .app {
    position   : relative;
    display    : flex;
    flex-wrap  : wrap;
    width      : 100vw;
    height     : 100vh;
    margin     : 0 !important;
    background : #eee;
  }

  .sidebar {
    flex    : 0 0 64px;
    height  : calc(100vh - 64px);
  }

  .user-profile {
    flex        : 0 0 48px;
    padding     : 16px;
    line-height : 40px;
    font-weight : bolder;
    color       : rgba(0,0,0,.54);
    background : #eee;
  }

</style>

<template lang="jade">
  .app
    .sidebar
      v-sidebar(v-ref:sidebar)
        template(slot='mini')
          v-sidebar-items
            template(slot='items')
              v-sidebar-item(svg='menu', @click.stop='$broadcast("v-sidebar:show")')
              v-sidebar-item(svg='question_answer')
              v-sidebar-item(svg='speaker_notes')
              v-sidebar-item(svg='thumb_up')
              v-sidebar-item(svg='thumb_down')
        template(slot='persistence')
          .user-profile
            img(class="ui avatar image", src="http://semantic-ui.com/images/wireframe/square-image.png")
            span Username
          v-sidebar-items(header='Subheader')
            v-sidebar-item(svg='question_answer') Item
            v-sidebar-item(svg='speaker_notes') Item
            v-sidebar-item(svg='thumb_up') Item
            v-sidebar-item(svg='thumb_down') Item
          v-sidebar-items(header='Subheader')
            v-sidebar-item(svg='question_answer') Item
            v-sidebar-item(svg='speaker_notes') Item
            v-sidebar-item(svg='thumb_up') Item
            v-sidebar-item(svg='thumb_down') Item
          v-sidebar-items
            v-sidebar-item(svg='question_answer') Item
            v-sidebar-item(svg='speaker_notes') Item
            v-sidebar-item(svg='thumb_up') Item
            v-sidebar-item(svg='thumb_down') Item
</template>

<script>
  export default {
    data () {
      return {
      }
    },

    events: {
      'v-sidebar:show' () {
        console.log('v-sidebar:show')
      },

      'v-sidebar:hide' () {
        console.log('v-sidebar:hide')
      }
    },
  }
</script>

