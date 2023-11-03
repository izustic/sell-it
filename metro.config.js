const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();

  return {
    resolver: {
      assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'),
    },
  };
})();