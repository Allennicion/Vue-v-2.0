/* webpack打包命令 */
/* 
	webpack ./src/main.js ./dist/bundle.js 
	将前面的js文件打包到后面的文件中取
	js文件中导入的文件webpack会自动进行处理
*/


/* 使用CommonJs的模块化规范 */
const {sum,mull} = require('./mathUtils.js');

console.log(sum(1,1));
console.log(mull(1,1));

/* 使用ES6的模块化规范 */
import {name,age} from './info.js';
console.log(name);
console.log(age);