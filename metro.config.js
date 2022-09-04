// /**
//  * Metro configuration for React Native
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
// const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts;
// module.exports = {
//   transformer: {
//     getTransformOptions: () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
//   resolver: {
//     sourceExts: process.env.RN_SRC_EXT
//       ? [...process.env.RN_SRC_EXT.split(',').concat(defaultSourceExts), 'cjs'] // <-- cjs added here
//       : [...defaultSourceExts, 'cjs'], // <-- cjs added here
//   },
// };

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push('cjs');

// Remove all console logs in production...
config.transformer.minifierConfig.compress.drop_console = true;

module.exports = config;
