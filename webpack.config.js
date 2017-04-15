module.exports = {
    entry: "./build/index.js",
    output: {
        filename: "app.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [ 'file-loader' ]
            }
        ]
    }
};