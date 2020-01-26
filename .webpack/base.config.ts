import HtmlWebpackPlugin from 'html-webpack-plugin';
import path              from 'path';
import { Configuration } from 'webpack';

const projectRoot = path.resolve(__dirname, '..');
const src = path.join(projectRoot, 'src');
const project = require(path.join(projectRoot, 'package.json'));

export const paths = {
  root: projectRoot,
  sources: {
    path: src,
    html: path.join(src, 'html'),
    typescript: path.join(src, 'typescript')
  },
  output: path.join(projectRoot, 'dist')
};

export const config: Configuration = {
  context: paths.sources.path,
  entry: {
    app: path.join(paths.sources.typescript, 'index.tsx')
  },
  output: {
    filename: '[name].bundle.[hash].js',
    path: paths.output
  },
  target: 'web',
  resolve: {
    alias: {
      "@pipeline": paths.sources.typescript
    },
    extensions: [ '.tsx', '.ts', '.js' ],
    mainFields: [ 'module', 'browser', 'main' ]
  },
  optimization: {
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.(a?png|svg)$/, use: 'url-loader?limit=10000' },
      {
        test: /\.(jpe?g|png|ico|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.sources.html, 'index.html'),
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true
      },
      meta: {
        title: project.name,
        description: project.description,
        keywords: project.keywords.join(',')
      }
    })
  ]
};

export default config;
