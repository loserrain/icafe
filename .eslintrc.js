module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        // printWidth: 200,
        semi: false,
        trailingComma: 'es5',
        bracketSpacing: true,
        singleQuote: true,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-useless-escape': 0,
    'no-multiple-empty-lines': [
      2,
      {
        max: 3,
      },
    ],
  },
  plugins: ['prettier', 'vue'],
  parserOptions: {
    parser: 'babel-eslint',
  },
}
