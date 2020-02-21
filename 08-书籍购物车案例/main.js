const app = new Vue({
	el: '#app',
	data: {
		list: [
			{
				id: 1,
				name: '《三国演义》',
				date: '2020-02-13',
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: '《红楼梦》',
				date: '2020-02-11',
				price: 123.00,
				count: 1
			},
			{
				id: 3,
				name: '《水浒传》',
				date: '2020-02-25',
				price: 70.00,
				count: 1
			},
			{
				id: 4,
				name: '《西游记》',
				date: '2020-02-23',
				price: 119.00,
				count: 1
			},
		]
	},
	methods: {
		/*
		getFinalPrice(price) {
			return '$'+price.toFixed(2);
		} */
		increment(index) {
			this.list[index].count++;
		},
		decrement(index) {
			this.list[index].count--;
		},
		removeHandler(index) {
			this.list.splice(index,1);
		}
	},
	computed: {
		totalPrice() {
			let totalPrice = 0;
			for(let i in this.list) {
				totalPrice += this.list[i].price*this.list[i].count;
			}
			return totalPrice;
		}
	},
	//过滤器
	filters: {
		//价格保留两位小数
		showPrice(price) {
			return '$'+price.toFixed(2);
		}
	}
});