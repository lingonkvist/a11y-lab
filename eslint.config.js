import base from '@lnu/eslint-config'
import browser from '@lnu/eslint-config/browser'
import jsdoc from '@lnu/eslint-config/jsdoc'

export default [
  ...base,
  ...browser,
  ...jsdoc,
  {
    ignores: ['lib/'],
  },
  {
    settings: {
      jsdoc: {
        ignorePrivate: true,
      },
    },
    rules: {
      'jsdoc/require-jsdoc': [
        'warn',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
          },
          publicOnly: true,
          checkGetters: false,
          checkSetters: false,
        },
      ],
    },
  },
]
