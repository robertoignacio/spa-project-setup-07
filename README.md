# spa-project-setup-07
Project Setup for SPA with webpack conditional build

Conditional controlled at the webpack.config.js\
module.exports = { mode: buildMode, }

At buildMode: "development" will build with [style-loader] (injects the css into the js)\
At buildMode: "production" will build with [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader",]

This is an ongoing project setup for Single Pages Apps\
Read the [package.json](../main/package.json) for the dependencies used\
Read the [Project Log](../main/project-notes/project-log.txt) for my written notes of the choices for the process building this


- [x] Module Bundler: webpack, webpack-cli, webpack-dev-server
- [x] JavaScript: @babel/core, @babel/preset-env, babel-loader
- [x] HTML: html-webpack-plugin
- [x] CSS: mini-css-extract-plugin, style-loader, css-loader, sass-loader, sass
- [x] Optimization: css-minimizer-webpack-plugin
- [ ] TypeScript (TBA)
- [ ] React (TBA)
