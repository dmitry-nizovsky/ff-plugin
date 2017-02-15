var webpack = require('webpack');

module.exports = function(config) {
  global.FFLoaderConfig = config || [];

  return new webpack.DefinePlugin({
    FFLoaderConfig: JSON.stringify(global.FFLoaderConfig)
  });
};
