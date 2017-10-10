module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.resolve.extensions.push('.vue');

  return storybookBaseConfig;
};
