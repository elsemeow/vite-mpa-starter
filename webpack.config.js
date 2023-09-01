const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const isDevMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    jquery: {
      import: './src/external/jquery.js'
    },

    uikit: {
      import: './src/external/uikit.js'
    },

    icons: {
      import: './src/external/icons.js'
    },

    external: {
      import: './src/external/external.js'
    },

    app: {
      import: ['./src/app.js', './src/scss/app.scss']
    }
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/dist'),
    clean: true
  },

  devtool: isDevMode ? 'eval' : false,

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],

  optimization: {
    minimize: isDevMode ? false : true,
    runtimeChunk: 'single',

    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true }
            }
          ]
        }
      }),

      new TerserPlugin({
        test: /\.js$/i,
        terserOptions: {
          keep_classnames: true
        }
      })
    ]
  },

  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          exposes: ['$', 'jQuery']
        }
      },

      {
        test: require.resolve('uikit'),
        loader: 'expose-loader',
        options: {
          exposes: 'UIkit'
        }
      },

      {
        test: require.resolve('imask'),
        loader: 'expose-loader',
        options: {
          exposes: 'IMask'
        }
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },

      {
        test: /\.(woff2?|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }
    ]
  }
};
