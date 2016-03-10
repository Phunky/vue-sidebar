<style lang="sass" scoped>
  .v-sidebar-item {
    display        : flex;
    flex           : 0 0 48px;
    flex-direction : row;
    align-items    : center;
    padding        : 8px 16px;
    color          : rgba(0,0,0,.84);
    transition     : all .2s ease-in-out;

    &:hover {
      cursor     : pointer;
      background : rgba(0,0,0,.05)
    }
  }

  .icon {

    img {
      display        : inline-block;
      max-width      : 32px;
      max-height     : 48px;
      vertical-align : top;
    }

    svg {
      display        : inline-block;
      max-width      : 24px;
      max-height     : 48px;
      margin-left    : 4px;
      fill           : rgba(0,0,0,.54);
      vertical-align : top;
    }
  }

  .text {
    font-weight : bolder;
  }

  .icon + .text {
    margin-left: 16px;
  }
</style>

<template lang="jade">
  .v-sidebar-item
    .icon(v-if='svg || img')
      svg(v-svg :sprite='svg', v-if='svg')
      img(:src='img', v-if='img')
    .text(v-show='!$els.text')
      slot
        div(v-el:text)
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'v-sidebar-item',

    props: ['svg', 'img']
  }
</script>
