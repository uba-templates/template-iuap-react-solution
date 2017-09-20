const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const hotMiddlewareScript = "webpack-hot-middleware/client?reload=true";
const path = require('path');


module.exports = {
    entry: {
        vendors: ["react", "react-dom"],
        app: ["./src/index.js",hotMiddlewareScript]
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].[hash].js",
        publicPath: "/"
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /(node_modules)/,
            include: path.resolve("src"),
            use: [{
                loader: "babel-loader"
            }]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ["css-loader","postcss-loader"],
                fallback: "style-loader"
            })
        },{
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'postcss-loader', 'less-loader'],
                fallback: 'style-loader'
            })
        }, {
            test: /\.(png|jpg|jpeg|gif)(\?.+)?$/,
            exclude: /favicon\.png$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "[name].[hash:8].[ext]"
                }
            }]
        }, {
            test: /\.(eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "[name].[hash:8].[ext]"
                }
            }]
        }]
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "vendors"
        }),
        new ExtractTextPlugin({
            filename: "[name].[hash].css"
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            inject: "body",
            hash: false,
            favicon : "./src/assets/images/favicon.png",
            chunks: ["vendors", "app"]
        }),
    ],
    resolve: {
        extensions: [
            ".jsx", ".js"
        ],
        alias: {
            components: path.resolve(__dirname, "src/components/"),
            assets: path.resolve(__dirname, "src/assets/"),
            containers: path.resolve(__dirname, "src/containers/"),
            utils: path.resolve(__dirname, "src/utils/"),
            serve: path.resolve(__dirname, "src/serve/")
        }
    }
}