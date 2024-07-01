module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },

    // project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  ignorePatterns: ['vite.config.ts'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/button-has-type': 1,
    'react/prop-types': 1,
    'no-param-reassign': 1,
    'react/jsx-no-useless-fragment': 1,
    'react/jsx-props-no-spreading': 1,
    'react/no-danger': 1,
    '@typescript-eslint/naming-convention': 1,
    '@typescript-eslint/no-explicit-any': 2,
  },
};
