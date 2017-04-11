const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const appPath = path.join(__dirname,'app');
const buildPath = path.join(__dirname, './dist');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const HTML_WEBPACK_OPTIONS = {
  main: {
    title: 'PixiJS and ReactJS',
    inject: false,
    template: './templates/index_template.ejs',
    appId: 'app',
    css: ['style.[hash].css']
  },
};

const plugins = [
    new DashboardPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: 'style.[hash].css'
    }),
    new HtmlWebpackPlugin(HTML_WEBPACK_OPTIONS.main)
];

const rules = [
  { 
    test: /\.ejs$/, 
    loader: 'ejs-loader' ,
    query: {
      includePaths: [
        path.resolve(appPath, '/templates/'),
      ],
    },
  },
  {
    test: /\.tsx?$/,
    loader: 'ts-loader',
  },
  {
    test: /\.json$/,
    loader: 'json'
  },
  {
    test: /\.css$/,
    exclude: /(node_modules)/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName:'[name]__[local]___[hash:base64:5]'
          }
        }
      ]
    }),
  },
  { 
    test: /\.[ot]tf$/, 
    loader: 'file?name=[name].[ext]'
  },
  {
    test: /\.css$/,
    use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }
    ],
    include: /flexboxgrid/,
  }
];

module.exports = {
  context: appPath,

  devtool: 'source-map',

  entry: {
    main: path.resolve(appPath, 'index'),
  },
  module: {
    rules
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: buildPath,
    filename: 'app-[hash].js',
    publicPath: '/'
  },
  plugins,
  devServer: {
    contentBase: isProduction ? './dist' : './app',
    historyApiFallback: true,
    port: 3000,
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    host: '0.0.0.0',
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  }
}