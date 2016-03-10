<style lang="sass" scoped>
  .v-sidebar {
  }

  .mini {
    min-width   : 64px;
    align-items : center;
  }

  .persistent {
    position   : fixed;
    top        : 0;
    left       : 0;
    bottom     : 0;
    width      : 20vw;
    min-width  : 300px;
    max-width  : 70vw;
    background : #fff;
    overflow   : scroll;
    z-index    : 10;

    &.v-transition {
      transition : all .2s ease-in-out .1s;
      transform  : translate(0, 0);
    }

    &.v-enter,
    &.v-leave {
      transform : translate(-100%, 0);
    }
  }

  .overlay {
    position   : absolute;
    top        : 0;
    left       : 0;
    bottom     : 0;
    width      : 100vw;
    background : rgba(0,0,0,.54);
    z-index    : 1;

    &.v-transition {
      transition : all .2s ease-in-out;
      opacity    : 1;
    }

    &.v-enter,
    &.v-leave {
      opacity    : 0;
    }
  }

</style>

<template lang="jade">
  .v-sidebar(@click='hide')
    .mini
      slot(name='mini')
    .persistent(v-if='visible' transition='')
      slot(name='persistence')
    .overlay(v-if='visible' transition='')
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'v-sidebar',

    props: {
      visible: {
        type    : Boolean,
        default : false
      }
    },

    methods: {
      show () {
        this.visible = true
        this.$root.$broadcast('v-sidebar:show')
      },

      hide () {
        this.visible = false
        this.$root.$broadcast('v-sidebar:hide')
      },

      toggle () {
        this.visible ? this.hide() : this.show()
      },
    },

    events: {
      'v-sidebar:show' () {
        this.show()
      },

      'v-sidebar:hide' () {
        this.hide()
      },

      'v-sidebar:toggle' () {
        this.toggle()
      }
    }

  }
</script>
