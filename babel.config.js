module.exports = {
  env: {
    test: {
      plugins: ['react-native-config-node/transform'],
    },
  },
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@apis': './src/apis',
          '@components': './src/components',
          '@pages': './src/pages',
          '@routers': './src/routers',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
