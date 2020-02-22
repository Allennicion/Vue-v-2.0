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
/* 			let totalPrice = 0;
			for(let i in this.list) {
				totalPrice += this.list[i].price*this.list[i].count;
			}
			return totalPrice; */
			//使用高阶函数reduce
			//注意:list数组里面存的是对象,因此这里n取出的是也是对象
			return this.list.reduce(function(preValue,n){
				return preValue + n.price*n.count;
			},0);
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


//javaScript高阶函数学习与扩展

/* 
	编程范式
	命令式编程:第一步干嘛,第二步要干嘛…
	声明式编程:你把数据放到该放的位置,在声明你要做的事,我自动帮你做
	面向对象编程:第一公民:对象
	函数式编程:第一公民:函数_高阶函数:filter/map/reduce */
	
	const nums = [12,345,123,22,65,3];
	
	//需求一:取出所有小于100的数字
	//以往的业务处理
/*let newNum = [];//创建一个新的数组接收
	for(let num of nums){//for循环处理
		if(num < 100){
			newNum.push(num);
		}
	} */
	/**使用高阶函数filter
	 * filter中的回调函数有一个要求:必须返回一个boolean值
	 * true: 返回ture,函数会自动将n加入到新的数组中
	 * false:返回false,函数会自动过滤掉当前
	 * 因此我只要用一个新数组做一个接收就可以了
	 * */
	let newNum = nums.filter(function(n){
		return n < 100;
	});
	console.log(newNum);
	
	
	
	//需求二:将所有小于100的数字再*2
	//以往的业务处理
/*let newNum2 = [];//需要再创建一个新的数组
	for (let n of newNum) {//再for循环处理
		newNum2.push(n*2);
	} */
	/**使用map
	 * map回调函数返回一个元素放到新的数组中
	 * */
	 let newNum2 = newNum.map(function(n){
		 return n*2;
	 });
	console.log(newNum2);
	
	/**reduce函数的使用
	 * reduce作用对数组中的所有内容进行汇总
	 * retduce有两个参数
	 * 第一个参数是个回调函数对数据进行处理,返回的值作为preValue再次处理,n是每次遍历的对象
	 * 第二个参数是第一次循环preValue的值
	 * */
	 //newNum2 : 24, 44, 130, 6
	 let total = newNum2.reduce(function(preValue,n){
		 return preValue + n;
	 },0);
	 console.log(total);
	/*
	第一次:preValue:0; n:24
	第二次:preValue:return的值; n:44
	以此类推
	*/
	