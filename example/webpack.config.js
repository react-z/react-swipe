const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./example/index.js'],
  devtool: 'inline-source-map',
  output: { filename: 'bundle.js', publicPath: '' },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [ { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/react'] } } ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'react infinite loader example', template: './example/index.html' })
  ],
}
