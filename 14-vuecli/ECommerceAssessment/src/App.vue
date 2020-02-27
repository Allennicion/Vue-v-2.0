<template>
  <div id="app">
    <MainHead :ctext="text"></MainHead>
    <router-view></router-view>
    <main-tab-bar @textclick="getText"></main-tab-bar>
  </div>
</template>

<script>

import MainTabBar from 'components/MainTabBar.vue'
import MainHead from 'components/MainHead.vue'

export default {
  name: 'App',
  data() {
    return {
      text: '恒兴广场'
    }
  },
  components: {
    MainTabBar,
    MainHead,
  },
  methods: {
    getText(text) {
      document.title = text;
      this.text = text;
    }
  }
}
</script>

<style>
  @import url("assets/css/shop_style.css");

  body {
     background: #f7f7f7;
  }
</style>
