// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential',  'eslint:recommended'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'vue/no-multi-spaces': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'no-mixed-spaces-and-tabs': ['error', false],
    'no-trailing-spaces': 'error',
    'keyword-spacing': 'error',
    'comma-spacing': 'error',
    'space-infix-ops': 'error',
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'space-before-function-paren': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'block-spacing': 'error',
    'arrow-spacing': 'error',
    'quotes': ['error', 'single'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'vue/html-indent': 'error',
    'vue/html-quotes': 'error'
  }
}
