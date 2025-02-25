const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlWebpackPluginConfig = {
  meta: {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  },
  templateParameters: {
    brandName: 'Story App',
    navLinks: `
      <ul class="navbar-nav ms-auto mb-2 mb-md-0">
        <li class="nav-item">
          <a class="nav-link text-white" href="/">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/add-story">Add Story</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/about">About</a>
        </li>
      </ul>
    `,
    footerContent: '&copy; 2024 Story App. All rights reserved.',
  },
};

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/js/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dashboard',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/views/dashboard.html'),
      ...htmlWebpackPluginConfig,
    }),
    new HtmlWebpackPlugin({
      title: 'Add Story',
      filename: 'add-story/index.html',
      template: path.resolve(__dirname, 'src/views/add-story.html'),
      ...htmlWebpackPluginConfig,
    }),
    new HtmlWebpackPlugin({
      title: 'About',
      filename: 'about/index.html',
      template: path.resolve(__dirname, 'src/views/about.html'),
      ...htmlWebpackPluginConfig,
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      '@scss': path.resolve(__dirname, 'src/scss/'),
    },
  },
};
