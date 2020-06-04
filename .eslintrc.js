// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'camelcase': ['warn'],
    'eqeqeq': ['warn'],
    'keyword-spacing' : ['warn'],
    'linebreak-style': ['off', 'unix'],
    'max-statements-per-line': ['error', {'max': 1}],
    'new-cap' : ['error'],
    'no-delete-var':  ['error'],
    'no-duplicate-imports' : ['error'],
    'no-eval': ['error'],
    'no-new-object': ['warn'],
    'no-trailing-spaces': ['error', {'skipBlankLines': true}],
    'no-useless-escape': ['warn'],
    'quotes': ['warn', 'single'],
    'semi': ['error', 'always'],
    'semi-style': ['error', 'last'],
    'space-in-parens' : ['warn'],
    'space-infix-ops' : ['warn'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
