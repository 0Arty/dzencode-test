import js from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
   // Ігноруємо автогенероване
   {
      ignores: ['dist/**', 'build/**', 'node_modules/**', '.vite/**'],
   },

   // Node.js файли (конфіги, скрипти) — без типізованого лінту,
   // бо vite.config.ts / eslint.config.js не входять у src/tsconfig.app.json
   {
      files: ['vite.config.ts', 'scripts/**/*.js', 'eslint.config.js'],
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      languageOptions: {
         globals: {
            ...globals.node,
         },
      },
   },

   // React / TSX додатку — з типізованим (type-aware) TS-лінтом
   {
      files: ['src/**/*.{ts,tsx}'],
      extends: [
         js.configs.recommended,
         ...tseslint.configs.recommendedTypeChecked,
         react.configs.flat.recommended,
         react.configs.flat['jsx-runtime'],
      ],
      languageOptions: {
         parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
         },
         globals: {
            ...globals.browser,
         },
      },
      plugins: {
         'react-hooks': reactHooks,
         'jsx-a11y': jsxA11y,
         'simple-import-sort': simpleImportSort,
      },
      rules: {
         ...reactHooks.configs['recommended-latest'].rules,
         ...jsxA11y.configs.recommended.rules,

         'react/prop-types': 'off',
         'react/self-closing-comp': [
            'warn',
            {
               component: true,
               html: true,
            },
         ],

         // TS уже сам ловить unused/undef/explicit-any точніше за base ESLint,
         // тож base-версії цих правил вимкнені всередині tseslint.configs.recommended*
         '@typescript-eslint/no-unused-vars': 'warn',
         '@typescript-eslint/no-explicit-any': 'warn',
         '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { attributes: false } }],
         '@typescript-eslint/no-floating-promises': 'warn',
         '@typescript-eslint/no-unsafe-call': 'off',
         '@typescript-eslint/no-unsafe-member-access': 'off',
         '@typescript-eslint/no-unsafe-assignment': 'off',
         'no-console': 'warn',
         eqeqeq: ['error', 'always'],
         'no-var': 'error',
         'prefer-const': 'warn',

         // Сортування імпортів/експортів
         'simple-import-sort/imports': [
            'warn',
            {
               groups: [
                  ['^react$', '^react-dom'],
                  ['^@?\\w'],
                  ['^@widgets'],
                  ['^@features'],
                  ['^@entities'],
                  ['^@shared'],
                  ['^@icons'],
                  ['^@images'],
                  //   ['^@/'], // внутрішні аліаси (якщо є)
                  ['^\\.\\./'],
                  ['^\\./(?!.*\\.(css|scss)$)'],
                  ['^.+\\.(css|scss)$'],
               ],
            },
         ],
         'simple-import-sort/exports': 'warn',
      },
      settings: {
         react: { version: 'detect' },
      },
   },
)
