module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['@/*', './src']],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  plugins: ['react'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': ['error', 'unix'],
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    'react-hooks/exhaustive-deps': ['off'],
    'import/prefer-default-export': ['off'],
    'react/no-array-index-key': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'jsx-a11y/label-has-associated-control': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'no-param-reassign': ['off'],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'no-duplicate-imports': 'error',
  },
}
