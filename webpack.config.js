let path = require('path');
let webpack = require('webpack');
let HtmlwebpackPlugin = require('html-webpack-plugin');

let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH,'src');
let BUILD_PATH = path.resolve(ROOT_PATH,'build');

module.exports = {
	mode: 'development',
	entry: path.resolve(APP_PATH,'index.js'),
	output: {
		path: BUILD_PATH,
		filename:'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: APP_PATH,
				exclude: '/node_modules/',
				query: {
          			"presets": [
          				'babel-preset-es2015', 
          				'babel-preset-react', 
          				'react'
          			]
        		}
			},
			{
				test: /\.(css|less)$/,
				loader: 'style-loader!css-loader!less-loader'
			}
		]
	},
	performance: {
		hints: false
	},
	plugins: [
		new HtmlwebpackPlugin({
			template: __dirname + '/index.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
      		__DEVCLIENT__: true,
		    __DEVSERVER__: false,
		    __DEVTOOLS__: false,
		    __DEVLOGGER__: true,
		    'process.env': {
		      'NODE_ENV': JSON.stringify('development')
		    }
    	}),
	],
	devServer: {
		host: '127.0.0.1',
		port: '8089',
		hot: true,
		historyApiFallback: true,
		inline: true
	}
}
