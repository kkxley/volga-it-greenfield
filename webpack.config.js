const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./source/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: path.resolve(__dirname, "node_modules")
      }
    ]
  }
};
