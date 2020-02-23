/* ES6语法 */
/* 方式一:export可以直接定义 */
export var name = '小明';
var age = 13;
var flag = true;



/* 导出方式二 */
export{
	flag
}

/* 导出函数/类 */
export function sum(n1, n2) {
	console.log(n1 + n2);
}

if(flag){
	sum(1,1);
}

/* 类 */
export class person{
	run() {
		console.log('在这儿');
	}
}


/* 
	导入接受的函数名必须和导出的一样
	export default 可以修改
	但是default只能有一个
*/
const address = 'asdasda';
export default address;