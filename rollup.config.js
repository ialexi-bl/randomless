import terser from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'

module.exports = [
  {
    input: './src/grid.js',
    output: {
      file: './grid.js',
      format: 'cjs',
    },
  },
  {
    input: './src/picker.js',
    output: {
      file: './picker.js',
      format: 'cjs',
    },
  },
  {
    input: './src/numbers.js',
    output: {
      file: './numbers.js',
      format: 'cjs',
    },
  },
  {
    input: './src/sequence.js',
    output: {
      file: './sequence.js',
      format: 'cjs',
    },
  },
  {
    input: './src/index.js',
    output: [
      {
        file: './dist/index.js',
        format: 'cjs',
      },
      {
        file: './dist/index.es.js',
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
