export default {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
  ],
  rules: {
    'color-hex-length': 'short',
    'no-duplicate-selectors': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'scss/operator-no-unspaced': null,
    'scss/load-no-partial-leading-underscore': null,
  },
  ignoreFiles: ['src/sass/**/_*scss', 'src/sass/global/mixins.scss'],
}
