var vueLoaderConfig = require('../build/vue-loader.conf');

module.exports = (storybookBaseConfig, configType) => {
  const rules = storybookBaseConfig.module.rules.map(rule => {
    if(rule.loader.indexOf('vue-loader') != -1) {
      rule.options = vueLoaderConfig;
    }

    return rule;
  });

  storybookBaseConfig.module.rules = rules;
  storybookBaseConfig.resolve.extensions.push('.vue');
  return storybookBaseConfig;
};
