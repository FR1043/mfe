const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN; // environment variable that we set up, this is defined when we build our appn through CICD, tells us where the prod appn is actually hosted, which we will tell the marketing remote to draw from

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js' // this ensures that whenever we build files for prod, all the files will use this as a template for how to name them. Done because of caching issues
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js` // assuming the remoteEntry.js file is nested inside the domain/marketing/
            },
            shared: packageJson.dependencies
        })
    ],
};

module.exports = merge(commonConfig, prodConfig)