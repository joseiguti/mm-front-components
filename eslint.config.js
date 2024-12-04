import { builtinModules } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';

import reactPlugin from 'eslint-plugin-react';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...builtinModules.reduce((globals, module) => {
          globals[module] = 'readonly';
          return globals;
        }, {}),
        window: 'readonly',
        document: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'jsx-a11y': jsxA11yPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.jsx', '.tsx'] },
      ],
      'react/react-in-jsx-scope': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'jsx-a11y/anchor-is-valid': 'error',
    },
  },
];
