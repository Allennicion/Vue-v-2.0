<template>
	<div>
		<h2 class="title">我是Cpn</h2>
		<span>{{name}}</span>
	</div>
</template>

<script>
	export default {
		name: 'Cpn',
		data() {
			return {
				name: 'Cpn欢欢'
			}
		}
	}
</script>

<style>
	.title{
		color: antiquewhite;
	}
</style>
