<style lang="sass" scoped>
  .items {
    display        : flex;
    flex-direction : column;

    &-header {
      flex        : 0 0 48px;
      padding     : 0 16px 8px;
      line-height : 40px;
      font-weight : bolder;
      color       : rgba(0,0,0,.54);
    }

    &:not(:last-of-type) {
      padding-bottom : 3px;
      margin-bottom  : 4px;
      border-bottom  : 1px solid rgba(0,0,0,.1);
    }
  }
</style>

<template lang="jade">
  .items
    .items-header(v-if='header') {{ header }}
    slot
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'v-sidebar-items',

    props: {
      header: String
    }
  }
</script>
