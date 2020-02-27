<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news" tag="button">新闻</router-link>
    <router-link to="/home/message" tag="button">信息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        path: '/home/news'
      }
    },
    /* 生命周期函数,当这个组件被创建的时候就会调用这个回调函数*/
    created(){
      console.log('home created')
      // document.title = '首页'
    },
    /* 当template里面的模板挂载到DOM上的时候就会调用这个回调函数*/
    mounted() {

    },
    /* 只有界面发生刷新就会调用这个函数*/
    updated() {

    },
    /* 被销毁的时候调用这个函数*/
    destroyed() {
      console.log('home distoryed')
    },
    /* 离开该组件的时候调用*/
    beforeRouteLeave(to, from, next) {
      this.path = this.$route.path;
      next();
    },
    /* 下面两个函数只有被保持了状态使用了keep-alive时,才是有效的*/
    /* 当组件活跃的时候调用*/
    activated() {
      this.$router.push(this.path).catch(err => {});
    },
    /* 当组件不活跃的时候调用*/
    deactivated() {

    }
  }
</script>

<style scoped>

</style>
