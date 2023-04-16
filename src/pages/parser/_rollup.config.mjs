import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/pages/parser/index.ts',
  output: {
    dir: 'src/pages/parser',
    format: 'cjs'
  },
  plugins: [
    typescript()
  ]
}

/*import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/pages/parser/_index.js',
  output: {
    file: 'src/pages/parser/bundle.min.js',
    format: 'iife',
    name: 'version',
    plugins: [terser()]
  },
  plugins: [
    css({ output: 'bundle.min.css' }),
    svelte({

      include: 'src/components/interaction/*.svelte',

      onwarn: (warning, handler) => {
        if (warning.code === 'a11y-distracting-elements') return;
        handler(warning);
      },

      compilerOptions: {
        generate: 'dom',
      }
    }),

    resolve({
      browser: true,
      exportConditions: ['svelte'],
      extensions: ['.svelte']
    }),
  ]
}*/
