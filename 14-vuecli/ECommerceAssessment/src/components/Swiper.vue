<template>
  <div class="swiper-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import one from 'components/reset/One.vue';
  import two from 'components/reset/Two.vue';
  import Swiper from 'static/swiper.min.js'

  export default {
    name: "Swiper",
    components: {
      one,
      two
    },
    props: {
      index: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        list: [
          {path: '/one', component: one},
          {path: '/two', component: two},
        ]
      }
    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        // 设定初始化时slide的索引
        initialSlide: this.$route.path === '/one' ? 0 : this.$route.path === '/two' ? 1 :  0
      });
      mySwiper.on('slideChange', () => { // 监控滑动后当前页面的索引，将索引发射到导航组件
        // 左右滑动时将当前slide的索引发送到nav组件
        this.$emit('slideTab', mySwiper.activeIndex);
      });
      // 接收nav组件传过来的导航按钮索引值，跳转到相应内容区
      /* this.$root.eventHub.$on('changeTab', (index) => { // 点击导航键跳转相应内容区
        mySwiper.slideTo(index, 0, false);
      }); */
      //console.log(mySwiper);
      //console.log(this.index);
    }
  }
</script>

<style scoped>
@import url("../assets/css/reset.css");
@import url("../../static/swiper.min.css");
</style>
