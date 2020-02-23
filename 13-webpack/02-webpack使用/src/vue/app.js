export default {
	template: `
	<div>
		<h2>{{msg}}</h2>
		<button @click="btnClick">按钮</button>
		<h2>{{name}}</h2>
	</div>
	`,
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
	}
}