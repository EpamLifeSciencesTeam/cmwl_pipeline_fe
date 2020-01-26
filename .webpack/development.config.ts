import { Configuration } from 'webpack';
import merge from 'webpack-merge';

import { config as baseConfig, paths } from './base.config';

export const config: Configuration = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.output,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    },
    port: 8080,
    stats: 'minimal',
    clientLogLevel: 'warning'
  },
  watch: true,
  watchOptions: {
    poll: true
  }
});

export default config;
