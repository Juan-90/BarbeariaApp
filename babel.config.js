module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@services': './src/services',
            '@context': './src/context',
          },
        },
      ],
    ],
  };
};
