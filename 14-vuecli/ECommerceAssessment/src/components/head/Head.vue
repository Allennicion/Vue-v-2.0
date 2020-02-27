<template>
  <header>
    <slot name="topleft"></slot>
    <slot name="title"></slot>
    <div class="top_right"><a href="#">登录</a> | <a href="#">注册</a></div>
  </header>
</template>

<script>
  export default {
    name: "Head"
  }
</script>

<style scoped>
.topleft_search{width: 22px;height: 22px; position: absolute; left:10px; top:11px; }
.topleft_search{background: url(~assets/img/search.png) no-repeat; background-size: 100% 100%;}
.top_right{position: absolute;right: 10px;top:8px; height: 30px; line-height: 30px; color: #fff;}
.top_right a{color: #fff;}
</style>
