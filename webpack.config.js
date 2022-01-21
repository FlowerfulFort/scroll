const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: 'babel-loader',
            },
            {
                test: /\.(gif|png|jpg)?$/,
                include: [
                    path.resolve(__dirname, 'resource')
                ],
                use: 'file-loader',
            },
            {
                test: /\.css?$/,
                include: [
                    path.resolve(__dirname, 'css')
                ],
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 30000,
    },
};
