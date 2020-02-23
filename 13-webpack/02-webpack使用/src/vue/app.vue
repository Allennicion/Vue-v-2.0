<template>
	<div>
		<h2 class="title">{{msg}}</h2>
		<button @click="btnClick">按钮</button>
		<h2>{{name}}</h2>
		<Cpn/>
	</div>
</template>

<script>
	import Cpn from './Cpn.vue'
	
	export default {
		name: 'App',
		data() {
			return {
				msg: 'Hello webpack',
				name: '张三'
			}
		},
		methods: {
			btnClick() {
				console.log('btnClick')
			}
		},
		components: {
			Cpn
		}
	}
</script>

<style scoped>
	.title{
		color: aqua;
	}
</style>
