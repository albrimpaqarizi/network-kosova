module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          cwd: 'babelrc',
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          root: ['./'],
        },
      ],
      'jest-hoist',
    ],
  };
};
