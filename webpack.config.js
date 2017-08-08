"use strict";

let webpack = require("webpack");
let path = require("path");

let dev = path.resolve(__dirname, "");

let config = {
  entry: dev + "/index.js",
  output: {
    path: dev + "/",
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {
        include: dev,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "stage-2"]
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./"
  }
};

module.exports = config;
