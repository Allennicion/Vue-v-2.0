<template>
<div>
  <h2>我是Profile组件</h2>
  <p>{{$route.query}}</p>
  <p>{{$route.query.name}}</p>
</div>
</template>

<script>
  export default {
    name: "Profile",
    created(){
      console.log('Profile created')
    },
    destroyed() {
      console.log('Profile distoryed')
    },
  }
</script>

<style scoped>

</style>
