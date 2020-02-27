<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path: String
    },
    data() {
      return {
        itemText: 'itemText'
      }
    },
    computed:{
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: '#3796ea'} : {color: '#8a8a8a'}
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path).catch(err => {})
      }
    }
  }
</script>

<style scoped>

  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 13px;
    padding-top: 5px !important;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }

  .itemText{
    color: #3796ea;
  }

</style>
