<template>
  <div class="main_container" style="margin-top:84px; padding: 10px;">
    <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
    <ul class="dp_list">
      <li v-for="item in dataList">
        <div class="list_leftpic"><img src="~assets/img/pics/pic.jpg"></div>
        <div class="left_txt">
          <strong><span>品牌</span>{{item.brand}}</strong>
          <div class="list_star"><div><i style="width: 80%;"></i><span>4.7</span></div>月销{{item.msales}}单</div>
          <div class="list_p">￥{{item.sprice}}起送/配送费约￥{{item.deliveryf}}<div>{{item.distance}}公里/<span>{{item.time}}</span></div></div>
        </div>
        <div class="right_txt">
          <div><span>保</span><span>准</span><span>票</span></div>
          <div class="tag1">蜂鸟专送</div><div class="tag2">准时达</div>
        </div>
      </li>
    </ul>
    </mescroll-vue>
  </div>
</template>

<script> 
  // 引入mescroll的vue组件
  import MescrollVue from 'mescroll.js/mescroll.vue'
  /* 模拟数据*/
  import shoplist from '@/mock/shoplist.js'

  export default {
    name: "FoodDetail",
    data() {
      return {
        shoplist,
        mescroll: null, // mescroll实例对象
        mescrollUp: {
          callback: this.upCallback, // 上拉回调,此处可简写; 相当于 callback: function (page, mescroll) { getListData(page); }
          page: {
            num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
            size: 7 // 每页数据的数量
          },
          noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
          empty: {
            // 列表第一页无任何数据时,显示的空提示布局; 需配置warpId才生效;
            warpId: 'dataList', // 父布局的id;
            icon: './static/mescroll/mescroll-empty.png', // 图标,支持网络图
            tip: '暂无相关数据~', // 提示
            btntext: '去逛逛 >', // 按钮,默认""
            btnClick () { // 点击按钮的回调,默认null

            }
          },
          lazyLoad: {
            use: true // 是否开启懒加载,默认false
          }
        },
        dataList: [], // 列表数据
        pdType: 0 // 菜单
      }
    },
    components: {
      MescrollVue
    },
    methods: {
      // mescroll组件初始化的回调,可获取到mescroll对象
      mescrollInit (mescroll) {
        this.mescroll = mescroll
      },
      // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
      upCallback (page, mescroll) {
        // 模拟联网
        this.getListDataFromNet(this.pdType, page.num, page.size, (arr) => {
          // 如果是第一页需手动制空列表
          if (page.num === 1) this.dataList = []
          // 把请求到的数据添加到列表
          this.dataList = this.dataList.concat(arr)
          // 数据渲染成功后,隐藏下拉刷新的状态
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length)
          })
        }, () => {
          // 联网异常,隐藏上拉和下拉的加载进度
          mescroll.endErr()
        })
      },

      // 选中状态的样式
      getActiveCls (type) {
        return this.pdType === type ? 'active' : ''
      },

      /* 联网加载列表数据
         在您的实际项目中,请参考官方写法: http://www.mescroll.com/api.html#tagUpCallback
         请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
         实际项目以您服务器接口返回的数据为准,无需本地处理分页.
         * */
    getListDataFromNet (pdType, pageNum, pageSize, successCallback, errorCallback) {
        // 延时一秒,模拟联网
        setTimeout(() => {
          // axios.get("xxxxxx", {
          //   params: {
          //     num: page.num, //页码
          //     size: page.size //每页长度
          //   }
          // }).then((response)=> {
          var listData = []
          // pdType 全部商品0; 奶粉1; 图书2;
          if (pdType === 0) {
            // 全部商品 (模拟分页数据)
            for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
              if (i === shoplist.length) break
              listData.push(shoplist[i])
            }
          }
          // 回调
          successCallback(listData)
          // }).catch((e)=> {
          //   //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          //   errorCallback&&errorCallback()
          // })
        }, 1000)
      }
    }
  }
</script>

<style scoped>

</style>
