// webpack.config.js is in Common JS syntax
// const module = require("from");

// import modules

// enables the Node´s path lookup
const path = require("path");

// refs webpack module
const { web, webpack } = require("webpack");

// import html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

// import mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// import css-minimizer-webpack-plugin
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// change buildMode to the type of build, manually
// set mode between "development" | "production" | "none"
const buildMode = "development";

// module exports a configuration object
// webpack.config.js is the module.exports = {}
module.exports = {
    mode: buildMode,
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        assetModuleFilename: "images/[name][ext]"
        //filename: "[name][contenthash].js",
        //clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // this will ref .babelrc unless more settings
                    // put the presets in the .babelrc file or here
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // if true use "style-loader", if false use "MiniCssExtractPlugin.loader"
                    buildMode !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                dependency: { not: ['url'] },
                type: "asset/resource",
            }
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            minify: { 
                collapseWhitespace: false,
                removeComments: true,
            },
            meta: {
                "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
                "description": "A description of the page",
                "robots": "index, follow",
                "googlebot": "index, follow",
                "google": "nositelinkssearchbox",
                "googlebot-news": "noindex",
                "robots": "max-snippet:-1",
                "geo.region": "CL",
            },
            title: "project name",
            filename: "index.html",
            template: "src/html-templates/index-template.html",
            favicon: "src/favicon/icon.png"
        }),
    ].concat(buildMode !== "production" ? [] : [new MiniCssExtractPlugin()]),
    // source maps (e.g.: file.js.map) for debugging
    devtool: "source-map",
    // webpack-dev-server
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        port: 8080,
        hot: true,
        compress: true,
        historyApiFallback: true,
        allowedHosts: ["localhost"],
    },
    target: "web"
}