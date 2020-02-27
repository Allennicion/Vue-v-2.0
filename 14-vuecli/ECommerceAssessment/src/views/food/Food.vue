<template>
  <div>
    <MainHead :ctext="text" :cleft="left"></MainHead>
    <v-food-filter></v-food-filter>
    <v-food-detail></v-food-detail>
  </div>
</template>

<script>
  import Filter from 'components/filter/Filter.vue'
  import FoodDetail from 'views/food/FoodDetail.vue'
  import MainHead from 'components/MainHead.vue'
  import MainTabBar from 'components/MainTabBar.vue'

  export default {
    name: "Food",
    data() {
      return {
        text: '美食',
        left: 1,
        noshow: true
      }
    },
    components: {
      'v-food-filter': Filter,
      'v-food-detail': FoodDetail,
      MainHead,
      MainTabBar
    },
    created() {
      let p = this.$route.path;
    }
  }
</script>

<style scoped>
</style>
