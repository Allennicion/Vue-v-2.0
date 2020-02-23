/* ES6语法 */
/* 导入,这是一种简写 */
import {flag,name} from './aaa.js';
/* 导入export中的function */
import {sum,person} from './aaa.js';


if(flag){
	console.log(name);
	console.log('true');
}

/* 函数 */
sum(1,2);
/* 类 */
const p = new person();
p.run();

/* defalut的使用 不需要{},自动找到default的导出*/
import addr from './aaa.js';
console.log(addr);


/* 统一全部导入 */
/* 这种方法太繁琐 */
/* import {flag,name,sum,person} from './aaa.js'; */
import * as obj from './aaa.js';
console.log(obj.name)
obj.sum(3,3);