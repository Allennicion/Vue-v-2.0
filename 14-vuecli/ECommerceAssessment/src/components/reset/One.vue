<template>
  <ul class="home_fllist">
  	<li>
  		<a href="#"><img src="~assets/img/1.png"><span>甜品饮品</span></a>
  		<a href="#"><img src="~assets/img/2.png"><span>商超便利</span></a>
  		<a href="javascript:void(0)" @click="food"><img src="~assets/img/3.png"><span>美食</span></a>
  		<a href="#"><img src="~assets/img/4.png"><span>简餐</span></a>
  		<a href="#"><img src="~assets/img/5.png"><span>新店特惠</span></a>
  		<a href="#"><img src="~assets/img/6.png"><span>准时达</span></a>
  		<a href="#"><img src="~assets/img/7.png"><span>预订早餐</span></a>
  		<a href="#"><img src="~assets/img/8.png"><span>土豪推荐</span></a>
  	</li>
  </ul>
</template>

<script>
  export default {
    name: "One",
    methods: {
      food() {
        this.$router.push('/food').catch(err=>{});
        this.$emit('btnfood',1);
      }
    }
  }
</script>

<style>

</style>
