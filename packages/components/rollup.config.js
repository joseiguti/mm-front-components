import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
    json(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx'],
    }),
  ],
  external: [
    'react',
    'react-dom',
    '@mui/icons-material',
    '@mui/material',
    '@mui/system',
    '@mui/utils',
  ],

  onwarn: (warning, warn) => {
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
      return;
    }
    warn(warning);
  },
};
