const path = require("path");
const process = require("process");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devServer: {
    compress: true,
    static: {
      publicPath: '/public',
    },
    host: 'localhost',
    port: 8080,
    proxy: { "/api": "http://localhost:3000" },
  },
  entry: path.resolve(__dirname, "./client/index.js"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
