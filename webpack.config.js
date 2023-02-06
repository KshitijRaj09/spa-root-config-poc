const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "vas-frontend";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return webpackMerge.merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object

    module: {
      rules: [
        {
          test: /\.(woff|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./node_modules/systemjs/dist/system.min.js",
            to: "./extras",
          },
          {
            from: "./node_modules/systemjs/dist/system.min.js.map",
            to: "./extras",
          },
          {
            from: "./node_modules/systemjs/dist/extras/amd.min.js",
            to: "./extras",
          },
          {
            from: "./node_modules/systemjs/dist/extras/amd.min.js.map",
            to: "./extras",
          },
          {
            from: "./node_modules/systemjs/dist/extras/named-exports.min.js",
            to: "./extras",
          },
          {
            from:
              "./node_modules/systemjs/dist/extras/named-exports.min.js.map",
            to: "./extras",
          },
          {
            from: "./node_modules/react-dom/umd/react-dom.production.min.js",
            to: "./extras",
          },
          {
            from: "./node_modules/react/umd/react.production.min.js",
            to: "./extras",
          },
          {
            from: "./node_modules/single-spa/lib/system/single-spa.min.js",
            to: "./extras",
          },
          {
            from: "./node_modules/single-spa/lib/system/single-spa.min.js.map",
            to: "./extras",
          },
          {
            from:
              "./node_modules/@vas-spa1/spa-learning/public/spa-learning.js",
            to: "./",
          },
          {
            from:
              "./node_modules/@vas-spa1/spa-learning/public/images/",
            to: "./images",
          },
          {
            from:
              "./node_modules/@vas-spa1/spa-learning/public/spa-learning.js.map",
            to: "./",
          },
          {
            from:
              "./node_modules/@vas-spa1/spa-application2/public/spa-application2.js",
            to: "./",
          },
          {
            from:
              "./node_modules/@vas-spa1/spa-application2/public/spa-application2.js.map",
            to: "./",
          },
          {
            from:
              "./node_modules/@vas-spa1/spa-navbar/public/spa-navbar.js",
            to: "./",
          },
          {
            from:
            "./node_modules/@vas-spa1/spa-navbar/public/spa-navbar.js.map",
            to: "./",
          },
          // },
          //{ from: "./scripts", to: "./" },
        ],
      }),
    ],
    output: {
      filename: "vas-frontend-root-config.js",
      path: __dirname + "/build",
    },
    });
  
};
