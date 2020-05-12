const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: path.resolve("src/index.tsx"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  devServer: {
    port: 5000,
    historyApiFallback: true,
    hot: true,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /\.test.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
};
