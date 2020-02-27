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
      path: String,
      activeColor:{
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        //isActive: true
      }
    },
    computed:{
      isActive() {
        /* indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
        如果要检索的字符串值没有出现，则该方法返回 -1。 */
        /* 即获取当前获取路由的地址与父组件传过来的path作比较,相同的则此计算属性返回true*/
        /* 点击item1组件时*/
        /* /home -> /home ->找到相同的地方了则不等于-1为真-> ture*/
        /* /home -> /cart ->找不到相同的字符串则返回-1,不等于-1为假-> false*/
        //console.log(this.path)
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
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
    font-size: 14px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>
