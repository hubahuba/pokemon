module.exports = {
  presets: ['module:@react-native/babel-preset', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~': './app',
          '@': './core',
          '~atoms': './app/components/atoms',
          '~molecules': './app/components/molecules',
          '~organisms': './app/components/organisms',
        },
      },
    ],
    'nativewind/babel',
    'react-native-reanimated/plugin',
  ],
};
