const { merge } = require('webpack-merge'); // merge is a function to merge 2 different webpack config objects (the common and this dev file).
// using the { merge } means that it is going into require('webpack-merge') and extracting what the merge property has

const HtmlWebpackPlugin = require('html-webpack-plugin'); // take html file inside our project and insert script tags inside it
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: packageJson.dependencies,

        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};

module.exports = merge(commonConfig, devConfig); // putting devConfig 2nd, it will take priority over any other similar options from commonConfig