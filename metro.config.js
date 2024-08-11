const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  // defaultConfig.resolver.sourceExts.push("js", "json", "ts", "tsx", "cjs");
  defaultConfig.resolver.assetExts.push(['cjs']);
  return defaultConfig;
})();
