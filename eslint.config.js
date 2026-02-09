const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPrettierPlugin = require('eslint-plugin-prettier/recommended');
const reactNativePlugin = require('eslint-plugin-react-native');

module.exports = defineConfig([
  expoConfig,
  eslintPrettierPlugin,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      'react-native': reactNativePlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'react-native/no-inline-styles': 'warn',
    },
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: 'react-native', group: 'external', position: 'before' },
            { pattern: '@screens/**', group: 'internal', position: 'before' },
            {
              pattern: '@components/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@navigation/**',
              group: 'internal',
              position: 'before',
            },
            { pattern: '@hooks/**', group: 'internal', position: 'after' },
            { pattern: '@services/**', group: 'internal', position: 'after' },
            { pattern: '@zustand/**', group: 'internal', position: 'after' },
            { pattern: '@utils/**', group: 'internal', position: 'after' },
            { pattern: '@assets/**', group: 'internal', position: 'after' },
            { pattern: '@constants/**', group: 'internal', position: 'after' },
            { pattern: '@themes/**', group: 'internal', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['builtin', 'react', 'react-native'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
  {
    files: [
      '**/*.test.js',
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.spec.js',
      '**/*.spec.ts',
      '**/*.spec.tsx',
      'jest.setup.js',
    ],
    languageOptions: {
      globals: {
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
  },
  {
    ignores: [
      'dist/*',
      '.expo/**/*',
      '.husky/**/*',
      'node_modules/*',
      'expo-env.d.ts',
    ],
  },
]);
