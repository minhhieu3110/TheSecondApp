module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@router': './src/navigation/router.js',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@responsive': './src/utils/responsive',
          '@components': './src/components',
          '@theme': './src/theme',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
