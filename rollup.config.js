import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'

module.exports = [
  {
    input: './src/grid.js',
    output: {
      file: './grid.cjs',
      format: 'cjs',
    },
  },
  {
    input: './src/picker.js',
    output: {
      file: './picker.cjs',
      format: 'cjs',
    },
  },
  {
    input: './src/numbers.js',
    output: {
      file: './numbers.cjs',
      format: 'cjs',
    },
  },
  {
    input: './src/sequence.js',
    output: {
      file: './sequence.cjs',
      format: 'cjs',
    },
  },
  {
    input: './src/index.js',
    output: [
      {
        file: './dist/index.cjs',
        format: 'cjs',
      },
      {
        file: './dist/index.mjs',
        format: 'es',
      },
    ],
  },
].map((x) => ({
  ...x,
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
}))
