import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['dist'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-console': ['warn'],
      eqeqeq: ['error', 'always'],
      'no-unused-vars': ['warn'],
      'object-curly-spacing': ['error', 'always'],
      indent: ['error', 2],
      'react/react-in-jsx-scope': ['off', 'always'],
    },
  },
];
