const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const SystemJSPublicPathWebpackPlugin = require('systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin');

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  singleSpaWebpackConfig.plugins.push(new SystemJSPublicPathWebpackPlugin({
    systemjsModuleName: 'home'
  }));
  
  singleSpaWebpackConfig.externals.push('utility','styleguide');


  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};

