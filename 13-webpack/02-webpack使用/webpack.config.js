/* node语法动态获取路径 */
/* 这里的path会从node依赖的包里面找 */
/* npm init  初始化 */
const path = require('path');
/* Plugins插件的使用 */
const webpack = require('webpack'); //自动生成版权声明注释
const HtmlWebPlugin = require('html-webpack-plugin'); //打包html

/* 本地服务器搭建,浏览器动态获取代码变化 */
const uglifyjsWebpackPlugins = require('uglifyjs-webpack-plugin');


module.exports = {
	/* 入口 */
	entry: './src/main.js',
	/* 出口 */
	output: {
		/* 动态获取绝对路径 */
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js',
		/* 超过limit限制的图片经过file-loader会打包到dist,这是路径不对,需要进行下面的配置 */
		/* 打包后的位置发生改变,这里的配置反而不需要了 */
		/* publicPath: 'dist/' */
	},
	/* loader转换器的使用 */
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
			},
			{
				test: /\.vue$/,
				use:['vue-loader']
			}
		],
	},
	/* resolve一般用于解决路径问题 */
	resolve: {
		/* 解决扩展名 填写路径可以省略*/
		/* extensions:['.js','.css','.vue'] */
		/* alias:别名 */
		alias: {
			/* 添加vue依赖时,优先使用此文件 */
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	/* 插件,扩展功能 */
	plugins:[
		new webpack.BannerPlugin('这是版权声明注释'),
		/* 将html页面打包,自动引入js */
		/* 根据index.html作为模板生成 */
		new HtmlWebPlugin({
			template:'index.html'
		})
	],
	/*  */
	devServer: {
		contentBase: './dist', //服务于哪个文件夹
		inline: true ,//是否实时监听(是)
		/* port 端口,默认8080*/
	}
}