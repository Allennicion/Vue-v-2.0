<template>
  <div class="main_container">
  			<div class="home_fl">
          <v-seriper @slideTab="slidenum" :index="num"></v-seriper>
  			</div>
        <div class="wh_indicator">
           <div class="wh_indicator_item " :class="[num == 0 ? 'wh_show_bgcolor': {}]"></div>
           <div class="wh_indicator_item" :class="[num == 1 ? 'wh_show_bgcolor': {}]"></div>
        </div>
  			<div class="dp_listBox">
  				<div class="home_nav"><img src="~assets/img/shopico.png"> 附近商家</div>
  				<ul class="dp_list" style="margin-bottom: 60px;">
  					<li>
  						<div class="list_leftpic"><img src="~assets/img/pics/pic.jpg"></div>
  						<div class="left_txt">
  							<strong><span>品牌</span>老乡鸡</strong>
  							<div class="list_star"><div><i style="width: 80%;"></i><span>4.7</span></div>月销106单</div>
  							<div class="list_p">￥20起送/配送费约￥5<div>1198.4公里/<span>12小时49分钟</span></div></div>
  						</div>
  						<div class="right_txt">
  							<div><span>保</span><span>准</span><span>票</span></div>
  							<div class="tag1">蜂鸟专送</div><div class="tag2">准时达</div>
  						</div>
  					</li>
  					<li>
  						<div class="list_leftpic"><img src="~assets/img/pics/pic.jpg"></div>
  						<div class="left_txt">
  							<strong><span>品牌</span>老乡鸡</strong>
  							<div class="list_star"><div><i style="width: 80%;"></i><span>4.7</span></div>月销106单</div>
  							<div class="list_p">￥20起送/配送费约￥5<div>1198.4公里/<span>12小时49分钟</span></div></div>
  						</div>
  						<div class="right_txt">
  							<div><span>保</span><span>准</span><span>票</span></div>
  							<div class="tag1">蜂鸟专送</div><div class="tag2">准时达</div>
  						</div>
  					</li>
  					<li>
  						<div class="list_leftpic"><img src="~assets/img/pics/pic.jpg"></div>
  						<div class="left_txt">
  							<strong><span>品牌</span>老乡鸡</strong>
  							<div class="list_star"><div><i style="width: 80%;"></i><span>4.7</span></div>月销106单</div>
  							<div class="list_p">￥20起送/配送费约￥5<div>1198.4公里/<span>12小时49分钟</span></div></div>
  						</div>
  						<div class="right_txt">
  							<div><span>保</span><span>准</span><span>票</span></div>
  							<div class="tag1">蜂鸟专送</div><div class="tag2">准时达</div>
  						</div>
  					</li>
  					<li>
  						<div class="list_leftpic"><img src="~assets/img/pics/pic.jpg"></div>
  						<div class="left_txt">
  							<strong><span>品牌</span>老乡鸡</strong>
  							<div class="list_star"><div><i style="width: 80%;"></i><span>4.7</span></div>月销106单</div>
  							<div class="list_p">￥20起送/配送费约￥5<div>1198.4公里/<span>12小时49分钟</span></div></div>
  						</div>
  						<div class="right_txt">
  							<div><span>保</span><span>准</span><span>票</span></div>
  							<div class="tag1">蜂鸟专送</div><div class="tag2">准时达</div>
  						</div>
  					</li>
  					<li>
  						<div class="list_leftpic"><img src="~assets/img/pics/pic.jpg"></div>
  						<div class="left_txt">
  							<strong><span>品牌</span>老乡鸡</strong>
  							<div class="list_star"><div><i style="width: 80%;"></i><span>4.7</span></div>月销106单</div>
  							<div class="list_p">￥20起送/配送费约￥5<div>1198.4公里/<span>12小时49分钟</span></div></div>
  						</div>
  						<div class="right_txt">
  							<div><span>保</span><span>准</span><span>票</span></div>
  							<div class="tag1">蜂鸟专送</div><div class="tag2">准时达</div>
  						</div>
  					</li>
  				</ul>
  			</div>
  		</div>
</template>

<script>
  import swiper from 'components/Swiper.vue'

  export default {
    name: "Home",
    data() {
      return {
        num: 0
      }
    },
    components:{
      'v-seriper': swiper
    },
    methods: {
      slidenum(num) {
        this.num = num
      }
    }
  }
</script>

<style scoped>
  .wh_indicator {
      float: left;
      position: absolute;
      margin-top: -30px;
      width: 100%;
      text-align: center;
      background: 0 0;
      z-index: 99999;
  }

  .wh_indicator_item {
      display: inline-block;
      width: 8px;
      height: 8px;
      margin: 1px 7px;
      cursor: pointer;
      border-radius: 100%;
      background: #aaa;
  }
  .wh_show_bgcolor {
      background: #007aff;
  }
</style>
