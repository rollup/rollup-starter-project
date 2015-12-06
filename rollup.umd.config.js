import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/rollup-starter-project.umd.js';
config.moduleName = 'rollupStarterProject';

export default config;
