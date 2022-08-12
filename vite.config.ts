import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'react-axios',
      fileName: 'react-axios',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['react', '@drpiou/axios'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React',
          '@drpiou/axios': 'DrAxios',
        },
      },
    },
  },
});
