module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            atoms: "./src/components/atoms",
            templates: "./src/components/templates",
            hooks: "./src/hooks",
            navigation: "./src/navigation",
            interfaces: "./src/interfaces/*",
            theme: "./src/theme/*",
          },
        },
      ],
    ],
  };
};
