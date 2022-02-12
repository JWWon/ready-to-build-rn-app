module.exports = {
  extends: ['@react-native-community', 'airbnb', 'airbnb-typescript'],
  overrides: [
    {
      files: ['*.js', '*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
          },
        ],
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-one-expression-per-line': [
          'error',
          {
            allow: 'literal',
          },
        ],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  root: true,
};
