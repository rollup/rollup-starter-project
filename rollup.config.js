import babel from 'rollup-plugin-babel';
import npm from 'rollup-plugin-npm';

export default {
  entry: 'lib/index.js',
  sourceMap: true,
  plugins: [babel(), npm({ jsnext: true })]
};
