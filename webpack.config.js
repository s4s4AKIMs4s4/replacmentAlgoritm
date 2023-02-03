const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env, {mode = 'development'}) => {
  const config = {
    mode,
    entry: {
      app: './src/index.tsx',
    },
    devtool: '',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: ['file-loader'],
          },
        ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      libraryTarget: 'ES6',
      publicPath: '/dist/',
      umdNamedDefine: true,
    },
    optimization: {
      mangleWasmImports: true,
      mergeDuplicateChunks: true,
      minimize: true,
      nodeEnv: 'production',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
      }),
    ],
  };

  if (mode === 'development') {
    config.devtool = 'source-map';
    config.output = {
      filename: '[name]/index.js',
    };
    config.module.rules.push({
      loader: 'source-map-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      enforce: 'pre',
    });
    config.plugins = [
      new ESLintPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"',
      }),
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, 'dist/index.html'),
        template: path.resolve(__dirname, 'src', 'index.html'),
      }),
      new webpack.HotModuleReplacementPlugin(),
    ];
    config.optimization = {
      mangleWasmImports: true,
      mergeDuplicateChunks: true,
      minimize: false,
      nodeEnv: 'development',
    };
  }
  return config;
};