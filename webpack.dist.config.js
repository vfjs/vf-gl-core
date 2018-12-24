const pkg = require('./package.json');
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'vf-gl-core.min.js',
        library: 'vf',
        libraryTarget: "umd",
        umdNamedDefine: true,
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: '@vf-gl-core v'+pkg.version +' \n'+ (new Date()).toUTCString().replace(/GMT/g, "UTC") +' \n' + pkg.homepage,
            entryOnly: true
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJSPlugin({
                include: /\.min\.js$/,
                parallel: true,
                sourceMap: true,
                extractComments:false,
                uglifyOptions: {
                    compress: true,
                    ie8: false,
                    ecma: 5,
                    warnings: false,
					output: {
						comments: /@vf-gl-core/i
					}
                }
            })
        ]
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: [path.resolve(__dirname, 'src')],
            exclude: /node_modules/
        }, ]
    }


};