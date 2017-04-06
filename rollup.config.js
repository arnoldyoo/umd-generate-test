import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
// import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/micomponent.umd.js',
  format: 'umd',
  moduleName: 'miComponent',
  globals: {
    '@angular/core': 'ng.core',
  },
  plugins: [
    resolve({
      jsnext: true, // part of an effort to ease the migration to ES2015 modules for Node packages
      main: true, // help the plugin decide which files should be used for the bundle
    }),
    commonjs(),
    // uglify()
  ]
}
