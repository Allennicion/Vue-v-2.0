<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!-- 默认渲染成a标签,tag可以改成任意标签, replace模式:点击后无法通过浏览器返回上一页面-->
<!--
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about">关于</router-link>
    <button @click="homeclick">首页</button>
    <button @click="aboutclick">关于</button>-->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>

    <!-- 用router-link的方法跳转路径同时传递数据 -->
    <!-- v-bind绑定属性才能获取data里面的数据-->
    <!-- http://localhost:8080/user/zhangsan -->
    <!-- <router-link :to="'/user/'+userId" tag="button">用户</router-link> -->
    <!-- http://localhost:8080/profile?name=zhangsan&age=13&weight=1.56 -->
    <!-- <router-link :to="{path:'/profile',query:{name: 'zhangsan', age: 13, weight: 1.56}}"
    tag="button">档案</router-link> -->

    <!-- 用代码跳转的方式跳转路径同时传递数据 -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <!-- 占位-->
    <!-- 默认每次使用组件都创建一个新的组件,当使用其他组件则当前组件销毁-->
    <!-- <router-view></router-view> -->
    <!-- keep-alive离开当前组件不会被销毁,会一直保持存在,不会频繁的创建/销毁-->
    <!-- include - 字符串或正则表达，只有匹配的组件会被缓存-->
    <!-- exclude - 字符串或正则表达式，任何匹配的组件都不会被缓存-->
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    homeclick() {
      /* $router拿到的是整个router对象(new VueRouter)*/
      //this.$router.push('/home');
      //replace效果同上面的replace模式
      this.$router.replace('/home').catch(err=>{});
    },
    aboutclick() {
      //this.$router.push('/about');
      this.$router.replace('/about').catch(err=>{});
    },
    userClick() {
       this.$router.replace('/user/'+this.userId).catch(err=>{});
    },
    profileClick() {
       this.$router.replace({
         path:'/profile',
         query:{
           name: 'kobe',
           age: 22,
           weight: 1.98
         }
         }).catch(err=>{console.log(err)});
    }
  }
}
</script>

<style>
  .router-link-active{
    color: red;
  }
  .active{
    color: red;
  }
</style>
