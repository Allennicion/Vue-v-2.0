/* webpack打包命令 */
/* 
	webpack ./src/main.js ./dist/bundle.js 
	将前面的js文件打包到后面的文件中取
	js文件中导入的文件webpack会自动进行处理
*/


/* 使用CommonJs的模块化规范 */
const {sum,mull} = require('./js/mathUtils.js');

console.log(sum(1,1));
console.log(mull(1,1));

/* 使用ES6的模块化规范 */
import {name,age} from './js/info.js';
console.log(name);
console.log(age);

/* 依赖css文件,需要loader的支持
		style-loader-负责将样式添加到DOM中
		css-loader-负责加载css文件
	*/
require('./css/normal.css');

/* 依赖less文件 */
require('./css/special.less');
document.writeln('<h2>Hello Webpack!</h2>');

/* 使用vue进行开发 */
import Vue from 'vue';
import App from './vue/app.vue'

new Vue({
	el: '#app',
	template: `<App/>`,
	components: {
		App
	}
});