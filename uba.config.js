const path = require("path");
const webpack = require("webpack");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const merge = require('webpack-merge');
const baseConfig = require('./base.config');

//服务启动设置
const svrConfig = {
    host: "127.0.0.1",
    port: 3000,
    //是否开启静默模式？true开启，紧显示错误和警告，如要看信息为false。
    noInfo: false
};

//远程代理访问，可以配置多个代理服务
const proxyConfig = [{
    enable: false,//true启用代理,mock服务失效.
    router: "/",//代理的路由
    url: "cnodejs.org",
    options : {
        filter : function(req,res){//不需要代理可以排除
            return (req.url.indexOf("webpack_hmr") > -1 ? false : true);
        }
    }
}];

//静态服务托管
const staticConfig = {
    folder: "src/static"
};


//开发环境的webpack3配置
const devConfig = merge(baseConfig, {
    devtool: "cheap-module-source-map",

    plugins: [
        new OpenBrowserPlugin({
            url: `http://${svrConfig.host}:${svrConfig.port}`
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            },
            '__DEV__': true,
            '__PROD__': false
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [
            ".jsx", ".js"
        ],
        alias: {
            components: path.resolve(__dirname, "src/components/"),
            assets: path.resolve(__dirname, "src/assets/"),
            containers: path.resolve(__dirname, "src/containers/")
        }
    }
})



//生产环境的webpack3配置
const prodConfig = merge(baseConfig, {
    plugins: [

        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('prodution')
            },
            '__DEV__': false,
            '__PROD__': true
        }),
        new CleanWebpackPlugin(['dist']),

    ],
})



//最终向uba导出配置文件
module.exports = {
    devConfig: devConfig,
    prodConfig: prodConfig,
    svrConfig: svrConfig,
    proxyConfig: proxyConfig,
    staticConfig: staticConfig
};
