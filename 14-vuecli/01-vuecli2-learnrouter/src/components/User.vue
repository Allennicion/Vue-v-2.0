<template>
<div>
  <h2>我是User</h2>
  <p>哈哈哈哈哈哈哈</p>
  <h2>{{userId}}</h2>
</div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        /* $route拿到的是当前处于活跃状态的路由对象*/
        return this.$route.params.id;
      }
    }
  }
</script>

<style scoped>

</style>
