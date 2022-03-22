/* eslint-disable max-len -- disabling file length limitation for compactness. */
module.exports = {
  extends: ['plugin:import/typescript'],
  globals: {document: 'readonly', navigator: 'readonly', window: 'readonly'},

  overrides: [
    {

      // Disable some rules for tests
      files: ['**/__tests__/*'],

      rules: {
        'import/no-relative-parent-imports': 'off',
      },
    },
  ],

  parser       : '@typescript-eslint/parser',
  parserOptions: {ecmaFeatures: {jsx: true}, ecmaVersion: 2020, sourceType: 'module'},
  plugins      : ['@typescript-eslint', 'eslint-comments', 'import', 'ramda', 'unicorn'],

  rules: {
    '@typescript-eslint/array-type'                     : ['error', {default: 'generic', readOnly: 'generic'}],
    '@typescript-eslint/member-delimiter-style'         : ['error', {multiline: {delimiter: 'none', requireLast: true}, singleline: {delimiter: 'comma', requireLast: false}}],
    '@typescript-eslint/no-duplicate-imports'           : ['error'],
    '@typescript-eslint/no-explicit-any'                : ['error'],
    '@typescript-eslint/no-extra-parens'                : ['error'],
    '@typescript-eslint/no-extra-semi'                  : ['error'],
    '@typescript-eslint/no-shadow'                      : ['error'],
    '@typescript-eslint/no-unused-expressions'          : ['error'],
    '@typescript-eslint/no-unused-vars'                 : ['error', {argsIgnorePattern: '^_'}],
    '@typescript-eslint/object-curly-spacing'           : ['error', 'never'],
    '@typescript-eslint/padding-line-between-statements': ['error', {blankLine: 'always', next: ['if', 'multiline-block-like', 'multiline-const', 'multiline-expression', 'multiline-let', 'multiline-var'], prev: '*'}, {blankLine: 'always', next: '*', prev: ['if', 'multiline-block-like', 'multiline-const', 'multiline-expression', 'multiline-let', 'multiline-var']}],
    '@typescript-eslint/quotes'                         : ['error', 'single'],
    '@typescript-eslint/semi'                           : ['error', 'never'],
    '@typescript-eslint/space-before-function-paren'    : ['error', {anonymous: 'always', asyncArrow: 'always', named: 'never'}],
    '@typescript-eslint/space-infix-ops'                : ['error', {int32Hint: false}],
    '@typescript-eslint/type-annotation-spacing'        : ['error'],
    'arrow-parens'                                      : ['error', 'as-needed'],
    'arrow-spacing'                                     : ['error'],
    'brace-style'                                       : ['error', '1tbs', {allowSingleLine: true}],
    'capitalized-comments'                              : ['error'],
    'comma-dangle'                                      : ['error', {arrays: 'always-multiline', exports: 'always-multiline', functions: 'always-multiline', imports: 'always-multiline', objects: 'always-multiline'}],
    'comma-spacing'                                     : ['error'],
    'curly'                                             : ['error', 'all'],
    'eol-last'                                          : ['error'],
    'eqeqeq'                                            : ['error'],
    'eslint-comments/disable-enable-pair'               : ['error', {'allowWholeFile': true}],
    'eslint-comments/no-aggregating-enable'             : ['error'],
    'eslint-comments/no-duplicate-disable'              : ['error'],
    'eslint-comments/no-unlimited-disable'              : ['error'],
    'eslint-comments/no-unused-disable'                 : ['error'],
    'eslint-comments/no-unused-enable'                  : ['error'],
    'eslint-comments/no-use'                            : ['error', {'allow': ['eslint-disable', 'eslint-disable-next-line', 'eslint-enable']}],
    'eslint-comments/require-description'               : ['error', {'ignore': ['eslint-enable']}],
    'id-length'                                         : ['error', {exceptions: ['_', 'R', 'x', 'y']}],
    'implicit-arrow-linebreak'                          : ['error', 'beside'],
    'import/no-relative-parent-imports'                 : ['error'],
    'indent'                                            : ['error', 2, {ArrayExpression: 1, CallExpression: {arguments: 1}, FunctionExpression: {parameters: 1}, MemberExpression: 1, ObjectExpression: 1, VariableDeclarator: 0}],
    'key-spacing'                                       : ['error', {afterColon: true, align: 'colon'}],
    'keyword-spacing'                                   : ['error', {after: false, before: false, overrides: {as: {after: true, before: true}, catch: {after: false, before: true}, const: {after: true, before: false}, default: {after: true, before: true}, export: {after: true, before: false}, finally: {after: true, before: true}, from: {after: true, before: true}, import: {after: true, before: false}, let: {after: true, before: false}, of: {after: true, before: true}, return: {after: true, before: false}, try: {after: true, before: false}, var: {after: true, before: false}}}],
    'line-comment-position'                             : ['error', {position: 'above'}],
    'lines-around-comment'                              : ['error', {allowBlockStart: true, beforeBlockComment: true, beforeLineComment: true}],
    'max-len'                                           : ['error', {code: 120, ignoreComments: true, ignoreUrls: true, tabWidth: 2}],
    'max-lines'                                         : ['error', 300],
    'max-params'                                        : ['error', 2],
    'no-alert'                                          : ['error'],
    'no-debugger'                                       : ['error'],
    'no-duplicate-imports'                              : ['off'],
    'no-extra-parens'                                   : ['off'],
    'no-extra-semi'                                     : ['off'],
    'no-mixed-spaces-and-tabs'                          : ['error'],
    'no-multi-spaces'                                   : ['error', {exceptions: {AssignmentExpression: true, Property: true}}],
    'no-multiple-empty-lines'                           : ['error', {max: 1}],
    'no-negated-condition'                              : ['error'],
    'no-nested-ternary'                                 : ['error'],
    'no-shadow'                                         : ['off'],
    'no-spaced-func'                                    : ['error'],
    'no-trailing-spaces'                                : ['error'],
    'no-unneeded-ternary'                               : ['error'],
    'no-unused-expressions'                             : ['off'],
    'no-unused-vars'                                    : ['off'],
    'object-curly-spacing'                              : ['off'],
    'object-shorthand'                                  : ['error', 'always'],
    'one-var'                                           : ['error', 'never'],
    'one-var-declaration-per-line'                      : ['error', 'always'],
    'padded-blocks'                                     : ['error', 'never'],
    'padding-line-between-statements'                   : ['off'],
    'quotes'                                            : ['off'],
    'ramda/compose-simplification'                      : ['error'],
    'ramda/cond-simplification'                         : ['error'],
    'ramda/eq-by-simplification'                        : ['error'],
    'ramda/filter-simplification'                       : ['error'],
    'ramda/map-simplification'                          : ['error'],
    'ramda/merge-simplification'                        : ['error'],
    'ramda/no-redundant-and'                            : ['error'],
    'ramda/no-redundant-not'                            : ['error'],
    'ramda/no-redundant-or'                             : ['error'],
    'ramda/pipe-simplification'                         : ['error'],
    'ramda/reduce-simplification'                       : ['error'],
    'ramda/set-simplification'                          : ['error'],
    'ramda/when-simplification'                         : ['error'],
    'semi'                                              : ['off'],
    'sort-imports'                                      : ['error', {ignoreCase: true, ignoreMemberSort: false, memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']}],
    'sort-keys'                                         : ['error', 'asc', {caseSensitive: false}],
    'space-before-blocks'                               : ['error', 'always'],
    'space-before-function-paren'                       : ['off'],
    'space-infix-ops'                                   : ['off'],
    'spaced-comment'                                    : ['error', 'always'],
    'strict'                                            : ['error', 'never'],
    'switch-colon-spacing'                              : ['error'],
    'unicorn/prevent-abbreviations'                     : ['error', {replacements: {dir: false, dirs: false, ex: {error: true, exception: true}, params: false, props: false}}],
  },
}
