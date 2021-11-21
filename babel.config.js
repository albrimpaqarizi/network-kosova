module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@/*': './src/*',
            '@components': './src/components',
            '@atoms': './src/components/atoms',
            '@molecules': './src/components/molecules',
            '@organisms': './src/components/organisms',
            '@templates': './src/components/templates',
            '@navigation': './src/navigation',
            '@config': './src/config',
            '@stores': './src/stores',
            '@screens': './src/screens',
            '@styles': './src/styles',
            '@hooks': './src/hooks',
            '@enums': './src/enums',
            '@interfaces': './src/interfaces',
            '@utils': './src/utils',
          },
        },
      ],
      'jest-hoist',
    ],
  };
};
