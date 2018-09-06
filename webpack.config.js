const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: {
        app: './src/index.js',
        scss: './src/index.scss'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 12000, // Convert images < 8kb to base64 strings
                        name: './src/assets/images/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },
    performance: {
        hints: false
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/view/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin('[name].css', {
            path: './dist',
            allChunks: true
        }),
    ]
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        return {
            mode: 'development',
            ...config
        }
    }
    if (argv.mode === 'production') {
        return {
            mode: 'development',
            ...config,
            output: {
                path: path.resolve('./docs'),
                filename: '[name].js'
            }
        }
    }
};
