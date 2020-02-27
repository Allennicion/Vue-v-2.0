<template>
  <Head>
    <div :class="cleft == 0?'topleft_search' : 'top_back'" slot="topleft" @click="back"><a href="#"></a></div>
    <span slot="title">{{ctext}}</span>
  </Head>
</template>

<script>

  import Head from 'components/head/Head.vue'

  export default {
    name: "MainHead",
    data() {
      return {
        title: '包河区周谷堆恒兴广场'
      }
    },
    props: {
      ctext: {
        type: String,
        default: ''
      },
      cleft: {
        type: Number,
        default: 0
      }
    },
    components:{
      Head
    },
    methods: {
      back() {
        history.go(-1);
      }
    }
  }
</script>

<style scoped>

</style>
