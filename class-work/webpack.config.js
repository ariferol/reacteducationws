const path = require("path");
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const env = dotenv.config();

module.exports = {
    // ilk çalıştıracağı dosya
    entry: "./src/index.js",
    // çıktı dosyası
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    // kullanılacak eklentiler
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        }),
        // html dosyasını oluşturmak ve manupule etmek için
        new HtmlWebpackPlugin({
            title: "todo-app-typescript",
            template: "./public/index.html",
        }),
    ],
    // dev server ayarları
    devServer: {
        port: process.env.PORT || 3000,
        hot: true, // hot reload
        historyApiFallback: true,
    },
    // dosyaları compile ederken hangi loader'ları kullanacağız
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // .js ve .jsx doslarını compile edecek
                exclude: /node_modules/, // bu dosyaları compile etme
                use: {
                    loader: "babel-loader", // babel-loader kullanacağız
                },
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i, // .css uzantılı dosyaları compile edecek
                use: ["style-loader", "css-loader"], // style-loader ve css-loader kullanacağız
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    }
};