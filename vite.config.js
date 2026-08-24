import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

function flatResolve() {
  return {
    name: 'flat-resolve',
    enforce: 'pre',
    resolveId(source, importer, options) {
      if (source.startsWith('@/') || (source.startsWith('.') && source.includes('/'))) {
        const basename = source.split('/').pop();
        if (basename && basename !== '.' && basename !== '..') {
          return this.resolve('./' + basename, importer, Object.assign({ skipSelf: true }, options));
        }
      }
      return null;
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    flatResolve(),
    react(),
  ]
});
