module.exports = {
  parser: '@babel/eslint-parser',  // Use Babel parser for modern JavaScript
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',  // Use recommended rules from ESLint
    'plugin:prettier/recommended',  // Integrate Prettier with ESLint
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',  // Show Prettier issues as errors
    // Add any additional rules or overrides here
  },
};