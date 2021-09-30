const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\\.(png|jpe?g|gif|mp3)$/i, // 1
                use: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            }
        ]
    },
    module: {
        rules: [
            {
                test: /\\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    devServer: {
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new BundleAnalyzerPlugin(),
    ]

}