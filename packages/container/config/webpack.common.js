module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // whenever we import a file which ends with extension .mjs or  .js, we want to process it with babel
                exclude: /node_modules/, // except these
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env'], // means babel will process all the jsx tags we add into the application
                        plugins: ['@babel/plugin-transform-runtime'], // add in some code to enable different features
                    },
                },
            },
        ],
    },
};