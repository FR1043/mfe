const { merge } = require('webpack-merge'); // merge is a function to merge 2 different webpack config objects (the common and this dev file).
// using the { merge } means that it is going into require('webpack-merge') and extracting what the merge property has

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json'); // this allows accessing of the list of dependencies from the package.json file, so we can just put it under "shared" and not have to share manually

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared: packageJson.dependencies,
        }),
    ]
};

module.exports = merge(commonConfig, devConfig); // putting devConfig 2nd, it will take priority over any other similar options from commonConfig 