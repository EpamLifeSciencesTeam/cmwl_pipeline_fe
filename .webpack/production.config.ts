import { Configuration, LoaderOptionsPlugin } from 'webpack';
import merge                                  from 'webpack-merge';
import { CleanWebpackPlugin }                 from 'clean-webpack-plugin';
import UglifyJsPlugin                         from 'uglifyjs-webpack-plugin';

import { config as baseConfig } from './base.config';

export const config: Configuration = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new UglifyJsPlugin(),
    new LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
});

export default config;
