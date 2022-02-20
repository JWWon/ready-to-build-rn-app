module.exports = {
  env: { 'react-native/react-native': true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react-native/all',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-restricted-exports': 'off',
        'react-native/no-raw-text': 'off',
        'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
        'react/require-default-props': ['error', { ignoreFunctionalComponents: true }],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'react', 'react-native', 'react-hooks', 'jest'],
  root: true,
};
