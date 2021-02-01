const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'eval-source-map',
  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: './fonts/[hash].[ext]',
            },
          },
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ejs$/i,
        use: [{
            loader: 'html-loader', // loader for html files goes here
          }, {
            loader: 'ejs-plain-loader'
          }]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          },
          
        ],
      },
    ]
  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css', //создаёт css файл, после билда
      }),
      new HtmlWebpackPlugin()
    ],
};

