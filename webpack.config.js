const path = require('path');

module.exports = {
    //这里根据文件路径更改入口
    entry: './src/index.js',

    module: {
        rules: [{
            test: /\.(jpg|png|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/'
                }
            }
        }]
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}