const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// .env dosyasını okumak için
require('dotenv').config({ path: './.env' });

module.exports = {
    // ilk çalıştıracağı dosya
    entry: "./src/index.js",
    // çıktı dosyası
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.js",
        library: 'tctb',
        libraryTarget: 'umd',
    },
    // dev server ayarları
    devServer: {
        port: process.env.PORT || 3000,
        hot: true, // hot reload
    },
    // kullanılacak eklentiler
    plugins: [
        // html dosyasını oluşturmak ve manupule etmek için
        new HtmlWebpackPlugin({
            title: "React App - Manuel Kurulum",
            template: "./public/index.html",
        }),
    ],
    // dosyaları compile ederken hangi loader'ları kullanacağız
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // .js ve .jsx doslarını compile edecek
                exclude: /node_modules/, // bu dosyaları compile etme
                resolve: {
                    extensions: [".js", ".jsx"] // .js ve .jsx uzantılı dosyaları compile edecek
                },
                use: {
                    loader: "babel-loader", // babel-loader kullanacağız
                },
            },
            {
                test: /\.css$/i, // .css uzantılı dosyaları compile edecek
                use: ["style-loader", "css-loader"], // style-loader ve css-loader kullanacağız
            },
        ],
    },
};