/* node语法动态获取路径 */
/* 这里的path会从node依赖的包里面找 */
/* npm init  初始化 */
const path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		/* 动态获取绝对路径 */
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js'
	}
}