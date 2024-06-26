module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module:react-native-dotenv"],
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['.'],
        alias: {
          '@root': './',
          '@assets': './src/assets',
          'src': './src/'
        }
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
