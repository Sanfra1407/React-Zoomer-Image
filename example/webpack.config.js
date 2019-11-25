const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /(node_modules)/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
};
