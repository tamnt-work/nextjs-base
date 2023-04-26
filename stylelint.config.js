module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-scss'],
  plugins: ['stylelint-selector-bem-pattern', 'stylelint-prettier'],
  ignorePath: '.gitignore',
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'plugin/selector-bem-pattern': {
      preset: 'bem',
    },
    'prettier/prettier': [
      true,
      {
        singleQuote: true,
        tabWidth: 2,
      },
    ],
  },
  singleQuote: true,
};
