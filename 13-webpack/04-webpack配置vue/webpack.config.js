/* node语法动态获取路径 */
/* 这里的path会从node依赖的包里面找 */
/* npm init  初始化 */
const path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		/* 动态获取绝对路径 */
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js',
		/* 超过limit限制的图片经过file-loader会打包到dist,这是路径不对,需要进行下面的配置 */
		publicPath: 'dist/'
	},
	/* loader的使用 */
	module:{
		rules:[
			{
				/* css-loader的配置 */
				test: /\.css$/i,
				/* css-loader只负责加载css文件 */
				/* style-loader负责将样式添加到DOM中 */
				/* 使用多个loader时,会从右向左加载 */
				use: ['style-loader', 'css-loader'],
			},
			{
				/* less-loader的配置 */
				test: /\.less$/,
				use: [{
						loader: "style-loader" // creates style nodes from JS strings
				}, {
						loader: "css-loader" // translates CSS into CommonJS
				}, {
						loader: "less-loader" // compiles Less to CSS
				}]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							/* 当加载的图片大小小于limit时,会将图片编译成base64字符串形式 */
							/* 大于limit需要用file-loader模块进行加载 */
							limit: 90000,
							/* 默认打包的图片为哈希值,这里可以进行修改 */
							/* 放入img包下面,原来图片的名字.8位哈希值.扩展名 */
							name: 'img/[name].[hash:8].[ext]'
						},
					}
				]
			},
			{
				/* ES6->ES5	npm install --save-dev babel-loader@7 babel-core babel-preset-es2015 */
				test: /\.js$/,
				/* exclude: 排除 */
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						/* 这里没有使用默认的配置,默认的配置需要另外一个配置文件,为了简便 */
						presets: ['es2015']
					}
				}
			}
		],
	}
}