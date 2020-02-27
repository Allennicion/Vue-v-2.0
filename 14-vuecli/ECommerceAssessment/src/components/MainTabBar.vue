<template>
    <tab-bar v-if="isShow">
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/menuico1.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/menuico1_hover.png" alt="">
        <div slot="item-text" @click="btnText">外卖</div>
      </tab-bar-item>
      <tab-bar-item path="/search">
        <img slot="item-icon" src="~assets/img/tabbar/menuico2.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/menuico2_hover.png" alt="">
        <div slot="item-text" @click="btnText">搜索</div>
      </tab-bar-item>
      <tab-bar-item path="/order">
        <img slot="item-icon" src="~assets/img/tabbar/menuico3.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/menuico3_hover.png" alt="">
        <div slot="item-text" @click="btnText">订单</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/menuico4.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/menuico4_hover.png" alt="">
        <div slot="item-text" @click="btnText">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>

  import TabBar from 'components/tabbar/TabBar.vue'
  import TabBarItem from 'components/tabbar/TabBarItem.vue'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    },
    props: {
      isShow: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      btnText(event) {
        let text = event.currentTarget.innerText;
        this.$emit('textclick',text);
      }
    }
  }
</script>

<style scoped>

</style>
