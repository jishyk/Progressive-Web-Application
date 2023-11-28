const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html', // assuming you have an index.html file in a src directory
        title: 'Your Application Name'
      }),
      new InjectManifest({
        swSrc: './src-sw.js', // your source service worker file
        swDest: 'service-worker.js' // the output service worker file
      }),
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Your App Name',
        short_name: 'App',
        description: 'Your application description',
        background_color: '#ffffff',
        crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
        icons: [
          {
            src: path.resolve('src/images/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          },
        ],
      }),
      // Add other plugins here
    ],

    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'], // if you're using async/await
            },
          },
        },
        // Add other rules here
      ],
    },
    // Add other webpack config here
  };
};
