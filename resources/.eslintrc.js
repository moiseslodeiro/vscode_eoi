module.exports = {
   env: {
      browser: true,
      es6: true
   },
   extends: ['standard', 'prettier'],
   globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
   },
   parser: '@typescript-eslint/parser', // Más adelante podrán poner Babel
   parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
   },
   plugins: ['@typescript-eslint', 'prettier'],
   rules: {
      // Style config
      indent: ['error', 3], // Fuerza a 3 la identación
      'array-bracket-spacing': ['error', 'never', { singleValue: false }],
      camelcase: 'error',
      'capitalized-comments': ['error'],
      semi: ['error', 'always'],
      'space-unary-ops': ['error', { words: true, nonwords: false }],
      'spaced-comment': ['error', 'always'],
      'no-tabs': ['error', { allowIndentationTabs: true }],
      'multiline-comment-style': ['error', 'starred-block'],
      'comma-spacing': ['error', { before: false, after: true }],
      'eol-last': 'warn',

      // Best practices
      'no-var': 'error',
      'init-declarations': ['error', 'always'], // Las variables deben ser inicializadas antes
      'no-shadow': 'error',
      'no-unused-vars': 'warn',
      // <••> Baby yoda se pone triste si pones
      // (  ) "red" === color en vez de color === "red"
      yoda: 'warn',
      'max-lines-per-function': ['error', 50],
      'max-nested-callbacks': ['error', 5],
      'max-params': ['error', 5],
      'max-depth': ['error', 4],
      curly: 'error',
      'default-case': 'error',
      'default-param-last': ['error'],
      'no-alert': 'warn',
      'no-eval': 'warn',
      'no-useless-catch': 'error',
      'vars-on-top': 'warn',

      // Errores posibles
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error',
      'no-sparse-arrays': 'error',
      'no-setter-return': 'error',
      'no-irregular-whitespace': 'error',
      'no-extra-semi': 'error',
      'no-extra-parens': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],

      // Prettier
      'prettier/prettier': 'error'
   }
};
