const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // in - out
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    //server
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    //extensions and reference node_modules
    resolve: {
        extensions: ['', 'js', 'jsx'],
        alias :{
            modules: __dirname + '/node_modules'
        }
    },
    //load css
    plugins: [
        new ExtractTextPlugin('app.css')
    ],

    module: {
        loaders: [{
            test: /.js[x]?$/, 
            exclude: '/node_modules/',
            query: {
                preset: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },{
            test: /\.woff|.woff2|.ttf|.oot|.svg*.*$/,
            loader:'file'
        }]
    }
}